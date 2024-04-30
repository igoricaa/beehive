import styles from './Footer.module.scss';
import { Link } from 'next-view-transitions';
import BackToTopButton from './BackToTopButton';
import { footerBottomLinks, socials } from '@/data';
import CleanLogo from '@/public/logos/BeehiveCleanLogo';
import { routes } from '@/data';
import MenuItems from './MenuItems';

export const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      {/* <BackToTopButton /> */}

      <div id='footerTop' className={styles.footerTop}>
        <div className={styles.logoSocialsWrapper}>
          <a href='/' className={styles.logoWrapper}>
            <CleanLogo theme='dark' />
          </a>
          <div className={styles.socialsWrapper}>
            <p>gde zujimo:</p>
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                className={styles.social}
                target='_blank'
              >
                <span>{social.text}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.menuWrapper}>
          <MenuItems />
        </div>
        {/* <div className={styles.contactFormWrapper}>
          <p>Kontaktiraj nas za sva pitanja:</p>
          <ContactForm />
        </div> */}
      </div>
      <div className={styles.footerBottom}>
        {footerBottomLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    </footer>
  );
};
