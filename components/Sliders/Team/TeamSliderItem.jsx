'use client';

import Image from 'next/image';
import styles from './TeamSliderItem.module.scss';
import { useEffect, useRef } from 'react';
import { calculateOverlayPosition } from '../../../utils/utils';

export default function TeamSliderItem({ content, messages, imageAlignment }) {
  const slideRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <article className={[styles.emblaSlide, 'card', 'hoverableDrag'].join(' ')}>
      <div ref={slideRef} className={styles.innerWrapper}>
        <span
          ref={overlayRef}
          className={styles.overlay}
          style={{ backgroundColor: content.hoverColor }}
        ></span>
        {content.listImage && (
          <div className={styles.imgWrapper}>
            <Image
              src={content.listImage}
              alt={content.title}
              fill
              sizes='(max-width: 1024px) 50vw, 22.5vw'
              style={{ objectFit: 'cover', objectPosition: imageAlignment }}
            />
          </div>
        )}
        <div className={styles.hoverTextWrapper}>
          <span>{messages.title}</span>
          <p>{messages.text}</p>
        </div>
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
          <h4>{content.title}</h4>
        </div>
      </div>
    </article>
  );
}
