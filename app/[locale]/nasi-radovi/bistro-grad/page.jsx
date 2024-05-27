import Image from 'next/image';
import styles from './page.module.scss';
import pranaHeader from '@/public/prana-header.png';
import imageFloatingLeft from '@/public/our-work/prana-floating-img-left.png';
import imageFloatingRight from '@/public/our-work/prana-floating-img-right.png';
import breakBg from '@/public/our-work/prana-break-bg.png';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const categories = ['Branding', 'Web Design', 'Development'];
const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/bistro_grad/',
  },
];

const Project = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('projects.bistrograd');

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
        <h2>{t('about.highlight.title')}</h2>
        <p>{t('about.text')}</p>
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
              className={styles.social}
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
