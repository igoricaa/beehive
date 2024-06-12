import Image from 'next/image';
import styles from './page.module.scss';
import pranaHeader from '@/public/prana-header.png';
import imageFloatingLeft from '@/public/our-work/prana-case-study-1.png';
import imageFloatingRight from '@/public/our-work/prana-case-study-2.png';
import breakBg from '@/public/our-work/prana-break-bg.png';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const categories = [
  'Social Media',
  'Advertising',
  'Content Creation',
  'Copywriting',
];
const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/pranabigtree/',
  },
];

const Project = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('projects.prana');

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
        <Image src={pranaHeader} alt={t('title')} priority />
      </div>

      <section className={styles.contentSection}>
        <span>{t('about.highlight.subtitle')}</span>
        <h2>{t('about.highlight.title.partone')}</h2>
        <p>{t('about.partone')}</p>
        <p>{t('about.parttwo')}</p>
        <p>{t('about.partthree')}</p>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.imgWrapper}>
          <Image src={imageFloatingLeft} alt={t('title')} />
        </div>
        <div className={styles.imgWrapper}>
          <Image src={imageFloatingRight} alt={t('title')} />
        </div>
      </section>

      <section className={styles.contentSection}>
        <span>{t('challenge.highlight.subtitle')}</span>
        <h2>
          {t('challenge.highlight.title.partone')}
          <br />
          <br />
          {t('challenge.highlight.title.parttwo')}
        </h2>
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
        <p className={styles.specialOne}>
          {t('solution.subtitle.partone')}{' '}
          <span>{t('solution.subtitle.parttwo')}</span>
        </p>
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
            <li>{t('info.stats.followers')}</li>
          </ul>
          <span>4544</span>
          <ul>
            <li>{t('info.stats.budget')}</li>
          </ul>
          <span>
            500euro <span>(total)</span>
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
