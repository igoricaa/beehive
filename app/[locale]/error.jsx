'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
// import PageLayout from '@/components/PageLayout';

export default function Error({ error, reset }) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // <PageLayout title={t('title')}>
    <div>
      <h1>Error strana inner</h1>
    </div>
    // </PageLayout>
  );
}
