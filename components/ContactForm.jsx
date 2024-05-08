'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import ContactFormButton from './ContactFormButton';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
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
    }).then(() => {
      console.log('Your email message has been sent successfully');
    });

    // reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div>
        <input
          placeholder='Ime'
          {...register('name', { required: true })}
          className={errors.name ? styles.error : ''}
        />
        <input
          placeholder='Mail'
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className={errors.email ? styles.error : ''}
        />
      </div>
      {/* {errors.email && <p>Email is required and must be valid</p>} */}
      <div>
        <textarea
          placeholder='Poruka'
          rows={3}
          {...register('message', { required: true })}
          className={errors.message ? styles.error : ''}
        />
        {/* {errors.message && <p>message is required</p>} */}
      </div>
      <div>
        <p>Odgovor možeš očekivati u najkraćem mogućem roku.</p>
        <ContactFormButton />
      </div>
    </form>
  );
}
