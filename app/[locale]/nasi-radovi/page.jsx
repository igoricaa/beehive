import { projects } from '@/data';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from '@/components/Link';
import CtaButton from '@/components/CtaButton';
import RoughNotationWrapper from '@/components/RoughNotationWrapper';
import EyeAnimation from '@/components/EyeAnimation';
import arrowDownOrange from '@/public/arrow-down-orange.svg';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const Projects = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('ourWork');
  const t_cta = useTranslations('cta');

  return (
    <main className={styles.main}>
      <section className={[styles.heroSection, 'hideCtaSection'].join(' ')}>
        <EyeAnimation
          style={{
            position: 'absolute',
            height: '150px',
            width: '150px',
            position: 'absolute',
            left: '10vw',
            top: '200px',
          }}
          mobileStyle={{
            top: '100vw',
          }}
          animationSrc='https://lottie.host/b0d0b8b0-444b-45d2-a9f4-41f1f4e93b0c/0YL52S4bsw.json'
        />
        <h2>
          {t('title.partone')}{' '}
          <RoughNotationWrapper
            type='circle'
            color='#FF6B00'
            iterations={3}
            strokeWidth={3}
          >
            {t('title.parttwo')}
          </RoughNotationWrapper>
        </h2>
        <p>{t('subtitle')}</p>
        <Image src={arrowDownOrange} alt='Arrow Direction' priority />
        <EyeAnimation
          style={{
            height: '100px',
            width: '100px',
            position: 'absolute',
            right: '10vw',
            top: '250px',
          }}
          mobileStyle={{
            top: '100vw',
          }}
          animationSrc='https://lottie.host/b0d0b8b0-444b-45d2-a9f4-41f1f4e93b0c/0YL52S4bsw.json'
        />
      </section>
      <section className={styles.projectsSection}>
        <CtaButton
          href='/kontakt'
          mainText={t_cta('textMain')}
          secondaryText={t_cta('textSecondary')}
          floating
        />
        {projects.map((project, index) => {
          const projectTitle = project.title.toLowerCase().replace(/\s/g, '');

          return (
            <article
              key={projectTitle}
              className={styles.project}
              style={{
                backgroundColor: project.backgroundColor,
                color: project.textColor,
              }}
            >
              <div className={styles.titleWrapper}>
                <Link
                  href={`/nasi-radovi/${project.slug}`}
                  style={{ pointerEvents: project.ready ? 'auto' : 'none' }}
                >
                  <h3 style={{ borderColor: project.textColor }}>
                    {t(`projects.${projectTitle}.title`)}:
                  </h3>
                </Link>
                {!project.ready && (
                  <RoughNotationWrapper
                    type='highlight'
                    color='#FFD600'
                    style={{ width: 'fit-content', display: 'block' }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: '1.5rem',
                        marginTop: '2rem',
                      }}
                    >
                      {t('projects.comingSoon')}
                    </span>
                  </RoughNotationWrapper>
                )}
              </div>

              <div className={styles.projectContent}>
                <p>{t(`projects.${projectTitle}.description.partone`)}</p>
                <p>
                  {t(
                    `projects.${projectTitle}.description.parttwo`
                  )}
                </p>
                <Link
                  href={`/nasi-radovi/${project.slug}`}
                  className={styles.projectImageWrapper}
                  style={{ pointerEvents: project.ready ? 'auto' : 'none' }}
                >
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <section className={styles.ctaSection}>
        <h2 className='hideCtaSection'>{t('ctaSection.text')}</h2>
        <CtaButton
          href='/kontakt'
          mainText={t('ctaSection.button.textMain')}
          secondaryText={t('ctaSection.button.textSecondary')}
        />
      </section>
    </main>
  );
};

export default Projects;
