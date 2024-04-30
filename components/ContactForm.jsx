'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';

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
          placeholder='subject'
          {...register('subject', { required: true })}
          className={errors.subject ? styles.error : ''}
        />
        <input
          placeholder='email'
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className={errors.email ? styles.error : ''}
        />
      </div>
      {/* {errors.email && <p>Email is required and must be valid</p>} */}
      <div>
        <textarea
          placeholder='poruka'
          rows={1}
          {...register('message', { required: true })}
          className={errors.message ? styles.error : ''}
        />
        {/* {errors.message && <p>message is required</p>} */}
        <button type='submit'>Pošalji</button>
      </div>
    </form>
  );
}
