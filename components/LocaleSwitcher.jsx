'use client';

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import styles from './LocaleSwitcher.module.scss';

export default function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function handleOnChange(event) {
    const nextLocale = event.target.checked ? 'sr' : 'en';
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  return (
    <label className={[styles.localeSwitcher, 'hoverable'].join(' ')}>
      <input
        type='checkbox'
        className={styles.checkbox}
        checked={locale === 'sr'}
        onChange={handleOnChange}
        name='locale'
      />
      <span className={styles.switch} />
    </label>
  );
}
