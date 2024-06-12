'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { usePathname } from '@/navigation';
import { useLocale } from 'next-intl';

const CustomCursor = () => {
  const pathname = usePathname();
  const locale = useLocale();

  function onMouseHover(target) {
    gsap.to(target, {
      duration: 0.3,
      scale: 4,
      mixBlendMode: 'difference',
    });
  }
  function onMouseHoverOut(target) {
    gsap.to(target, {
      duration: 0.3,
      scale: 1,
      mixBlendMode: 'normal',
    });
  }

  function onMouseMove(e, smallBall, bigBall) {
    gsap.to(bigBall, {
      duration: 0.4,
      x: e.pageX - 15,
      y: e.pageY - 15,
    });

    gsap.to(smallBall, {
      duration: 0.1,
      x: e.pageX - 5,
      y: e.pageY - 12.5,
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const bigBall = document.querySelector('.cursor__ball--big');
      const smallBall = document.querySelector('.cursor__ball--small');
      const hoverablesInner = document.querySelectorAll('.hoverable');

      document.body.addEventListener('mousemove', (event) =>
        onMouseMove(event, smallBall, bigBall)
      );

      console.log('IMA LI GA:' + hoverablesInner.length);
      hoverablesInner.forEach((hoverable) => {
        console.log('IMA GA:' + hoverable);
        hoverable.addEventListener('mouseenter', () => onMouseHover(bigBall));
        hoverable.addEventListener('mouseleave', () =>
          onMouseHoverOut(bigBall)
        );
      });
    }
    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      const hoverablesInner = document.querySelectorAll('a');
      hoverablesInner.forEach((hoverable) => {
        hoverable.removeEventListener('mouseenter', onMouseHover);
        hoverable.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, [pathname]);

  return (
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

      <div className='cursor__ball cursor__ball--small'>
        <svg height='10' width='10'>
          <circle cx='5' cy='5' r='4' strokeWidth='0' fill='#000'></circle>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
