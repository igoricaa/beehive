'use client';

import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import ContactFormButton from './ContactFormButton';
import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function ContactForm({ messages }) {
  const [captchatoken, setCaptchaToken] = useState('');

  useEffect(() => {
    setValue('recaptcha_response', captchatoken);
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
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
    <>
      <form
        id='contact-form'
        name='contact-form'
        onSubmit={handleSubmit(onSubmit)}
        className={styles.contactForm}
      >
        <div className={styles.rowWrapper}>
          <input
            placeholder={messages.namePlaceholder}
            {...register('name', {
              required: { value: true, message: messages.nameReqError },
            })}
            className={errors.name ? styles.error : ''}
            autoComplete='name'
          />
          <input
            placeholder={messages.emailPlaceholder}
            {...register('email', {
              required: { value: true, message: messages.emailReqError },
              pattern: {
                value: /^\S+@\S+$/i,
                message: messages.emailPatternError,
              },
            })}
            className={errors.email ? styles.error : ''}
            autoComplete='email'
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
            placeholder={messages.messagePlaceholder}
            rows={3}
            {...register('message', {
              required: { value: true, message: messages.messageReqError },
            })}
            className={errors.message ? styles.error : ''}
          />
        </div>
        {errors.message && (
          <div className={styles.errorsWrapper}>
            <p className={styles.errorMessage}>{errors.message.message}</p>
          </div>
        )}

        <input
          type='hidden'
          {...register('recaptcha_response')}
          id='recaptchaResponse'
        />

        <div className={styles.rowWrapper}>
          <p className={styles.note}>{messages.subtitle}</p>
          <ContactFormButton messages={messages.button} />
        </div>
      </form>
      <Script
        id='recaptcha-load'
        strategy='lazyOnload'
        src={`https://www.google.com/recaptcha/api.js?render=6Lf8xCUqAAAAAKqvzDfKX5X4SRlSuss5LQQT30yj`}
        onLoad={() => {
          grecaptcha.ready(function () {
            grecaptcha
              .execute('6Lf8xCUqAAAAAKqvzDfKX5X4SRlSuss5LQQT30yj', {
                action: 'contact',
              })
              .then(function (token) {
                setCaptchaToken(token);
              });
          });
        }}
      />
    </>
  );
}
