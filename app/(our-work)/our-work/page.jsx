import { projects } from '@/data';
import styles from './page.module.scss';
import Image from 'next/image';
import Accordions from '@/components/Accordions';
import { Link } from 'next-view-transitions'

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
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={[
              styles.project,
              index % 2 !== 0 ? styles.even : '',
            ].join(' ')}
          >
            <div className={styles.titleWrapper}>
              <Link href={`our-work/${project.slug}`}>
                <h3>{project.title}:</h3>
              </Link>
            </div>

            <div className={styles.projectContent}>
              <p>{project.description}</p>
              <p>{project.description2}</p>
              <Link
                href={`our-work/${project.slug}`}
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
      <section className={styles.servicesSection}>
        <h2>naše usluge:</h2>
        {/* <Accordions /> */}
      </section>
    </main>
  );
};

export default Projects;
