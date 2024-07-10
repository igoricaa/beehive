import styles from './BurgerIcon.module.scss';

const BurgerIcon = ({ burgerRef, isSticky, active, onClickHandler }) => {
  return (
    <div
      ref={burgerRef}
      className={[
        styles.burgerWrapper,
        isSticky ? styles.sticky : '',
        active ? styles.active : '',
      ].join(' ')}
      onClick={onClickHandler ? onClickHandler : () => {}}
    >
      <svg
        width='34'
        height='34'
        viewBox='0 0 34 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='17' cy='17' r='17' fill='#1F1F1F' />
        <path
          d='M9.88867 17.8889L9.88867 23.2222'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          d='M9.88867 14.3334V11.6667'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          d='M17 9L17 25'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          d='M24.1113 11.6666L24.1113 23.2222'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
};

export default BurgerIcon;
