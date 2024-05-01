import styles from './page.module.scss';
import ContactForm from '@/components/ContactForm';
import EyeAnimation from '@/components/EyeAnimation';
import RoughNotationWrapper from '@/components/RoughNotationWrapper';

const Contact = () => {
  return (
    <main className={styles.main}>
      <EyeAnimation
        style={{
          height: '30vw',
          width: '30vw',
          position: 'absolute',
          bottom: '25%',
          right: '5vw',
        }}
        animationSrc='https://lottie.host/e70b0c8e-eeb6-49a3-9200-4f328769e2c5/nc6aORCcQw.json'
      />
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
