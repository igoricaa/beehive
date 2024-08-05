'use client';

import { useMemo } from 'react';
import { getImageProps } from 'next/image';
import styles from './ServicesImages.module.scss';

import digitalImageDesktop from '@/public/services/digital-marketing.png';
import socialImageDesktop from '@/public/services/social-media-marketing.png';
import contentImageDesktop from '@/public/services/content.png';
import designImageDesktop from '@/public/services/design.png';
import developmentImageDesktop from '@/public/services/development.png';

import digitalImageMobile from '@/public/services/mobile/social-media-marketing.png';
import socialImageMobile from '@/public/services/mobile/social-media-marketing.png';
import contentImageMobile from '@/public/services/mobile/content.png';
import designImageMobile from '@/public/services/mobile/design.png';
import developmentImageMobile from '@/public/services/mobile/development.png';

import digitalImageTablet from '@/public/services/tablet/social-media-marketing.png';
import socialImageTablet from '@/public/services/tablet/social-media-marketing.png';
import contentImageTablet from '@/public/services/tablet/content.png';
import designImageTablet from '@/public/services/tablet/design.png';
import developmentImageTablet from '@/public/services/tablet/development.png';

const ServicesImages = ({ activeIndex }) => {
  const services = useMemo(
    () => [
      {
        name: 'digital',
        images: {
          desktop: digitalImageDesktop,
          tablet: digitalImageTablet,
          mobile: digitalImageMobile,
        },
      },
      {
        name: 'social',
        images: {
          desktop: socialImageDesktop,
          tablet: socialImageTablet,
          mobile: socialImageMobile,
        },
      },
      {
        name: 'content',
        images: {
          desktop: contentImageDesktop,
          tablet: contentImageTablet,
          mobile: contentImageMobile,
        },
      },
      {
        name: 'design',
        images: {
          desktop: designImageDesktop,
          tablet: designImageTablet,
          mobile: designImageMobile,
        },
      },
      {
        name: 'development',
        images: {
          desktop: developmentImageDesktop,
          tablet: developmentImageTablet,
          mobile: developmentImageMobile,
        },
      },
    ],
    []
  );

  const getOptimizedImageProps = (src, sizes) => {
    const { props } = getImageProps({
      src,
      alt: 'Beehive Services',
      quality: 60,
      sizes,
    });
    return props;
  };

  return (
    <div className={styles.servicesImageWrapper}>
      {services.map((service, index) => {
        const desktopProps = getOptimizedImageProps(
          service.images.desktop,
          '34vw'
        );
        const tabletProps = getOptimizedImageProps(
          service.images.tablet,
          '75vw'
        );
        const mobileProps = getOptimizedImageProps(
          service.images.mobile,
          '75vw'
        );

        const isActive =
          activeIndex === null
            ? service.name === 'digital'
            : index === activeIndex;

        return (
          <picture key={service.name} className={isActive ? styles.active : ''}>
            <source {...mobileProps} media='(max-width: 640px)' />
            <source {...tabletProps} media='(max-width: 1024px)' />
            <source {...desktopProps} media='(min-width: 1025px)' />
            <img
              alt={`Beehive ${service.name} Service`}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              {...mobileProps}
              {...tabletProps}
              {...desktopProps}
            />
          </picture>
        );
      })}
    </div>
  );
};

export default ServicesImages;
