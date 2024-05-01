'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import ContactFormButton from './ContactFormButton';

// type FormData = {
//   subject: string;
//   email: string;
//   message: string;
// };

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
        {/* <button type='submit'>
          <div className={styles.innerWrapper}>
            <span ref={overlayRef} className={styles.overlay}></span>
            <div className={styles.textWrapper}>
              <span>Pošalji poruku</span>
              <span>I proveri spam za svaki slučaj</span>
            </div>
          </div>
        </button> */}
        <ContactFormButton />
      </div>
    </form>
  );
}
