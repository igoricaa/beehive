'use client';

import hoverEffect from 'hover-effect';
import { useEffect, useRef } from 'react';

const DistortionImage = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const animate = new hoverEffect({
      parent: wrapperRef.current,
      intensity: 0.3,
      imagesRatio: 894 / 2560,
      image1: '/home-hero-2.webp',
      image2: '/home-hero-1.webp',
      displacementImage: '/distortions/ramen.webp',
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        aspectRatio: 2560 / 894,
      }}
    ></div>
  );
};

export default DistortionImage;
