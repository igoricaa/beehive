'use client';

import styles from './DistortionImage.module.scss';
import hoverEffect from 'hover-effect';
import { useEffect, useRef } from 'react';
import homeHero1 from '@/public/home-hero-1.webp';
import homeHero2 from '@/public/home-hero-2.webp';
import homeHeroMobile1 from '@/public/home-hero-mobile-1.webp';
import homeHeroMobile2 from '@/public/home-hero-mobile-2.webp';
import homeHeroTablet1 from '@/public/home-hero-tablet-1.webp';
import homeHeroTablet2 from '@/public/home-hero-tablet-2.webp';
import distortionImage from '@/public/distortions/ramen.webp';

const DistortionImage = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const isMobile = window.matchMedia('(max-width: 480px)').matches;
    const isTablet = window.matchMedia(
      '(min-width:480px) and (max-width:768px)'
    ).matches;

    const image1 = isMobile
      ? homeHeroMobile1
      : isTablet
      ? homeHeroTablet1
      : homeHero1;
    const image2 = isMobile
      ? homeHeroMobile2
      : isTablet
      ? homeHeroTablet2
      : homeHero2;
    const imagesRatio = isMobile ? 1 : 894 / 2560;

    const animate = new hoverEffect({
      parent: wrapperRef.current,
      intensity: 0.3,
      imagesRatio: imagesRatio,
      image1: image1.src,
      image2: image2.src,
      displacementImage: distortionImage.src,
    });
  }, []);

  return <div className={styles.distortionImageWrapper} ref={wrapperRef}></div>;
};

export default DistortionImage;
