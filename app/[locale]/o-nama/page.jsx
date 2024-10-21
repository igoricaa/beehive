import Image from 'next/image';
import styles from './page.module.scss';
import headerBg from '@/public/about-us-header-bg.png';
import { coreValues } from '@/data';
import RoughNotationWrapper from '@/components/RoughNotationWrapper';
import aboutUsBgImage from '@/public/about-us-bg.png';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default function AboutUs({ params: { locale } }) {
  setRequestLocale(locale);
  const t = useTranslations('aboutUs');

  return (
    <main className={styles.main}>
      <h1>
        <RoughNotationWrapper
          type='circle'
          color='#FF6B00'
          iterations={3}
          strokeWidth={3}
          playOnce
        >
          {t('title.partone')}
        </RoughNotationWrapper>{' '}
        {t('title.parttwo')}{' '}
        <span style={{ whiteSpace: 'nowrap' }}>
          {t('title.partthree')}
          <span className={'exclamationMark'}>.</span>
        </span>
      </h1>

      <div className={styles.headerImgWrapper}>
        <Image src={headerBg} alt='Beehive - Belgrade Sunset' priority />
      </div>
      <section className={styles.aboutUsSection}>
        <h2>{t('aboutBeehive.title')}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: t.raw('aboutBeehive.description'),
          }}
        ></p>
      </section>

      <section className={styles.coreValuesSection}>
        {coreValues.map((coreValue, index) => {
          return (
            <div key={coreValue.title} className={styles.coreValue}>
              <Image
                src={coreValue.icon}
                alt='Beehive Core Value'
                width={
                  index === 0 ? 108 : index === 1 ? 49 : index === 2 ? 100 : 97
                }
                height={
                  index === 0 ? 130 : index === 1 ? 85 : index === 2 ? 110 : 101
                }
                style={{
                  maxHeight:
                    index === 0
                      ? 130
                      : index === 1
                      ? 85
                      : index === 2
                      ? 110
                      : 101,

                  maxWidth:
                    index === 0
                      ? 108
                      : index === 1
                      ? 49
                      : index === 2
                      ? 100
                      : 97,
                }}
              />
              <h3>{t(`values.${coreValue.title.toLowerCase()}.title`)}</h3>
              <p>{t(`values.${coreValue.title.toLowerCase()}.description`)}</p>
            </div>
          );
        })}
      </section>

      <section className={styles.breakSection}>
        <h1>buzzing with ideas!</h1>
        <h1>buzzing with ideas!</h1>
        <div className={styles.imgWrapper}>
          <Image id='bgImage' src={aboutUsBgImage} alt='Beehive - About Us' />
        </div>
      </section>

      <section className={styles.aboutBeesSection}>
        <h2>{t('aboutBees.title')}</h2>
        <div>
          <p>{t('aboutBees.subtitle')}</p>
          <ul>
            <li>{t('aboutBees.description.one')}</li>
            <li>
              {' '}
              {t('aboutBees.description.two.partone')}{' '}
              <RoughNotationWrapper
                type='circle'
                strokeWidth={3}
                animationDelay='500'
                playOnce
                color='#ff6b00'
              >
                {t('aboutBees.description.two.parttwo')}
              </RoughNotationWrapper>
              {t('aboutBees.description.two.partthree')}
            </li>
            <li>{t('aboutBees.description.three')}</li>
            <li>{t('aboutBees.description.four')}</li>
            <li>{t('aboutBees.description.five')}</li>
            <li>{t('aboutBees.description.six')}</li>
            <li>{t('aboutBees.description.seven')}</li>
            <li>{t('aboutBees.description.eight')}</li>
            <li>
              {t('aboutBees.description.nine.partone')}{' '}
              <RoughNotationWrapper
                type='underline'
                strokeWidth={3}
                iterations={3}
                animationDelay='750'
                playOnce
                color='#ff6b00'
              >
                {t('aboutBees.description.nine.parttwo')}
              </RoughNotationWrapper>
            </li>
          </ul>
        </div>

        <h3>
          {t('aboutBees.ending.partone')}{' '}
          <RoughNotationWrapper
            type='highlight'
            animationDelay='1000'
            playOnce
            color='#FFD600'
          >
            <span>{t('aboutBees.ending.parttwo')}</span>
          </RoughNotationWrapper>
        </h3>
      </section>
    </main>
  );
}
