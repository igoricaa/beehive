'use client';

import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import Link from '@/components/Link';
import { usePathname } from '../navigation';
import { socials } from '@/data';
import BurgerIcon from './BurgerIcon';
import LocaleSwitcher from './LocaleSwitcher';
import Image from 'next/image';
import beehiveCreativeAgencyLogo from '@/public/logos/BeehiveCreativeAgencyLogo.svg';
import beehiveCleanLogo from '@/public/logos/BeehiveCleanLogo.svg';

export default function Header({ routes, messages }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bottomMenuOpen, setBottomMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const stickyBurgerRef = useRef(null);
  const menuRef = useRef(null);
  const bottomMenuRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerTransformed, setHeaderTransformed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [position, setPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtFooter, setIsAtFooter] = useState(false);

  const hideAtFooter = () => {
    const floatingBorderElement = document.getElementById('footerTop');

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAtFooter(true);
        } else {
          setIsAtFooter(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(floatingBorderElement);
  };

  const transformHeader = () => {
    if (typeof window === 'undefined') return;
    const scrolled = window.scrollY;
    // TODO: tablet/mobile
    const breakpoint = 67;
    if (scrolled > breakpoint) {
      setHeaderTransformed(true);
    } else if (scrolled <= breakpoint) {
      setHeaderTransformed(false);
    }
  };

  const handleStickyHeader = () => {
    if (typeof window === 'undefined') return;

    const currentPosition = window.scrollY;
    setPosition(currentPosition);

    if (currentPosition < 100) {
      setIsAtTop(true);
      setIsHidden(false);
    } else {
      setIsAtTop(false);
      setIsHidden(true);
    }
  };

  const handleScrollEnd = () => {
    if (typeof window === 'undefined') return;

    const currentPosition = window.scrollY;
    if (currentPosition < 100) {
      setIsAtTop(true);
    }

    setIsHidden(false);
  };

  useEffect(() => {
    setMounted(true);

    if (typeof window === 'undefined') {
      return;
    }

    const isDesktopCurr = window.matchMedia('(min-width: 768px)').matches;
    setIsDesktop(isDesktopCurr);

    if (isDesktopCurr) {
      window.addEventListener('scroll', handleStickyHeader);
      window.addEventListener('scrollend', handleScrollEnd);
    }

    if (!isDesktopCurr) {
      window.addEventListener('scroll', hideAtFooter);
      window.addEventListener('scroll', transformHeader);
    }

    return () => {
      if (!isDesktop) {
        window.removeEventListener('scroll', transformHeader);
        window.removeEventListener('scroll', hideAtFooter);
      }

      if (isDesktop) {
        window.removeEventListener('scroll', handleStickyHeader);
        window.removeEventListener('scrollend', handleScrollEnd);
      }
    };
  }, [, isDesktop, position]);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.classList.toggle('noscroll');
    } else {
      document.body.classList.toggle('noscroll');
    }
  };

  const toggleBottomMenu = () => {
    setBottomMenuOpen(!bottomMenuOpen);

    if (!bottomMenuOpen) {
      document.body.classList.toggle('noscroll');
    } else {
      document.body.classList.toggle('noscroll');
    }
  };

  return (
    <>
      <header
        className={[
          styles.header,
          !isAtTop ? styles.sticky : '',
          isHidden ? styles.hidden : '',
        ].join(' ')}
      >
        <Link href='/' className={[styles.logoWrapper, 'hoverable'].join(' ')}>
          <picture>
            <source srcSet={beehiveCleanLogo.src} media='(max-width: 1024px)' />
            <Image
              src={beehiveCreativeAgencyLogo}
              priority
              alt='Beehive Agency Logo'
            />
          </picture>
        </Link>
        <div className={styles.helperWrapper}>
          {!isDesktop && <LocaleSwitcher messages={messages.locales} />}
          <nav
            className={[
              styles.navMenu,
              menuOpen ? styles.active : '',
              bottomMenuOpen ? styles.activeBottom : '',
            ].join(' ')}
          >
            {isDesktop && (
              <ul>
                {routes.map((route, index) => (
                  <li
                    key={index}
                    className={[
                      'hoverable',
                      pathname == route.href ||
                      (route.href !== '/' &&
                        pathname.slice(1).includes(route.href.slice(1)))
                        ? styles.active
                        : '',
                    ].join(' ')}
                  >
                    <Link href={route.href}>{route.label}</Link>
                  </li>
                ))}
                <li>
                  <LocaleSwitcher messages={messages.locales} />
                </li>
              </ul>
            )}
            {!isDesktop && (
              <>
                <BurgerIcon
                  isSticky={false}
                  active={menuOpen || bottomMenuOpen}
                  burgerRef={burgerRef}
                  onClickHandler={toggleMenu}
                  stroke='#fff'
                  backgroundColor='#1f1f1f'
                />

                <div className={styles.mobileMenu} ref={menuRef}>
                  <div>
                    <Link href='/' className={styles.logoWrapper}>
                      <picture>
                        <source
                          srcSet={beehiveCleanLogo.src}
                          media='(max-width: 1024px)'
                        />
                        <Image
                          src={beehiveCreativeAgencyLogo}
                          priority
                          alt='Beehive Agency Logo'
                        />
                      </picture>
                    </Link>
                    <ul>
                      {routes.map((route, index) => (
                        <li
                          key={index}
                          className={[
                            'hoverable',
                            pathname == route.href ||
                            (route.href !== '/' &&
                              pathname.slice(1).includes(route.href.slice(1)))
                              ? styles.active
                              : '',
                          ].join(' ')}
                        >
                          <Link href={route.href} onClick={toggleMenu}>
                            {route.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.menuFooter}>
                    <div className={styles.langSwitcherWrapper}>
                      <p>{messages.lang}</p>
                      <LocaleSwitcher messages={messages.locales} />
                    </div>
                    <div className={styles.socialsWrapper}>
                      <p>{messages.socialsTitle}</p>
                      <div className={styles.socials}>
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
                  </div>
                </div>

                <div
                  className={[styles.bottomMobileMenu, styles.mobileMenu].join(
                    ' '
                  )}
                  ref={bottomMenuRef}
                >
                  <div>
                    <Link href='/' className={styles.logoWrapper}>
                      <Image
                        src={beehiveCleanLogo}
                        style={{ width: 'auto' }}
                        priority
                        alt='Beehive Agency Logo'
                      />
                    </Link>
                    <ul>
                      {routes.map((route, index) => (
                        <li
                          key={index}
                          className={[
                            'hoverable',
                            pathname == route.href ||
                            (route.href !== '/' &&
                              pathname.slice(1).includes(route.href.slice(1)))
                              ? styles.active
                              : '',
                          ].join(' ')}
                        >
                          <Link href={route.href} onClick={toggleBottomMenu}>
                            {route.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.menuFooter}>
                    <div>
                      <div className={styles.langSwitcherWrapper}>
                        <p>{messages.lang}</p>
                        <LocaleSwitcher messages={messages.locales} />
                      </div>
                      <div className={styles.socialsWrapper}>
                        <p>{messages.socialsTitle}</p>
                        <div className={styles.socials}>
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
                    </div>
                    {headerTransformed && (
                      <div
                        className={styles.closeMenuButton}
                        onClick={toggleBottomMenu}
                      >
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </nav>
        </div>
      </header>

      {!isDesktop && (
        <div
          className={[
            styles.navbarMobileScrolled,
            headerTransformed && !isAtFooter ? styles.visible : '',
            menuOpen ? styles.active : '',
            bottomMenuOpen ? styles.activeBottom : '',
          ].join(' ')}
          onClick={toggleBottomMenu}
        >
          <div className={styles.logoWrapper}>
            <Image src={beehiveCleanLogo} priority alt='Beehive Agency Logo' />
          </div>

          <BurgerIcon
            burgerRef={stickyBurgerRef}
            isSticky={true}
            active={menuOpen || bottomMenuOpen}
            stroke='#000'
            backgroundColor='#fff'
          />
        </div>
      )}
    </>
  );
}
