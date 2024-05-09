'use client';

import styles from './ContactFormButton.module.scss';
import { useEffect, useRef } from 'react';
import { calculateOverlayPosition } from '../utils/utils';

export default function ContactFormButton() {
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const button = buttonRef.current;
    button.addEventListener('mouseenter', (e) => {
      calculateOverlayPosition(e, button, overlayRef.current);
    });
    button.addEventListener('mouseout', (e) => {
      calculateOverlayPosition(e, button, overlayRef.current);
    });

    return () => {
      button.removeEventListener('mouseenter', calculateOverlayPosition());
      button.removeEventListener('mouseleave', calculateOverlayPosition());
    };
  }, []);

  return (
    <button className={styles.button} type='submit'>
      <div ref={buttonRef} className={styles.innerWrapper}>
        <span ref={overlayRef} className={styles.overlay}></span>
        <div className={styles.textWrapper}>
          <span>Pošalji poruku</span>
          <span>I proveri spam za svaki slučaj</span>
        </div>
      </div>
    </button>
  );
}
