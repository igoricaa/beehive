import styles from './ProjectsSliderSection.module.scss';
import ProjectsSlider from './ProjectsSlider';
import CtaButton from './CtaButton';

export default function ProjectsSliderSection({ content }) {
  return (
    <section className={styles.section}>
      <div className={styles.copyCtaWrapper}>
        {content.copyTitle && <h2>{content.copyTitle}</h2>}
        {content.copyTextMain && <h3>{content.copyTextMain}</h3>}
        {content.copyTextSub && <h5>{content.copyTextSub}</h5>}

        <CtaButton
          href={content.ctaLink}
          mainText={content.ctaTextMain}
          subText={content.ctaTextSub}
          specialClass='ctaLinkDesktop'
        />
      </div>
      <ProjectsSlider content={content.sliderContent} />
      <CtaButton
        href={content.ctaLink}
        mainText={content.ctaTextMain}
        subText={content.ctaTextSub}
        specialClass='ctaLinkMobile'
      />
    </section>
  );
}
