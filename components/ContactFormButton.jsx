'use client';

import styles from './ContactFormButton.module.scss';
import { useEffect, useRef } from 'react';

export default function ContactFormButton() {
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  const calculacteOverlayPosition = (event) => {
    if (!event) return;
    const button = buttonRef.current;
    const x = event.pageX - button.getBoundingClientRect().left;
    const y = event.pageY - button.getBoundingClientRect().top - window.scrollY;

    overlayRef.current.style.top = `${y}px`;
    overlayRef.current.style.left = `${x}px`;
  };

  useEffect(() => {
    if (!buttonRef.current) return;
    const button = buttonRef.current;
    button.addEventListener('mouseenter', (e) => {
      calculacteOverlayPosition(e);
    });
    button.addEventListener('mouseout', (e) => {
      calculacteOverlayPosition(e);
    });

    return () => {
      button.removeEventListener('mouseenter', calculacteOverlayPosition());
      button.removeEventListener('mouseleave', calculacteOverlayPosition());
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
