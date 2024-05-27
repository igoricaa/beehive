import styles from './Footer.module.scss';
import Link from '@/components/Link';
import { socials } from '@/data';
import MenuItems from './MenuItems';
import Image from 'next/image';
import beehiveCleanLogo from '@/public/logos/BeehiveCleanLogo.svg';

const Footer = ({ routes, message }) => {
  return (
    <footer id='footer' className={styles.footer}>
      <div id='footerTop' className={styles.footerTop}>
        <div className={styles.innerWrapper}>
          <Link
            href='/'
            className={styles.logoWrapper}
            aria-label='Beehive Agency Logo'
          >
            <Image src={beehiveCleanLogo} priority alt='Beehive Agency Logo' />
          </Link>
          <div className={styles.socialsWrapper}>
            <p>{message}</p>
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
          <MenuItems routes={routes} />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>c 2024 beehiveagency</p>
      </div>
    </footer>
  );
};

export default Footer;
