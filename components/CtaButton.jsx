'use client';

import { Link } from 'next-view-transitions';
import styles from './CtaButton.module.scss';
import { useEffect, useRef, useState } from 'react';

export default function CtaButton({
  href,
  mainText,
  subText,
  specialClass,
  floating,
}) {
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (floating) window.addEventListener('scroll', toggleVisibility);
    return () => {
      button.removeEventListener('mouseenter', calculacteOverlayPosition());
      button.removeEventListener('mouseleave', calculacteOverlayPosition());
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
    <Link
      className={[
        styles.button,
        specialClass ? styles[specialClass] : '',
        floating ? styles.floating : '',
        isVisible ? styles.visible : '',
      ].join(' ')}
      href={href}
    >
      <div ref={buttonRef} className={styles.innerWrapper}>
        <span ref={overlayRef} className={styles.overlay}></span>
        <div className={styles.textWrapper}>
          <span>{mainText}</span>
          <span>{subText}</span>
        </div>
      </div>
    </Link>
  );
}
