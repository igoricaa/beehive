'use client';

import styles from './MenuItems.module.scss';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { routes } from '@/data';

const MenuItems = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.menuItemsWrapper}>
      {routes.map((route, index) => (
        <li key={index} className={pathname == route.path ? styles.active : ''}>
          <Link href={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
