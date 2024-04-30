import styles from './AccordionItem.module.scss';

export default function AccordionItem({
  service,
  index,
  isActive,
  handleToggle,
}) {
  const handleClick = (index) => {
    handleToggle(index);
  };

  return (
    <article
      key={index}
      className={[styles.article, isActive ? styles.active : ''].join(' ')}
      onClick={() => handleClick(index)}
    >
      <div className={styles.accordion}>
        <div className={styles.accordionTop}>
          <h3>{service.title}</h3>
          <button
            className={styles.accordionButton}
            onClick={() => handleClick(index)}
          >
            <span className={styles.horizontalLine}></span>
            <span className={styles.verticalLine}></span>
          </button>
        </div>

        <div className={styles.accordionBottom}>
          <span dangerouslySetInnerHTML={service.description}></span>
        </div>
      </div>
    </article>
  );
}
