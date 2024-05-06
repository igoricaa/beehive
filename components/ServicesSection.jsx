import styles from './ServicesSection.module.scss';
import Image from 'next/image';
import Accordions from './Accordions';

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <picture>
        <source
          srcSet='/beehive-services-mobile.png'
          media='(max-width: 1024px)'
        />
        <Image
          src={'/beehive-services.png'}
          fill
          sizes='(max-width: 1024px) 100vw, 40vw'
          alt='Beehive Services'
        />
      </picture>
      <div className={styles.servicesInfoWrapper}>
        <h2>naše usluge:</h2>
        <Accordions />
      </div>
    </section>
  );
};

export default ServicesSection;
