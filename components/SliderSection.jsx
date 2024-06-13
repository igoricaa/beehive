import styles from './SliderSection.module.scss';
import Slider from './Slider';
import CtaButton from './CtaButton';

export default function SliderSection({ content, messages }) {
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
      <Slider content={content} messages={messages.hover} />
      <CtaButton
        href="/kontakt"
        mainText={messages.cta.textMain}
        secondaryText={messages.cta.textSecondary}
        specialClass='ctaLinkMobile'
      />
    </section>
  );
}
