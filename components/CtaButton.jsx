'use client';

import Link from '@/components/Link';
import styles from './CtaButton.module.scss';
import { useEffect, useRef, useState } from 'react';
import { calculateOverlayPosition } from '../utils/utils';

export default function CtaButton({
  href,
  mainText,
  secondaryText,
  specialClass,
  floating,
  isExternalLink,
}) {
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 1024px)').matches);

    if (!buttonRef.current) return;
    const button = buttonRef.current;
    button.addEventListener('mouseenter', (e) => {
      calculateOverlayPosition(e, button, overlayRef.current);
    });
    button.addEventListener('mouseout', (e) => {
      calculateOverlayPosition(e, button, overlayRef.current);
    });

    if (floating) window.addEventListener('scroll', toggleVisibility);
    return () => {
      button.removeEventListener('mouseenter', calculateOverlayPosition());
      button.removeEventListener('mouseleave', calculateOverlayPosition());
      if (floating) window.removeEventListener('scroll', toggleVisibility);
    };
  }, [floating]);

  const toggleVisibility = () => {
    const hideCtaSections = document.getElementsByClassName('hideCtaSection');

    const callback = (entries) => {
      let isIntersecting = false;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersecting = true;
        }
      });

      setIsVisible(!isIntersecting);
    };

    const observer = new IntersectionObserver(callback);
    for (const section of hideCtaSections) {
      observer.observe(section);
    }
  };

  return (
    <>
      {isExternalLink ? (
        <a
          className={[
            'hoverable',
            styles.button,
            specialClass ? styles[specialClass] : '',
            floating ? styles.floating : '',
            isVisible ? styles.visible : '',
          ].join(' ')}
          href={href}
          target='_blank'
        >
          <div ref={buttonRef} className={styles.innerWrapper}>
            <span ref={overlayRef} className={styles.overlay}></span>
            <div className={styles.textWrapper}>
              <span>{mainText}</span>
              <span>{secondaryText}</span>
            </div>
          </div>
        </a>
      ) : (
        <Link
          className={[
            'hoverable',
            styles.button,
            specialClass ? styles[specialClass] : '',
            floating ? styles.floating : '',
            floating && isMobile ? styles.mobile : '',
            isVisible ? styles.visible : '',
          ].join(' ')}
          href={href}
        >
          {!(floating && isMobile) && (
            <div ref={buttonRef} className={styles.innerWrapper}>
              <span ref={overlayRef} className={styles.overlay}></span>
              <div className={styles.textWrapper}>
                <span>{mainText}</span>
                <span>{secondaryText}</span>
              </div>
            </div>
          )}
        </Link>
      )}
    </>
  );
}
