import styles from './AccordionItem.module.scss';

export default function AccordionItem({
  messages,
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
      className={[
        'hoverable',
        styles.article,
        isActive ? styles.active : '',
      ].join(' ')}
      onClick={() => handleClick(index)}
    >
      <div className={styles.accordion}>
        <div className={styles.accordionTop}>
          <h3>{messages.title}</h3>
          <button
            className={styles.accordionButton}
            onClick={() => handleClick(index)}
            aria-label='Accordion Button'
          >
            <span className={styles.horizontalLine}></span>
            <span className={styles.verticalLine}></span>
          </button>
        </div>

        <div className={styles.accordionBottom}>
          <p>{messages.description}</p>
        </div>
      </div>
    </article>
  );
}
