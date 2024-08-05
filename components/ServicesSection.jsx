'use client';

import styles from './ServicesSection.module.scss';
import Accordions from './Accordions/Accordions';
import ServiceImage from './ServiceImage';
import { useState } from 'react';

const services = ['digital', 'social', 'content', 'design', 'development'];

const ServicesSection = ({ messages }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.servicesSection}>
      <ServiceImage service={services[activeIndex]} />

      <div className={styles.servicesInfoWrapper}>
        <h2>{messages.title}</h2>
        <Accordions messages={messages.services} handleChange={handleChange} />
      </div>
    </section>
  );
};

export default ServicesSection;
