'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '@/style/module/callendar.module.scss';
import { format } from 'date-fns';
import { enUS, deDE } from 'date-fns/locale'; // Import locales

export default function CallendarComponent() {
  const [value, onChange] = useState(new Date());
  const locale = 'en-US'; // Ensure you set a consistent locale

  return (
    <div className={styles.container}>
      <Calendar
        className={styles.callendar}
        onChange={onChange}
        value={value}
        locale={locale} // Set the locale
      />
    </div>
  );
}
