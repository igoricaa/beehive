'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import styles from './CustomCursor.module.scss';
import CustomEase from 'gsap/CustomEase';

const CustomCursor = ({ messages }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const [isMobile, setIsMobile] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const cursorTextRef = useRef(null);

  gsap.registerPlugin(CustomEase);
  CustomEase.create('hoverIn', '.76,0,.24,1');
  CustomEase.create('hoverOut', '.32,0,.67,0');

  function onMouseHover(e, bigBall, smallBall) {
    setIsHovering(true);

    if (bigBall) {
      gsap.to(bigBall, {
        duration: 0.4,
        scale: 4,
        opacity: 0.5,
        ease: "hoverIn",
      });
    }

    if (smallBall) {
      gsap.to(smallBall, {
        duration: 0.1,
        ease: "hoverIn",
      });
    }
  }

  function onMouseHoverOut(bigBall) {
    setIsHovering(false);

    if (bigBall) {
      gsap.to(bigBall, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: "hoverOut",
      });
    }
  }

  const onMouseMove = useCallback(
    (e, smallBall, bigBall, cursorTextElement) => {
      if (bigBall) {
        const y = isHovering ? e.pageY - 8 : e.pageY - 14;

        gsap.to(bigBall, {
          duration: 0.4,
          x: e.pageX - 15,
          y: y,
        });
      }

      if (smallBall) {
        gsap.to(smallBall, {
          duration: 0.1,
          x: e.pageX - 5,
          y: e.pageY - 12.5,
        });
      }

      const cursorTextXTranslateAmount =
        locale === 'sr' ? (cursorText === 'view' ? 40 : 18) : 18;

      if (cursorTextElement) {
        gsap.to(cursorTextElement, {
          duration: 0,
          x: e.pageX - cursorTextXTranslateAmount,
          y: e.pageY - 21,
        });
      }
    },
    [cursorText, locale, isHovering]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobileCurr = window.matchMedia('(max-width: 680px)').matches;
      setIsMobile(isMobileCurr);

      if (isMobileCurr) return;

      const hoverables = document.querySelectorAll('.hoverable');
      const hoverablesView = document.querySelectorAll('.hoverableView');
      const hoverablesDrag = document.querySelectorAll('.hoverableDrag');

      document.body.addEventListener('mousemove', (event) =>
        onMouseMove(
          event,
          smallBallRef.current,
          bigBallRef.current,
          cursorTextRef.current
        )
      );

      hoverables.forEach((hoverable) => {
        hoverable.addEventListener('mouseenter', (event) => {
          onMouseHover(event, bigBallRef.current, smallBallRef.current);
        });
        hoverable.addEventListener('mouseleave', () => {
          onMouseHoverOut(bigBallRef.current);
        });
        hoverable.addEventListener('click', () => {
          onMouseHoverOut(bigBallRef.current);
        });
      });

      hoverablesView.forEach((hoverable) => {
        hoverable.addEventListener('mouseenter', (event) => {
          setCursorText('view');
          onMouseHover(event, bigBallRef.current, smallBallRef.current);
        });
        hoverable.addEventListener('mouseleave', () => {
          setCursorText('');
          onMouseHoverOut(bigBallRef.current);
        });
        hoverable.addEventListener('click', () => {
          setCursorText('');
          onMouseHoverOut(bigBallRef.current);
        });
      });

      hoverablesDrag.forEach((hoverable) => {
        hoverable.addEventListener('mouseenter', (event) => {
          setCursorText('drag');
          onMouseHover(event, bigBallRef.current);
        });
        hoverable.addEventListener('mouseleave', () => {
          setCursorText('');
          onMouseHoverOut(bigBallRef.current);
        });
        hoverable.addEventListener('click', () => {
          setCursorText('');
          onMouseHoverOut(bigBallRef.current);
        });
      });
    }

    return () => {
      if (isMobile) return;

      document.body.removeEventListener('mousemove', onMouseMove);
      const hoverables = document.querySelectorAll('a');
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener('mouseenter', onMouseHover);
        hoverable.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, [isMobile, onMouseMove, pathname]);

  return (
    !isMobile && (
      <div className={styles.cursor}>
        <div ref={bigBallRef} className={styles.cursorBall}>
          <svg height='30' width='30'>
            <circle
              cx='15'
              cy='15'
              r='12'
              strokeWidth='0'
              fill='#ffd600'
            ></circle>
          </svg>
        </div>
        <span
          ref={cursorTextRef}
          className={styles.cursorText}
          style={cursorText ? { display: 'block' } : { display: 'none' }}
        >
          {cursorText === 'view'
            ? messages.viewHoverText
            : messages.dragHoverText}
        </span>

        <div
          ref={smallBallRef}
          className={styles.cursorBall}
          style={cursorText ? { display: 'none' } : { display: 'block' }}
        >
          <svg height='10' width='10'>
            <circle cx='5' cy='5' r='4' strokeWidth='0' fill='#000'></circle>
          </svg>
        </div>
      </div>
    )
  );
};

export default CustomCursor;
