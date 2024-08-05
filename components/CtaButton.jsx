'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from '@/components/Link';
import ArrowRight from './icons/ArrowRight';
import styles from './CtaButton.module.scss';
import { calculateOverlayPosition } from '../utils/utils';

const CtaButton = ({
  href,
  mainText,
  secondaryText,
  specialClass,
  floating,
  isExternalLink,
}) => {
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseEvent = useCallback((e) => {
    calculateOverlayPosition(e, buttonRef.current, overlayRef.current);
  }, []);

  const toggleVisibility = useCallback(() => {
    const hideCtaSections = document.getElementsByClassName('hideCtaSection');
    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries.some((entry) => entry.isIntersecting);
      setIsVisible(!isIntersecting);
    });

    Array.from(hideCtaSections).forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 1024px)').matches);

    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', handleMouseEvent);
      buttonRef.current.addEventListener('mouseout', handleMouseEvent);
    }

    if (floating) {
      window.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('mouseenter', handleMouseEvent);
        buttonRef.current.removeEventListener('mouseout', handleMouseEvent);
      }
      if (floating) {
        window.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, [floating, handleMouseEvent, toggleVisibility]);

  const buttonClasses = [
    'hoverable',
    styles.button,
    specialClass && styles[specialClass],
    floating && styles.floating,
    floating && isMobile && styles.mobile,
    isVisible && styles.visible,
  ]
    .filter(Boolean)
    .join(' ');

  const ButtonContent = () => (
    <>
      <div ref={buttonRef} className={styles.innerWrapper}>
        <span ref={overlayRef} className={styles.overlay}></span>
        <div className={styles.textWrapper}>
          <span>{mainText}</span>
          <span>{secondaryText}</span>
        </div>
      </div>
      <span className={styles.iconWrapper}>
        <ArrowRight />
      </span>
    </>
  );

  if (isExternalLink) {
    return (
      <a
        className={buttonClasses}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <Link className={buttonClasses} href={href}>
      {!(floating && isMobile) && <ButtonContent />}
    </Link>
  );
};

export default CtaButton;
