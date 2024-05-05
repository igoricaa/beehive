import { projects } from '@/data';
import styles from './page.module.scss';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import CtaButton from '@/components/CtaButton';
import RoughNotationWrapper from '@/components/RoughNotationWrapper';
import EyeAnimation from '@/components/EyeAnimation';

const Projects = () => {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <EyeAnimation
          style={{
            position: 'absolute',
            height: '125px',
            width: '125px',
            position: 'absolute',
            left: '10vw',
            top: '200px',
          }}
          animationSrc='https://lottie.host/b0d0b8b0-444b-45d2-a9f4-41f1f4e93b0c/0YL52S4bsw.json'
        />
        <h2>
          Sarađujemo sa vama za hrabre{' '}
          <RoughNotationWrapper
            type='circle'
            color='#FF6B00'
            iterations={3}
            strokeWidth={3}
          >
            ciljeve
          </RoughNotationWrapper>
        </h2>
        <p>
          Ovo su samo neke od naših uspešnih saradnji, više informacija u
          detaljima studija
        </p>
        <Image
          src='/arrow-down-orange.svg'
          alt='Arrow Direction'
          width={30}
          height={68}
        />
        <EyeAnimation
          style={{
            height: '72px',
            width: '72px',
            position: 'absolute',
            right: '10vw',
            top: '250px',
          }}
          animationSrc='https://lottie.host/b0d0b8b0-444b-45d2-a9f4-41f1f4e93b0c/0YL52S4bsw.json'
        />
      </section>
      <section className={styles.projectsSection}>
        <CtaButton
          href='/kontakt'
          mainText='Imate projekat?'
          subText='Hajde da se ispričamo'
          floating
        />
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={styles.project}
            style={{
              backgroundColor: project.backgroundColor,
              color: project.textColor,
            }}
          >
            <div className={styles.titleWrapper}>
              {project.ready ? (
                <Link href={`nasi-radovi/${project.slug}`}>
                  <h3 style={{ borderColor: project.textColor }}>
                    {project.title}:
                  </h3>
                </Link>
              ) : (
                <>
                  <h3 style={{ borderColor: project.textColor }}>
                    {project.title}:
                  </h3>
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
                      Uskoro
                    </span>
                  </RoughNotationWrapper>
                </>
              )}
            </div>

            <div className={styles.projectContent}>
              <p>{project.description}</p>
              <p>{project.description2}</p>
              {project.ready ? (
                <Link
                  href={`nasi-radovi/${project.slug}`}
                  className={styles.projectImageWrapper}
                >
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              ) : (
                <div className={styles.projectImageWrapper}>
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2 id='floatingBorderElement'>
          Pitanje, nedoumica? Dostupni smo za svaku potrebu
        </h2>
        <CtaButton
          href='/kontakt'
          mainText='Zakažite konsultacije'
          subText='Dostupni smo za svaki piksel'
        />
      </section>
    </main>
  );
};

export default Projects;
