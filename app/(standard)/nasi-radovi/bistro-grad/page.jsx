import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

const categories = ['Branding', 'Web Design', 'Development'];
const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/bistro_grad/',
  },
];

const Project = () => {
  return (
    <main className={styles.main}>
      <div className={styles.headerTop}>
        <h2>Bistro Grad</h2>
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
        <span>O Bistrou</span>
        <h2>
          Beogradski Hometown bar i restoran. Lociran u samom centru, u Uzun
          MIrkovoj broj 5. Slikai prilika urbanog načina života. Ljudi koji vole
          da se zabavljaju, druže ibacaju dobre fore. Njihov meni je
          raznovrstan, kao i klijentela, u samom lokalupostoji mnoštvo easter
          egg-ova, a pravaca komunikacije na mrežama može bitimali milion. Kako
          izvući esenciju ovog lokala i prikazati je najbolje moguće
          nadigitalnim kanalima?
        </h2>

        <h3>Zadatak i izazov?</h3>
        <p>
          Nadovezatise na postojeći identitet i ispričati Bistro priču na
          zabavan, interaktivan iuzbudljiv način.{' '}
        </p>
        <p>
          Znamo da je u centru Beograda ali Bistro je centar za sebe. Mesto gde
          je sve moguće, gdeceđena može da se služi u ponoć, a flaša vina uz
          doručak. Gde se pire za mesopravi od kestenja, hleb po Zuzinom
          receptu, a za supu kažu da je infuzija.Ekipa koja radi ima dosta
          posloženog životnog iskustva, lepe manire, osmehe idobar ukus. Prava
          moderna gostionica, zaključio bi neko ko eklektičnomenterijeru, ali
          ipak, nije to to - ne može baš da se uhvati tek tako. Žurke sene
          planiraju, one se dešavaju. A dešavaju se. Bistro je veliki Beograd u
          jednomodličnom ćošku Starog Grada - Beograd na pravi način.
        </p>
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
        <h3>Kako smo odgovorili na zadatak?</h3>
        <p>
          Napravilismo jedan digitalni, nesavršeni Bistro reality program.
          Prikazali smo štase dešava kada se jelo poruči, hvatali momente
          zabave, smeha, zanimljivihpriča. Upoznali smo publiku sazaposlenima,
          njihovim karakterom, dočarali smo ambijent i malo više od toga-
          prikazali smo kako različita društvasede na istom mestu, kako se
          stvara sinergija i kako nastaje žurka, kako seslažu sveže namirnice i
          šta se dešava kada odzvoni radno vreme petkom. Nismopozivali ljude već
          smo im preneliatmosferu, čiji su deo rado želeli da postanu. Svi žele
          da budu na Bistro storiju, i to je naš najveći uspeh.
        </p>

        <p>
          Unapredili smo komunikacije i kroz copywriting koji je pisan na
          maštovit, bajkovit način, nekadainspirisan anegdotama, a nekada
          gradskim legendama.
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

      <section className={styles.infoSection}>
        <div className={styles.scopeWrapper}>
          <h3>Scope</h3>
          <ul>
            <li>Content creation (video, photography)</li>
            <li>Copywriting</li>
            <li>Social Media Management</li>
            <li>Social Media Strategy</li>
            <li>PR</li>
            <li>Influencer marketing</li>
            <li>Advertising / Campaigns</li>
          </ul>
        </div>
        <div className={styles.statsWrapper}>
          <h3>Statistika</h3>
          <ul>
            <li>Pratioci</li>
          </ul>
          <span>11.2K</span>
          <ul>
            <li>Uloženi budžet</li>
          </ul>
          <span>
            400evra <span>(total)</span>
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
