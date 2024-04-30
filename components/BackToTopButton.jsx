'use client';

import { useEffect, useState } from 'react';
import styles from './BackToTopButton.module.scss';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisible);
    }
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id='backToTopButton'
      className={[styles.backToTopButton, visible ? styles.visible : ''].join(
        ' '
      )}
      onClick={scrollToTop}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='34.324'
        height='19.283'
        viewBox='0 0 34.324 19.283'
      >
        <g
          id='Group_64'
          data-name='Group 64'
          transform='translate(-558.379 245.191) rotate(-90)'
        >
          <line
            id='Line_7'
            data-name='Line 7'
            x2='15.041'
            y2='15.041'
            transform='translate(228.029 560.5)'
            fill='none'
            stroke='#fff'
            strokeLinecap='round'
            strokeWidth='3'
          />
          <line
            id='Line_8'
            data-name='Line 8'
            y1='15.041'
            x2='15.041'
            transform='translate(228.029 575.541)'
            fill='none'
            stroke='#fff'
            strokeLinecap='round'
            strokeWidth='3'
          />
        </g>
      </svg>
    </button>
  );
}
