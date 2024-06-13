import Image from 'next/image';
import styles from './page.module.scss';
import zlazlaHeader from '@/public/our-work/zla-zla-header.png';
import MuxVideo from '@mux/mux-video-react';
import imageFloatingRight from '@/public/our-work/zla-zla-case-study-2.jpg';
import breakBg from '@/public/our-work/zla-zla-break-bg.png';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const categories = ['Brand', 'Social Media Strategy'];
const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/zlazla/',
  },
];

const Project = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('projects.zlazla');

  return (
    <main className={styles.main}>
      <div className={styles.headerTop}>
        <h2>{t('title')}</h2>
        <div className={styles.categoriesWrapper}>
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={zlazlaHeader} alt={t('title')} priority />
      </div>

      <section className={styles.contentSection}>
        <span>{t('about.highlight.subtitle')}</span>
        <h2>{t('about.highlight.title')}</h2>
        <p>{t('about.text')}</p>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.mediaWrapper}>
          <MuxVideo
            playbackId='qLFmnuk5hRd28S6YPIC4Z5g16ipHhm16DQ02QIREjyxw'
            muted
            loop
            autoPlay
            placeholder={undefined}
          />
        </div>
        <div className={styles.mediaWrapper}>
          <Image src={imageFloatingRight} alt={t('title')} />
        </div>
      </section>

      <section
        className={[styles.contentSection, styles.challengesSection].join(' ')}
      >
        <span>{t('challenge.highlight.subtitle')}</span>
        <h2>{t('challenge.highlight.first.title')}</h2>
        <p>{t('challenge.highlight.first.description')}</p>
        <h2>{t('challenge.highlight.second.title')}</h2>
        <p>{t('challenge.highlight.second.description')}</p>
        <p
          dangerouslySetInnerHTML={{ __html: t.raw('challenge.description') }}
        ></p>
      </section>

      <section className={styles.breakSection}>
        <Image
          src={breakBg}
          alt={`Beehive ${t('title')} Project`}
          quality={90}
        />
      </section>

      <section className={styles.contentSection}>
        <span>{t('solution.title.subtitle')}</span>
        <h3 style={{ marginTop: 0 }}>{t('solution.title.main')}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: t.raw('solution.description.partone'),
          }}
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t.raw('solution.description.parttwo'),
          }}
        ></p>
      </section>

      <section className={styles.contentSection}>
        <h3>{t('ending.title')}</h3>
        <p
          dangerouslySetInnerHTML={{ __html: t.raw('ending.description') }}
        ></p>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.scopeWrapper}>
          <h3>{t('info.scope.title')}</h3>
          <ul>
            <li>{t('info.scope.one')}</li>
            <li>{t('info.scope.two')}</li>
            <li>{t('info.scope.three')}</li>
            <li>{t('info.scope.four')}</li>
            <li>{t('info.scope.five')}</li>
          </ul>
        </div>
        <div className={styles.statsWrapper}>
          <h3>{t('info.stats.title')}</h3>
          <ul>
            <li>{t('info.stats.cooperation.title')}</li>
          </ul>
          <ul>
            <li>6k {t('info.stats.followers.instagram')}</li>
          </ul>
          <ul>
            <li>15k {t('info.stats.followers.tiktok')}</li>
          </ul>
        </div>
      </section>

      <section className={styles.socialsSection}>
        <h3>{t('socials.title')}</h3>
        <div className={styles.socials}>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className={[styles.social, 'hoverable'].join(' ')}
              target='_blank'
            >
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
