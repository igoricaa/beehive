import styles from './ServicesSection.module.scss';
import Image from 'next/image';
import Accordions from './Accordions';
import servicesImage from '@/public/beehive-services.png';
import servicesImageMobile from '@/public/beehive-services-mobile.webp';

const ServicesSection = ({messages}) => {
  return (
    <section className={styles.servicesSection}>
      <picture>
        <source
          srcSet={servicesImageMobile.src}
          media='(max-width: 1024px)'
        />
        <Image src={servicesImage} alt='Beehive Services' />
      </picture>
      <div className={styles.servicesInfoWrapper}>
        <h2>{messages.title}</h2>
        <Accordions />
      </div>
    </section>
  );
};

export default ServicesSection;
