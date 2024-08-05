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

import socialImageTablet from '@/public/services/tablet/social-media-marketing.png';
import digitalImageTablet from '@/public/services/tablet/social-media-marketing.png';
import contentImageTablet from '@/public/services/tablet/content.png';
import designImageTablet from '@/public/services/tablet/design.png';
import developmentImageTablet from '@/public/services/tablet/development.png';

import { getImageProps } from 'next/image';

const ServiceImage = ({ service }) => {
  const desktopImage =
    service === 'digital'
      ? digitalImageDesktop
      : service === 'social'
      ? socialImageDesktop
      : service === 'content'
      ? contentImageDesktop
      : service === 'design'
      ? designImageDesktop
      : developmentImageDesktop;

  const mobileImage =
    service === 'digital'
      ? digitalImageMobile
      : service === 'social'
      ? socialImageMobile
      : service === 'content'
      ? contentImageMobile
      : service === 'design'
      ? designImageMobile
      : developmentImageMobile;

  const tabletImage =
    service === 'digital'
      ? digitalImageTablet
      : service === 'social'
      ? socialImageTablet
      : service === 'content'
      ? contentImageTablet
      : service === 'design'
      ? designImageTablet
      : developmentImageTablet;

  const common = {
    alt: 'Beehive Services',
    fill: true,
    quality: 60,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    sizes: '34vw',
    src: desktopImage,
  });
  const {
    props: { srcSet: tablet, ...rest },
  } = getImageProps({
    ...common,
    sizes: '75vw',
    src: tabletImage,
  });
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    ...common,
    sizes: '75vw',
    src: mobileImage,
  });

  return (
    <picture>
      <source srcSet={mobile} media='(max-width: 640px)' />
      <source srcSet={tablet} media='(max-width: 1024px)' />
      <source srcSet={desktop} media='(min-width: 1024px)' />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        {...rest}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    </picture>
  );
};

export default ServiceImage;
