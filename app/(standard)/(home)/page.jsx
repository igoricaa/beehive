import Image from 'next/image';
import styles from './page.module.scss';
import SliderSection from '@/components/SliderSection';
import { portfolioSectionContent, teamSectionContent } from '@/data';
import LogoMark from '@/public/logos/BeehiveLogoMark';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.statementSection}>
        <h1>
          <span>
            <LogoMark />
          </span>
          uzzing with ideas!
        </h1>

        {/* <h2>šta je beehive:</h2> */}
        <h3>
          Mi smo Beehive. Umemo da ispričamo priču vašeg brenda kroz{' '}
          <span className={styles.changingWords}> </span>
          <br />
          Ukratko - zujimo po svim digitalnim aktivnostima kojesu vama potrebne.
        </h3>
      </section>

      <div className={styles.headerImgWrapper}>
        <Image src={'/home-header.png'} fill alt='Beehive logo mark' priority />
      </div>

      <section className={styles.aboutUsSection}>
        <h2>pričanje priča</h2>
        <p>
          Jedna od najstarijih veština čovečanstva koja se održala do danas.
          Dobra priča namiruje našu potrebu za zajedništvom, razmenom i
          razumevanjem. Mi smo tim ljudi koji upravo zajedništvom, razmenom i
          razumevanjem može da od vašeg biznisa napravi most do potreba ljudi
          oko nas. Svi žele da čuju dobru priču, mi smo tu da im to damo. Neka
          zujanje počne.
        </p>
      </section>

      <SliderSection content={portfolioSectionContent} />

      <ServicesSection />

      <SliderSection content={teamSectionContent} />
    </main>
  );
}
