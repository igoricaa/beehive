'use client';

import styles from './DistortionImage.module.scss';
import hoverEffect from 'hover-effect';
import { useEffect, useRef } from 'react';

const DistortionImage = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const image1 = isMobile ? '/home-hero-mobile-1.webp' : '/home-hero-1.webp';
    const image2 = isMobile ? '/home-hero-mobile-2.webp' : '/home-hero-2.webp';
    const imagesRatio = isMobile ? 1 : 894 / 2560;

    const animate = new hoverEffect({
      parent: wrapperRef.current,
      intensity: 0.3,
      imagesRatio: imagesRatio,
      image1: image1,
      image2: image2,
      displacementImage: '/distortions/ramen.webp',
    });
  }, []);

  return <div className={styles.distortionImageWrapper} ref={wrapperRef}></div>;
};

export default DistortionImage;
