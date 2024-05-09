'use client';

import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import ContactFormButton from './ContactFormButton';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(formData) {
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div className={styles.rowWrapper}>
        <input
          placeholder='Ime'
          {...register('name', {
            required: { value: true, message: 'Ime je obavezno polje' },
          })}
          className={errors.name ? styles.error : ''}
        />
        <input
          placeholder='Mail'
          {...register('email', {
            required: { value: true, message: 'Email je obavezno polje' },
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Unesite ispravnu email adresu',
            },
          })}
          className={errors.email ? styles.error : ''}
        />
      </div>

      {(errors.name || errors.email) && (
        <div className={styles.errorsWrapper}>
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>
          )}
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>
      )}

      <div className={styles.rowWrapper}>
        <textarea
          placeholder='Poruka'
          rows={3}
          {...register('message', {
            required: { value: true, message: 'Poruka je obavezno polje' },
          })}
          className={errors.message ? styles.error : ''}
        />
      </div>
      {errors.message && (
        <div className={styles.errorsWrapper}>
          <p className={styles.errorMessage}>{errors.message.message}</p>
        </div>
      )}

      <div className={styles.rowWrapper}>
        <p className={styles.note}>
          Odgovor možeš očekivati u najkraćem mogućem roku.
        </p>
        <ContactFormButton />
      </div>
    </form>
  );
}
