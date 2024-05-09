import styles from './Footer.module.scss';
import { Link } from 'next-view-transitions';
import { footerBottomLinks, socials } from '@/data';
import CleanLogo from '@/public/logos/BeehiveCleanLogo';
import MenuItems from './MenuItems';

export const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <div id='footerTop' className={styles.footerTop}>
        <div className={styles.innerWrapper}>
          <a href='/' className={styles.logoWrapper}>
            <CleanLogo />
          </a>
          <div className={styles.socialsWrapper}>
            <p>gde zujimo:</p>
            <div>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={styles.social}
                  target='_blank'
                >
                  <span>{social.text}</span>
                </a>
              ))}
            </div>
          </div>
          <MenuItems />
        </div>
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
