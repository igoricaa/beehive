'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalElement() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace=''
      data-cal-link='beehive/discovery-session-w-beehive-agency'
      data-cal-config='{"layout":"month_view"}'
    >
      Click me
    </button>
  );
}
