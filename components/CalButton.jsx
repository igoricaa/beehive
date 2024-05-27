'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect, useRef } from 'react';
import { calculateOverlayPosition } from '../utils/utils';
import styles from './CtaButton.module.scss';

export default function CalButton({ messages }) {
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();

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
    <button
      className={styles.button}
      data-cal-namespace=''
      data-cal-link='beehive/discovery-session-w-beehive-agency'
      data-cal-config='{"layout":"month_view"}'
      style={{ outline: 'none', border: 'none', cursor: 'pointer' }}
    >
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
