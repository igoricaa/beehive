'use client';

import styles from './ProjectsSlider.module.scss';
import ProjectsSliderItem from './ProjectsSliderItem';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const OPTIONS = {
  containScroll: false,
  loop: true,
  align: 'start',
};

export default function ProjectsSlider({ projects, messages }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 2000 }),
  ]);

  return (
    <section className={[styles.slider, styles.embla].join(' ')} data-axis='x'>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {projects.map((project, index) => (
            <ProjectsSliderItem key={index} project={project} messages={messages} />
          ))}
        </div>
      </div>
    </section>
  );
}
