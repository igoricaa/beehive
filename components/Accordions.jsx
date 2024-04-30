'use client';

import styles from './Accordions.module.scss';
import AccordionItem from './AccordionItem';
import { services } from '@/data';

export default function Accordions({ activeServiceIndex, setActiveServiceIndex }) {
  const handleToggle = (index) =>
    activeServiceIndex === index ? setActiveServiceIndex(null) : setActiveServiceIndex(index);

  return (
    <section className={styles.accordions}>
      {services.map((service, index) => {
        const isActive = activeServiceIndex === index ? true : false;

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
