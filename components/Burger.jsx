import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Burger.module.scss';

export default function Burger() {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef < HTMLDivElement > null;
  const menuRef = useRef < HTMLDivElement > null;

  const handleClickOutside = useCallback(
    (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    },
    [menuOpen, menuRef, burgerRef]
  );

  useEffect(() => {
    // setMounted(true);

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      className={styles.burger}
      ref={burgerRef}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
}
