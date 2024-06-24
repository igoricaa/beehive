import Image from 'next/image';
import styles from './page.module.scss';
import rogerHeader from '@/public/our-work/roger-header.png';
import imageFloatingLeft from '@/public/our-work/roger-case-study-1.png';
import imageFloatingRight from '@/public/our-work/roger-case-study-2.png';
import breakBg from '@/public/our-work/roger-break-bg.png';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const categories = ['Website Development'];
const links = [
  {
    name: 'Website',
    link: 'https://roger.rs',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/roger.directors/',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/roger-directors/',
  },
];

const Project = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('projects.roger-directors');

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
        <Image src={rogerHeader} alt={t('title')} priority />
      </div>

      <section className={styles.contentSection}>
        <span>{t('about.highlight.subtitle')}</span>
        <h2>{t('about.highlight.title.partone')}</h2>
        <p>{t('about.partone')}</p>
        <p>{t('about.parttwo')}</p>
        {/* <p>{t('about.partthree')}</p> */}
      </section>

      <section className={styles.contentSection}>
        <span>{t('challenge.highlight.subtitle')}</span>
        <h2>
          {t('challenge.highlight.title.partone')}
          {/* <br />
          <br />
          {t('challenge.highlight.title.parttwo')} */}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: t.raw('challenge.description') }}
        ></p>
        <p
          className={styles.descBullet}
          dangerouslySetInnerHTML={{ __html: t.raw('challenge.descBullet-1') }}
        ></p>
        <p
          className={styles.descBullet}
          dangerouslySetInnerHTML={{ __html: t.raw('challenge.descBullet-2') }}
        ></p>
        <p
          className={styles.descBullet}
          dangerouslySetInnerHTML={{ __html: t.raw('challenge.descBullet-3') }}
        ></p>
        <p
          className={styles.descBullet}
          dangerouslySetInnerHTML={{ __html: t.raw('challenge.descBullet-4') }}
        ></p>
        <p
          dangerouslySetInnerHTML={{ __html: t.raw('challenge.desc-final') }}
        ></p>
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
        <span>{t('approach.title.subtitle')}</span>
        <h3 style={{ marginTop: 0 }}>{t('approach.title.main')}</h3>

        <p className={styles.descBullet}>{t('approach.descBullet-1')}</p>
        <p className={styles.descBullet}>{t('approach.descBullet-2')}</p>
        <p className={styles.descBullet}>{t('approach.descBullet-3')}</p>
        <p className={styles.descBullet}>{t('approach.descBullet-4')}</p>
        {/* <p
          dangerouslySetInnerHTML={{ __html: t.raw('approach.description') }}
        ></p> */}
      </section>

      <section className={styles.breakSection}>
        {/* <Image
          src={breakBg}
          alt={`Beehive ${t('title')} Project`}
          quality={90}
        /> */}
      </section>

      <section className={styles.contentSection}>
        <span>{t('solution.title.subtitle')}</span>
        <h3 style={{ marginTop: 0 }}>{t('solution.title.main')}</h3>
        <p className={styles.descBullet}>{t('solution.descBullet-1')}</p>
        <p className={styles.descBullet}>{t('solution.descBullet-2')}</p>
        <p className={styles.descBullet}>{t('solution.descBullet-3')}</p>
        <p className={styles.descBullet}>{t('solution.descBullet-4')}</p>
        {/* <p
          dangerouslySetInnerHTML={{ __html: t.raw('solution.description') }}
        ></p> */}
      </section>

      {/* <section className={styles.infoSection}>
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
      </section> */}

      <section className={styles.linksSection}>
        <h3>{t('links.title')}</h3>
        <div className={styles.links}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className={[styles.link, 'hoverable'].join(' ')}
              target='_blank'
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
