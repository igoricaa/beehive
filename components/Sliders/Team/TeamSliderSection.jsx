import styles from './TeamSliderSection.module.scss';
import TeamSlider from './TeamSlider';
import CtaButton from '../../CtaButton';

export default function TeamSliderSection({ content, messages }) {
  return (
    <section className={styles.section}>
      <div className={styles.copyCtaWrapper}>
        <h2>{messages.title}</h2>
        <h4>{messages.description}</h4>

        <CtaButton
          href="/kontakt"
          mainText={messages.cta.textMain}
          secondaryText={messages.cta.textSecondary}
          specialClass='ctaLinkDesktop'
        />
      </div>
      <TeamSlider content={content} messages={messages.hover} />
      <CtaButton
        href="/kontakt"
        mainText={messages.cta.textMain}
        secondaryText={messages.cta.textSecondary}
        specialClass='ctaLinkMobile'
      />
    </section>
  );
}
