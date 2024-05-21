import Image from 'next/image';
import styles from './ProjectsSliderItem.module.scss';

export default function ProjectsSliderItem({ content }) {
  return (
    <article className={[styles.emblaSlide, 'card'].join(' ')}>
      <div className={styles.innerWrapper}>
        {content.listImage && (
          <div className={styles.imgWrapper}>
            <Image
              src={content.listImage}
              alt={content.title}
              fill
              sizes='(max-width: 1024px) 50vw, 22.5vw'
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        {content.listVideo && (
          <div className={styles.videoWrapper}>
            <video
              autoPlay
              loop
              muted
              playsInline
              src={content.listVideo}
            ></video>
          </div>
        )}
      </div>
      <div className={styles.infoWrapper}>
        {content.categories && (
          <div className={styles.categoriesWrapper}>
            {content.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        )}
        <div className={styles.titleWrapper}>
          <span>{content.subtitle}</span>
          <h5>{content.title}</h5>
        </div>
      </div>
    </article>
  );
}
