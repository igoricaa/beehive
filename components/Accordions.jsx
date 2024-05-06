'use client';

import styles from './Accordions.module.scss';
import { useState } from 'react';
import AccordionItem from './AccordionItem';
import { services } from '@/data';

export default function Accordions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) =>
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);

  return (
    <section className={styles.accordions}>
      {services.map((service, index) => {
        const isActive = activeIndex === index ? true : false;

        return (
          <AccordionItem
            service={service}
            index={index}
            isActive={isActive}
            handleToggle={handleToggle}
            key={index}
          />
        );
      })}
    </section>
  );
}
