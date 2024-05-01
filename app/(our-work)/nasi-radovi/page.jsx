import { projects } from '@/data';
import styles from './page.module.scss';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import CtaButton from '@/components/CtaButton';

const Projects = () => {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <Image
          src={'/case-study-header.png'}
          alt='BeeHive case study'
          quality={100}
          fill
          sizes='100vw'
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
        />
        <h2>
          saradjujemo sa vama za
          <br />
          hrabre ciljeve
        </h2>
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
              <Link href={`nasi-radovi/${project.slug}`}>
                <h3 style={{ borderColor: project.textColor }}>
                  {project.title}:
                </h3>
              </Link>
            </div>

            <div className={styles.projectContent}>
              <p>{project.description}</p>
              <p>{project.description2}</p>
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
