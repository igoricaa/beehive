'use client';

import styles from './ServicesSection.module.scss';
import Accordions from './Accordions/Accordions';
import ServicesImages from './ServicesImages';
import { useState } from 'react';

const ServicesSection = ({ messages }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.servicesSection}>
      <ServicesImages activeIndex={activeIndex} />
      <div className={styles.servicesInfoWrapper}>
        <h2>{messages.title}</h2>
        <Accordions
          messages={messages.services}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
