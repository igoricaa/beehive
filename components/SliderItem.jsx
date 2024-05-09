'use client';

import Image from 'next/image';
import styles from './SliderItem.module.scss';
import { useEffect, useRef } from 'react';
import { calculateOverlayPosition } from '../utils/utils';

export default function SliderItem({ content }) {
  const slideRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (content.hoverText) {
      const slide = slideRef.current;
      slide.addEventListener('mouseenter', (e) => {
        calculateOverlayPosition(e, slide, overlayRef.current);
      });
      slide.addEventListener('mouseout', (e) => {
        calculateOverlayPosition(e, slide, overlayRef.current);
      });
      return () => {
        slide.removeEventListener('mouseenter', calculateOverlayPosition());
        slide.removeEventListener('mouseleave', calculateOverlayPosition());
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
            sizes='(max-width: 1024px) 50vw, 22.5vw'
            style={{ objectFit: 'cover' }}
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
