import Image from 'next/image';
import styles from './page.module.scss';
import headerBg from '@/public/about-us-header-bg.png';
import { coreValues } from '@/data';
import IntersectingHeading from '@/components/IntersectingHeading';
import RoughNotationWrapper from '@/components/RoughNotationWrapper';

export default function AboutUs() {
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
          Svi
        </RoughNotationWrapper>{' '}
        idemo na{' '}
        <span style={{ whiteSpace: 'nowrap' }}>
          terapiju<span className={'exclamationMark'}>.</span>
        </span>
      </h1>

      <div className={styles.headerImgWrapper}>
        <Image
          src={headerBg}
          fill
          sizes='100vw'
          alt='Beehive - Belgrade Sunset'
          priority
        />
      </div>
      <section className={styles.aboutUsSection}>
        <h2>O nama:</h2>
        <p>
          Jaka i zdrava pčelinja zajednica u toku jednog dana može oprašiti do
          tri miliona cvetova. Mi sve isto, samo za digital.
          <br />
          <br />
          Lično mi. Ne ovi novi roboti.
        </p>
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
              />
              <h3>{coreValue.title}</h3>
              <p>{coreValue.description}</p>
            </div>
          );
        })}
      </section>

      <section className={styles.breakSection}>
        <IntersectingHeading text='uzzing with ideas!' />
        <div className={styles.imgWrapper}>
          <Image
            id='bgImage'
            src='/about-us-bg.png'
            alt='Beehive - About Us'
            fill
            sizes='70vw'
          />
        </div>
        <IntersectingHeading text='uzzing with ideas!' />
      </section>

      <section className={styles.aboutBeesSection}>
        <h2>O pčelama:</h2>
        <div>
          <p>Da li ste znali da:</p>
          <ul>
            <li>Su pčele radoholici</li>
            <li>
              {' '}
              Komuniciraju{' '}
              <RoughNotationWrapper
                type='circle'
                strokeWidth={3}
                animationDelay='500'
                playOnce
                color='#ff6b00'
              >
                plesom
              </RoughNotationWrapper>
              , kao i mi.
            </li>
            <li>Pčele imaju petoro očiju, mi sigurno imamo više.</li>
            <li>Vide boje</li>
            <li>I imaju ličnost…</li>
            <li>Stvaraju poslove</li>
            <li>Pčele retko spavaju. To je slučaj i sa nama.</li>
            <li>Pamte lica i…</li>
            <li>
              Privlači ih{' '}
              <RoughNotationWrapper
                type='underline'
                strokeWidth={3}
                iterations={3}
                animationDelay='750'
                playOnce
                color='#ff6b00'
              >
                kofein.
              </RoughNotationWrapper>
            </li>
          </ul>
        </div>

        <h3>
          Mi smo se svuda pronašli. Zato smo i stvorili{' '}
          <RoughNotationWrapper
            type='highlight'
            animationDelay='1000'
            playOnce
            color='#FFD600'
          >
            <span>košnicu.</span>
          </RoughNotationWrapper>
        </h3>
      </section>
    </main>
  );
}
