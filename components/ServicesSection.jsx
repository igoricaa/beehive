import styles from './ServicesSection.module.scss';
import Accordions from './Accordions/Accordions';
import servicesImageDesktop from '@/public/services/beehive-services-digital-marketing.png';
import servicesImageMobile from '@/public/services/mobile/beehive-services-social-media-marketing-mobile.png';
import servicesImageTablet from '@/public/services/tablet/beehive-services-social-media-marketing-tablet.png';
import { getImageProps } from 'next/image';

const ServicesSection = ({ messages }) => {
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
    src: servicesImageDesktop,
  });
  const {
    props: { srcSet: tablet, ...rest },
  } = getImageProps({
    ...common,
    sizes: '75vw',
    src: servicesImageTablet,
  });
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    ...common,
    sizes: '75vw',
    src: servicesImageMobile,
  });

  return (
    <section className={styles.servicesSection}>
      <picture>
        <source srcSet={mobile} media='(max-width: 640px)' />
        <source srcSet={tablet} media='(max-width: 1024px)' />
        <source srcSet={desktop} media='(min-width: 1024px)' />
        <img
          {...rest}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </picture>
      <div className={styles.servicesInfoWrapper}>
        <h2>{messages.title}</h2>
        <Accordions messages={messages.services} />
      </div>
    </section>
  );
};

export default ServicesSection;
