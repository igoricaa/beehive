'use client';

import styles from './MenuItems.module.scss';
import Link from '@/components/Link';
import { usePathname } from '../navigation';

const MenuItems = ({ routes }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.menuItemsWrapper}>
      {routes.map((route, index) => (
        <li
          key={index}
          className={
            pathname == route.href ||
            (route.href !== '/' &&
              pathname.slice(1).includes(route.href.slice(1)))
              ? styles.active
              : ''
          }
        >
          <Link href={route.href}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
