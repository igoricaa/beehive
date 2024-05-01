import styles from './page.module.scss';
import ContactForm from '@/components/ContactForm';
import RoughNotationWrapper from '@/components/RoughNotationWrapper';

const Contact = () => {
  return (
    <main className={styles.main}>
      <h1>
        <RoughNotationWrapper
          type='circle'
          color='#FF6B00'
          iterations={3}
          strokeWidth={3}
        >
          Obavezno
        </RoughNotationWrapper>{' '}
        nas{' '}
        <span style={{ whiteSpace: 'nowrap' }}>
          kontaktiraj <span className={'exclamationMark'}>.</span>
        </span>
      </h1>
      <section className={styles.contactSection}>
        <h2>
          Ako imaš ideju / predlog / pitanje, <br />
          naše <span>🐝</span> <span>🐝</span> su uvek dostupne.
        </h2>
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
