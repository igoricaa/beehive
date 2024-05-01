import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

const categories = ['Branding', 'Web Design', 'Development'];
const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/pranabigtree/',
  },
];

const Project = () => {
  return (
    <main className={styles.main}>
      <div className={styles.headerTop}>
        <h2>Prana</h2>
        <div className={styles.categoriesWrapper}>
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image src='/prana-header.png' alt='Prana' sizes='95vw' fill priority />
      </div>

      <section className={styles.contentSection}>
        <span>O Prani</span>
        <h2>
          Prana je porodični fusion restoran, osnovan 2022. godine. Zabavna
          ideja za restoran, da bude community orijentisan, da u sebi nosi duh
          italije, ali i havajsku egzotiku.
        </h2>

        <p>
          Prana je porodični fusion restoran, osnovan2022. godine. Zabavna ideja
          za restoran, da bude community orijentisan, da u sebi nosi duh
          italije, ali i havajsku egzotiku. Ideja koja nosi ovo svetlo mesto u
          Hilandarskoj 6 i dve godinekasnije Kneginje Zorke 28, je da se služi
          hrana koja povećava životnu energiju.
        </p>

        <p>
          Istina je, hrana je marketinški vrlozavodljiva jer je neraskidivo
          povezana sa emocijama, ali, postavlja se pitanje:kako ispričati jednu
          nežnu, porodičnu priču; učiniti da se svi osećaju kao kodkuće;
          stvoriti ambijent u kojem je Prana omiljeno mesto u komšiluku, koja,
          uzizuzetnu ponudu hrane, može da donese i zrak sunca?
        </p>

        <p>Upravo je to priča koju smo imali zadatak da ispričamo.</p>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.imgWrapper}>
          <Image
            src='/our-work/prana-floating-img-left.png'
            alt='Prana'
            sizes='25vw'
            fill
          />
        </div>
        <div className={styles.imgWrapper}>
          <Image
            src='/our-work/prana-floating-img-right.png'
            alt='Prana'
            sizes='25vw'
            fill
          />
        </div>
      </section>

      <section className={styles.contentSection}>
        <span>Izazov</span>
        <h2>
          Kako precizno preslikati nečiju viziju kroz sadržaj?
          <br />
          <br />
          Razumeti, istražiti, naučiti i sprovesti.
        </h2>

        <p>
          Stvaranjem sadržaja koji je adekvatan za društvene mreže, a koji je
          baziran na željama ikreativnoj vizijij klienta, stvorili smo vizuelni
          i komunikacioni ton koji preslikava baš onaj koji se nalazi unutar
          <span> Prane</span>. Pažljivo iskrojenom strategijom, testiranjem
          sadržaja i osluškivanjem publike, došli smo do odličnih rezultata i
          uspešno odgovorili na poslovni izazov.
        </p>
      </section>

      <section className={styles.breakSection}>
        <Image
          src='/our-work/prana-break-bg.png'
          alt='Beehive Prana Project'
          fill
          sizes='100vw'
          quality={90}
        />
      </section>

      <section className={styles.contentSection}>
        <p className={styles.specialOne}>
          Otvaranje lokala: <span>Mart 2022.</span>
        </p>
        <p>
          Organizovali smo <span>pre-opening</span> event zaprijatelje kuće -{' '}
          <span>influenseri, glumci, prijatelji i partneri,</span> dobili su
          uvid u to kako će Prana izgledati - kroz male zalogaje odabranih jela,
          vina, prijateljskog i porodičnog druženja, jedne prolećne nedelje
          ujutru. Pre nego što je otvoren lokal, <span>Prana</span> je već imala
          organskih 1000 pratilaca, od samog događaja i najave nečeg potpuno
          novog i jedinstvenog.
        </p>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.scopeWrapper}>
          <h3>Scope</h3>
          <ul>
            <li>Content creation (video, photography)</li>
            <li>Copywriting</li>
            <li>Social media management</li>
            <li>Social media strategy</li>
            <li>PR</li>
            <li>Event management</li>
            <li>Influencer marketing</li>
          </ul>
        </div>
        <div className={styles.statsWrapper}>
          <h3>Statistika</h3>
          <ul>
            <li>Followers</li>
          </ul>
          <span>4544</span>
          <ul>
            <li>Uloženi budžet</li>
          </ul>
          <span>
            500euro <span>(total)</span>
          </span>
        </div>
      </section>

      <section className={styles.socialsSection}>
        <h3>Prana socijalne platforme</h3>
        <div className={styles.socials}>
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              className={styles.social}
              target='_blank'
            >
              <span>{social.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
