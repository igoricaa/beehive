'use client';

import Image from 'next/image';
import styles from './SliderItem.module.scss';
import { useEffect, useRef } from 'react';

export default function SliderItem({ content }) {
  const slideRef = useRef(null);
  const overlayRef = useRef(null);

  const calculacteOverlayPosition = (event) => {
    if (!event) return;
    const slide = slideRef.current;
    const x = event.pageX - slide.getBoundingClientRect().left;
    const y = event.pageY - slide.getBoundingClientRect().top - window.scrollY;

    overlayRef.current.style.top = `${y}px`;
    overlayRef.current.style.left = `${x}px`;
  };

  useEffect(() => {
    if (content.hoverText) {
      const slide = slideRef.current;
      slide.addEventListener('mouseenter', (e) => {
        calculacteOverlayPosition(e);
      });
      slide.addEventListener('mouseout', (e) => {
        calculacteOverlayPosition(e);
      });
      return () => {
        slide.removeEventListener('mouseenter', calculacteOverlayPosition());
        slide.removeEventListener('mouseleave', calculacteOverlayPosition());
      };
    }
  }, [content.hoverText]);

  return (
    <article className={[styles.emblaSlide, 'card'].join(' ')}>
      <div ref={slideRef} className={styles.innerWrapper}>
        {content.hoverText && (
          <span
            ref={overlayRef}
            className={styles.overlay}
            style={{ backgroundColor: content.hoverColor }}
          ></span>
        )}
        <div className={styles.imgWrapper}>
          <Image
            src={content.listImage}
            alt={content.title}
            fill
            sizes='(max-width: 991px) 50vw, 22.5vw'
          />
        </div>
        {content.hoverText && (
          <div className={styles.hoverTextWrapper}>
            <span>{content.hoverTextTitle}</span>
            <p>{content.hoverText}</p>
          </div>
        )}
      </div>
      <div className={styles.infoWrapper}>
        {content.categories && (
          <div className={styles.categoriesWrapper}>
            {content.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        )}
        <div className={styles.titleWrapper}>
          <span>{content.subtitle}</span>
          <h5>{content.title}</h5>
        </div>
      </div>
    </article>
  );
}
