import styles from './BurgerIcon.module.scss';

const BurgerIcon = ({ burgerRef, isSticky, active, onClickHandler }) => {
  const clickHandler = () => {
    onClickHandler();
  };

  return (
    <div
      ref={burgerRef}
      className={[
        styles.burgerWrapper,
        isSticky ? styles.sticky : '',
        active ? styles.active : '',
      ].join(' ')}
      onClick={clickHandler}
    >
      <svg
        xmlns='https://www.w3.org/2000/svg'
        xmlnsXlink='https://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        width='65px'
        height='65px'
        viewBox='0 0 69 69'
        style={{ enableBackground: 'new 0 0 69 69' }}
        xmlSpace='preserve'
      >
        <circle cx='34.5' cy='35' r='32.5'></circle>
        <rect x='23' y='23.5' className='st0' width='3' height='15'></rect>
        <rect x='23' y='42.5' className='st0' width='3' height='4'></rect>
        <rect x='33' y='23.5' className='st0' width='3' height='8'></rect>
        <rect x='33' y='35.5' className='st0' width='3' height='11'></rect>
        <rect x='43' y='23.5' className='st0' width='3' height='23'></rect>
      </svg>
    </div>
  );
};

export default BurgerIcon;
