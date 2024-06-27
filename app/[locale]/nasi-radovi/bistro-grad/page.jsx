import Image from 'next/image';
import styles from './page.module.scss';
import imageFloatingRight from '@/public/our-work/bistro-floating-coffee.jpg';
import breakBg from '@/public/our-work/bistro-grad-break-bg.png';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import MuxVideo from '@mux/mux-video-react';

const categories = [
  'Social Media',
  'Advertising',
  'Content Creation',
  'Copywriting',
];
const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/bistro_grad/',
  },
];

const Project = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('projects.bistro-grad');

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
      <div className={styles.headerWrapper}>
        <MuxVideo
          playbackId='DGUPWlW018vONSIgtXvdnD7xkm2pkMyRdYWfA5LQxQL4'
          muted
          loop
          autoPlay
          preload='auto'
          placeholder={undefined}
          disablePictureInPicture
          playsInline
        />
      </div>

      <section className={styles.contentSection}>
        <span>{t('about.highlight.subtitle')}</span>
        <h2>{t('about.highlight.title')}</h2>
        <p>{t('about.text')}</p>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.mediaWrapper}>
          <MuxVideo
            playbackId='00wmZsjOwSElaQ6TRO1BnRBdmSSdT2N5sF9X8IhU4W9o'
            muted
            loop
            autoPlay
            placeholder={undefined}
            disablePictureInPicture
            playsInline
          />
        </div>
        <div className={styles.mediaWrapper}>
          <Image src={imageFloatingRight} alt={t('title')} />
        </div>
      </section>

      <section className={styles.contentSection}>
        <span>{t('challenge.highlight.subtitle')}</span>
        <h2>{t('challenge.highlight.title.partone')}</h2>
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
          dangerouslySetInnerHTML={{ __html: t.raw('solution.description') }}
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
            <li>{t('info.scope.six')}</li>
            <li>{t('info.scope.seven')}</li>
          </ul>
        </div>
        <div className={styles.statsWrapper}>
          <h3>{t('info.stats.title')}</h3>
          <ul>
            <li>{t('info.stats.start.title')}</li>
          </ul>
          <span>9.4k {t('info.stats.followers')}</span>
          <ul>
            <li>{t('info.stats.currentDate')}</li>
          </ul>
          <span>11.9K {t('info.stats.followers')}</span>
          <ul>
            <li>{t('info.stats.budget')}</li>
          </ul>
          <span>
            400e <span>(total)</span>
          </span>
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
