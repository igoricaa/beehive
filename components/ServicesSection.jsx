'use client';

import styles from './ServicesSection.module.scss';
import Image from 'next/image';
import Accordions from './Accordions';
import { useState } from 'react';

const ServicesSection = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  return (
    <section className={styles.servicesSection}>
      {/* <DistortionImage activeServiceIndex={activeServiceIndex} /> */}
      <div className={styles.imageWrapper}>
        <Image
          src={'/beehive-services-home.png'}
          fill
          sizes='(max-width: 991px) 100vw, 40vw'
          alt='Beehive Services'
        />
      </div>
      <div className={styles.servicesInfoWrapper}>
        <h2>naše usluge:</h2>
        <Accordions
          activeServiceIndex={activeServiceIndex}
          setActiveServiceIndex={setActiveServiceIndex}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
