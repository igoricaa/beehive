'use client';

import { useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { usePathname } from '@/navigation';
import { useLocale } from 'next-intl';

const CustomCursor = ({ messages }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const [isMobile, setIsMobile] = useState(false);
  const [cursorText, setCursorText] = useState('');

  function onMouseHover(bigBall, smallBall) {
    if (bigBall) {
      gsap.to(bigBall, {
        duration: 0.3,
        scale: 4,
        opacity: 0.5,
      });
    }

    if (smallBall) {
      gsap.to(smallBall, {
        duration: 0.1,
        y: -50,
      });
    }
  }

  function onMouseHoverOut(bigBall) {
    if (bigBall) {
      gsap.to(bigBall, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
      });
    }
  }

  const onMouseMove = useCallback(
    (e, smallBall, bigBall, cursorTextElement) => {
      if (bigBall) {
        gsap.to(bigBall, {
          duration: 0.4,
          x: e.pageX - 15,
          y: e.pageY - 15,
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
    [cursorText, locale]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobileCurr = window.matchMedia('(max-width: 680px)').matches;
      setIsMobile(isMobileCurr);

      if (isMobileCurr) return;

      const bigBall = document.querySelector('.cursor__ball--big');
      const smallBall = document.querySelector('.cursor__ball--small');
      const hoverables = document.querySelectorAll('.hoverable');
      const hoverablesView = document.querySelectorAll('.hoverableView');
      const hoverablesDrag = document.querySelectorAll('.hoverableDrag');
      const cursorTextElement = document.querySelector('.cursorText');

      document.body.addEventListener('mousemove', (event) =>
        onMouseMove(event, smallBall, bigBall, cursorTextElement)
      );

      hoverables.forEach((hoverable) => {
        hoverable.addEventListener('mouseenter', () => {
          onMouseHover(bigBall, smallBall);
        });
        hoverable.addEventListener('mouseleave', () => {
          onMouseHoverOut(bigBall);
        });
        hoverable.addEventListener('click', () => {
          onMouseHoverOut(bigBall);
        });
      });

      hoverablesView.forEach((hoverable) => {
        hoverable.addEventListener('mouseenter', () => {
          setCursorText('view');
          onMouseHover(bigBall, smallBall);
        });
        hoverable.addEventListener('mouseleave', () => {
          setCursorText('');
          onMouseHoverOut(bigBall);
        });
        hoverable.addEventListener('click', () => {
          setCursorText('');
          onMouseHoverOut(bigBall);
        });
      });

      hoverablesDrag.forEach((hoverable) => {
        hoverable.addEventListener('mouseenter', () => {
          setCursorText('drag');
          onMouseHover(bigBall);
        });
        hoverable.addEventListener('mouseleave', () => {
          setCursorText('');
          onMouseHoverOut(bigBall);
        });
        hoverable.addEventListener('click', () => {
          setCursorText('');
          onMouseHoverOut(bigBall);
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
      <div className='cursor'>
        <div className='cursor__ball cursor__ball--big '>
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
          className='cursorText'
          style={cursorText ? { display: 'block' } : { display: 'none' }}
        >
          {cursorText === 'view'
            ? messages.viewHoverText
            : messages.dragHoverText}
        </span>

        <div
          className='cursor__ball cursor__ball--small'
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
