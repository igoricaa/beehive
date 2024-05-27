import styles from './page.module.scss';
import SliderSection from '@/components/SliderSection';
import { team } from '@/data';
import ServicesSection from '@/components/ServicesSection';
import Typewriter from '@/components/Typewritter';
import DistortionImage from '@/components/DistortionImage';
import ProjectsSliderSection from '@/components/ProjectsSliderSection';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import beehiveLogoMark from '@/public/logos/beehiveLogoMark.svg';
import beehiveLogoMarkMobile from '@/public/logos/beehiveLogoMarkMobile.svg';

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');
  const t_cta = useTranslations('cta');

  const projectsMessages = {
    title: t('projectsSlider.title'),
    project: {
      categories: {
        branding: t('projectsSlider.project.categories.branding'),
        socialmedia: t('projectsSlider.project.categories.socialmedia'),
        marketing: t('projectsSlider.project.categories.marketing'),
      },
      client: t('projectsSlider.project.client'),
    },
    cta: {
      textMain: t_cta('textMain'),
      textSecondary: t_cta('textSecondary'),
    },
  };

  const servicesMessages = {
    title: t('ourServices'),
  };

  const teamMessages = {
    title: t('team.title'),
    description: t('team.description'),
    cta: {
      textMain: t_cta('textMain'),
      textSecondary: t_cta('textSecondary'),
    },
  };

  return (
    <main className={styles.main}>
      <section className={styles.statementSection}>
        <h1>
          <span>
            <picture>
              <source
                srcSet={beehiveLogoMarkMobile.src}
                media='(max-width: 1024px)'
              />
              <Image src={beehiveLogoMark} priority alt='Beehive Agency Logo' />
            </picture>
          </span>
          uzzing with ideas!
        </h1>

        <h3>
          {t('statement.partone')} <br />
          <span style={{ whiteSpace: 'nowrap' }}>
            {t('statement.parttwo')}{' '}
            <Typewriter
              strings={[
                t('statement.partthree.design'),
                t('statement.partthree.text'),
                t('statement.partthree.video'),
                t('statement.partthree.photography'),
                t('statement.partthree.programming'),
              ]}
            />
            <span className={styles.blinking}>_</span>.
          </span>
          <br />
          {t('statement.partfour')}
        </h3>
      </section>

      <DistortionImage />

      <section className={styles.aboutUsSection}>
        <h2>{t('aboutUs.title')}</h2>
        <p>{t('aboutUs.text')}</p>
      </section>

      <ProjectsSliderSection messages={projectsMessages} />

      <ServicesSection messages={servicesMessages} />

      <SliderSection content={team} messages={teamMessages} />
    </main>
  );
}
