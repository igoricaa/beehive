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
  const [isAtBorder, setIsAtBorder] = useState(false);

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

    if (floating) window.addEventListener('scroll', hideAtBorder);
    return () => {
      button.removeEventListener('mouseenter', calculacteOverlayPosition());
      button.removeEventListener('mouseleave', calculacteOverlayPosition());
      if (floating) window.removeEventListener('scroll', hideAtBorder);
    };
  }, [floating]);

  const hideAtBorder = () => {
    const floatingBorderElement = document.getElementById(
      'floatingBorderElement'
    );

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAtBorder(true);
        } else {
          setIsAtBorder(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(floatingBorderElement);
  };

  return (
    <Link
      className={[
        styles.button,
        specialClass ? styles[specialClass] : '',
        floating ? styles.floating : '',
        isAtBorder ? styles.atBorder : '',
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
