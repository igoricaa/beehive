'use client';

import styles from './TeamSlider.module.scss';
import TeamSliderItem from './TeamSliderItem';
import useEmblaCarousel from 'embla-carousel-react';

const OPTIONS = {
  containScroll: false,
  loop: true,
  align: 'start',
};

export default function TeamSlider({ content, messages }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  return (
    <section className={[styles.slider, styles.embla].join(' ')} data-axis='x'>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {content.map((slideContent, index) => (
            <TeamSliderItem
              key={index}
              content={slideContent}
              imageAlignment={
                index === 0
                  ? '100% 30%'
                  : [4, 7].includes(index)
                  ? 'top'
                  : 'center'
              }
              messages={messages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
