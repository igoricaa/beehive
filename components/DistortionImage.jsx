'use client';

import hoverEffect from 'hover-effect';
import { useEffect, useRef } from 'react';
import homeHero1 from '@/public/home-hero-1.png';
import homeHero2 from '@/public/home-hero-2.png';
import distortionImage from '@/public/distortions/fluid.jpeg';

const DistortionImage = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const animate = new hoverEffect({
      parent: wrapperRef.current,
      intensity: 0.3,
      aspectRatio: 575 / 1647,
      image1: '/home-hero-1.png',
      image2: '/home-hero-2.png',
      displacementImage: '/distortions/fluid.jpeg',
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ width: '100%', height: "100%", objectFit: "cover", overflow: 'hidden' }}
    ></div>
  );
};

export default DistortionImage;
