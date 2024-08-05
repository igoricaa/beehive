'use client';

import styles from './Accordions.module.scss';
import { useState } from 'react';

export default function Accordions({ messages, handleChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
    handleChange(index);
  };

  return (
    <section className={styles.accordions}>
      {messages.map((message, index) => {
        const isActive = activeIndex === index ? true : false;

        return (
          <article
            key={index}
            className={[
              'hoverable',
              styles.article,
              isActive ? styles.active : '',
            ].join(' ')}
            onClick={() => handleClick(index)}
          >
            <div className={styles.accordion}>
              <div className={styles.accordionTop}>
                <h3>{message.title}</h3>
                <button
                  className={styles.accordionButton}
                  onClick={() => handleClick(index)}
                  aria-label='Accordion Button'
                >
                  <span className={styles.horizontalLine}></span>
                  <span className={styles.verticalLine}></span>
                </button>
              </div>

              <div className={styles.accordionBottom}>
                <p>{message.description}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
