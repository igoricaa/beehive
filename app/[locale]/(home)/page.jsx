import styles from './page.module.scss';
import TeamSliderSection from '@/components/Sliders/Team/TeamSliderSection';
import { team } from '@/data';
import ServicesSection from '@/components/ServicesSection';
import Typewriter from '@/components/Typewritter';
import DistortionImage from '@/components/DistortionImage';
import ProjectsSliderSection from '@/components/Sliders/Projects/ProjectsSliderSection';
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
    title: t('ourServices.title'),
    services: [
      {
        title: t('ourServices.services.digital.title'),
        description: t('ourServices.services.digital.description'),
      },
      {
        title: t('ourServices.services.social.title'),
        description: t('ourServices.services.social.description'),
      },
      {
        title: t('ourServices.services.content.title'),
        description: t('ourServices.services.content.description'),
      },
      {
        title: t('ourServices.services.design.title'),
        description: t('ourServices.services.design.description'),
      },
      {
        title: t('ourServices.services.development.title'),
        description: t('ourServices.services.development.description'),
      },
    ],
  };

  const teamMessages = {
    title: t('team.title'),
    description: t('team.description'),
    hover: [
      {
        title: t('team.hover.darja.title'),
        text: t('team.hover.darja.text'),
      },
      {
        title: t('team.hover.tara.title'),
        text: t('team.hover.tara.text'),
      },
      {
        title: t('team.hover.andjela.title'),
        text: t('team.hover.andjela.text'),
      },
      {
        title: t('team.hover.jelena.title'),
        text: t('team.hover.jelena.text'),
      },
      {
        title: t('team.hover.djordje.title'),
        text: t('team.hover.djordje.text'),
      },
      {
        title: t('team.hover.igor.title'),
        text: t('team.hover.igor.text'),
      },
      {
        title: t('team.hover.dea.title'),
        text: t('team.hover.dea.text'),
      },
      {
        title: t('team.hover.andja.title'),
        text: t('team.hover.andja.text'),
      },
    ],
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

      <TeamSliderSection content={team} messages={teamMessages} />
    </main>
  );
}
