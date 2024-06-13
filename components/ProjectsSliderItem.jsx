import Image from 'next/image';
import styles from './ProjectsSliderItem.module.scss';
import Link from './Link';

export default function ProjectsSliderItem({ project, messages }) {
  return (
    <article className={[styles.emblaSlide, 'card'].join(' ')}>
      <Link
        href={`/our-work/${project.slug}`}
        className={project.ready ? 'hoverableView' : ''}
      >
        <div className={styles.innerWrapper}>
          {project.listImage && (
            <div className={styles.imgWrapper}>
              <Image
                src={project.listImage}
                alt={project.title}
                fill
                sizes='(max-width: 1024px) 50vw, 22.5vw'
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
          {project.listVideo && (
            <div className={styles.videoWrapper}>
              <video
                autoPlay
                loop
                muted
                playsInline
                src={project.listVideo}
              ></video>
            </div>
          )}
        </div>
        <div className={styles.infoWrapper}>
          {project.categories && (
            <div className={styles.categoriesWrapper}>
              {project.categories.map((category) => (
                <span key={category}>
                  {messages.categories[category.replace(/\s/g, '')]}
                </span>
              ))}
            </div>
          )}
          <div className={styles.titleWrapper}>
            <span>{messages.client}</span>
            <h4>{project.title}</h4>
          </div>
        </div>
      </Link>
    </article>
  );
}
