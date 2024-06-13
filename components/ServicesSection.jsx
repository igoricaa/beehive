import styles from './ServicesSection.module.scss';
import Image from 'next/image';
import Accordions from './Accordions';
import servicesImage from '@/public/beehive-services.png';
import servicesImageMobile from '@/public/beehive-services-mobile.webp';
import servicesImageTablet from '@/public/beehive-services-tablet.webp';

const ServicesSection = ({ messages }) => {
  return (
    <section className={styles.servicesSection}>
      <picture>
        <source srcSet={servicesImageMobile.src} media='(max-width: 640px)' />
        <source srcSet={servicesImageTablet.src} media='(max-width: 1024px)' />
        <Image src={servicesImage} alt='Beehive Services' />
      </picture>
      <div className={styles.servicesInfoWrapper}>
        <h2>{messages.title}</h2>
        <Accordions messages={messages.services} />
      </div>
    </section>
  );
};

export default ServicesSection;
