import CalButton from '@/components/CalButton';
import styles from './page.module.scss';
import ContactForm from '@/components/ContactForm';
import EyeAnimation from '@/components/EyeAnimation';
import RoughNotationWrapper from '@/components/RoughNotationWrapper';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const Contact = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('contact');

  const calButtonMessages = {
    textMain: t('cal.button.textMain'),
    textSecondary: t('cal.button.textSecondary'),
  };

  const contactFormMessages = {
    namePlaceholder: t('contactForm.placeholders.name'),
    emailPlaceholder: t('contactForm.placeholders.email'),
    messagePlaceholder: t('contactForm.placeholders.message'),
    nameReqError: t('contactForm.errors.nameRequired'),
    emailReqError: t('contactForm.errors.emailRequired'),
    emailPatternError: t('contactForm.errors.emailInvalid'),
    messageReqError: t('contactForm.errors.messageRequired'),
    button: {
      textMain: t('contactForm.button.textMain'),
      textSecondary: t('contactForm.button.textSecondary'),
    }
  };

  return (
    <main className={styles.main}>
      <EyeAnimation
        style={{
          height: '30vw',
          width: '30vw',
          position: 'absolute',
          bottom: '25%',
          right: '5vw',
        }}
        mobileStyle={{
          bottom: '7%',
          right: '0vw',
        }}
        animationSrc='https://lottie.host/e70b0c8e-eeb6-49a3-9200-4f328769e2c5/nc6aORCcQw.json'
      />
      <h1>
        <RoughNotationWrapper
          type='circle'
          color='#FF6B00'
          iterations={3}
          strokeWidth={3}
        >
          {t('title.partone')}
        </RoughNotationWrapper>{' '}
        {t('title.parttwo')}{' '}
        <span style={{ whiteSpace: 'nowrap' }}>
          {t('title.partthree')} <span className={'exclamationMark'}>.</span>
        </span>
      </h1>
      <section className={styles.contactSection}>
        <h2 dangerouslySetInnerHTML={{ __html: t.raw('subtitle') }}></h2>
        <ContactForm messages={contactFormMessages} />

        <div className={styles.calWrapper}>
          <h2>
            {t('cal.subtitle.partone')}{' '}
            <RoughNotationWrapper
              type='circle'
              color='#FF6B00'
              iterations={3}
              strokeWidth={3}
            >
              {t('cal.subtitle.parttwo')}
            </RoughNotationWrapper>{' '}
            {t('cal.subtitle.partthree')}
            <br />
            {t('cal.subtitle.partfour')}
          </h2>
          <CalButton messages={calButtonMessages} />
        </div>
      </section>
    </main>
  );
};

export default Contact;
