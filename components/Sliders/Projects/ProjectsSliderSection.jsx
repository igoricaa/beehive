import styles from './ProjectsSliderSection.module.scss';
import ProjectsSlider from './ProjectsSlider';
import CtaButton from '../../CtaButton';
import { projects } from '@/data';

export default function ProjectsSliderSection({ messages }) {
  return (
    <section className={styles.section}>
      <div className={styles.copyCtaWrapper}>
        <h3>
          {messages.title} <span></span>
        </h3>

        <CtaButton
          href='/kontakt'
          mainText={messages.cta.textMain}
          secondaryText={messages.cta.textSecondary}
          specialClass='ctaLinkDesktop'
        />
      </div>
      <ProjectsSlider projects={projects} messages={messages.project} />
      <CtaButton
        href='/kontakt'
        mainText={messages.cta.textMain}
        secondaryText={messages.cta.textSecondary}
        specialClass='ctaLinkMobile'
      />
    </section>
  );
}
