'use client';

import styles from './ServicesSection.module.scss';
import Image from 'next/image';
import Accordions from './Accordions';
import { useEffect, useState } from 'react';

const ServicesSection = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);

  useEffect(() => {
    if (!activeServiceIndex) setActiveServiceIndex(0);
  }, [])

  return (
    <section className={styles.servicesSection}>
      <div className={styles.imageWrapper}>
        <Image
          src={'/beehive-services-home.png'}
          fill
          sizes='(max-width: 1024px) 100vw, 40vw'
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
