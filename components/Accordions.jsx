'use client';

import styles from './Accordions.module.scss';
import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Accordions({ messages }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) =>
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);

  return (
    <section className={styles.accordions}>
      {messages.map((message, index) => {
        const isActive = activeIndex === index ? true : false;

        return (
          <AccordionItem
            messages={message}
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
