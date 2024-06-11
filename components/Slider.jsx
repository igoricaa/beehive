'use client';

import styles from './Slider.module.scss';
import SliderItem from './SliderItem';
import useEmblaCarousel from 'embla-carousel-react';

const OPTIONS = {
  containScroll: false,
  loop: true,
  align: 'start',
};

export default function Slider({ content, messages }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  return (
    <section className={[styles.slider, styles.embla].join(' ')} data-axis='x'>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {content.map((slideContent, index) => (
            <SliderItem
              key={index}
              content={slideContent}
              messages={messages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
