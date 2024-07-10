'use client';

import styles from './ContactFormButton.module.scss';
import { useEffect, useRef } from 'react';
import { calculateOverlayPosition } from '../../utils/utils';

export default function ContactFormButton({ messages }) {
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
    <button className={['hoverable', styles.button].join(' ')} type='submit'>
      <div ref={buttonRef} className={styles.innerWrapper}>
        <span ref={overlayRef} className={styles.overlay}></span>
        <div className={styles.textWrapper}>
          <span>{messages.textMain}</span>
          <span>{messages.textSecondary}</span>
        </div>
      </div>
    </button>
  );
}
