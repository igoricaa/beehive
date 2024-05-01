import styles from './page.module.scss';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <main className={styles.main}>
      <h1>Obavezno nas kontaktiraj!</h1>
      <section className={styles.contactSection}>
        <h2>
          Ako imaš ideju / predlog / pitanje,
          <br />
          naše <span>🐝</span> <span>🐝</span> su uvek dostupne.
        </h2>
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
