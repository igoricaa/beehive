import styles from './page.module.scss';
import ContactForm from '@/components/ContactForm';
import { RoughNotation } from 'react-rough-notation';

const Contact = () => {
  return (
    <main className={styles.main}>
      <h1>
        <RoughNotation
          type='circle'
          color='#FF6B00'
          iterations={3}
          strokeWidth={3}
          show
        >
          Obavezno
        </RoughNotation>{' '}
        nas <span style={{whiteSpace: "nowrap"}}>kontaktiraj <span className={'exclamationMark'}>.</span></span>
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
