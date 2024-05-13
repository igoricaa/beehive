'use client';

import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { routes, socials } from '@/data';
import CleanLogo from '@/public/logos/BeehiveCleanLogo';
import FullLogo from '@/public/logos/BeehiveCreativeAgencyLogo';
import BurgerIcon from './BurgerIcon';

export default function Header() {
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

    const isDesktopCurr = window.matchMedia('(min-width: 680px)').matches;
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
        <Link href='/' className={styles.logoWrapper}>
          {isDesktop ? <FullLogo /> : <CleanLogo />}
        </Link>
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
                  className={
                    pathname == route.path ||
                    (route.path !== '/' &&
                      pathname.slice(1).includes(route.path.slice(1)))
                      ? styles.active
                      : ''
                  }
                >
                  <Link href={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          )}
          {!isDesktop && (
            <>
              <BurgerIcon
                isSticky={false}
                active={menuOpen || bottomMenuOpen}
                burgerRef={burgerRef}
                onClickHandler={toggleMenu}
              />

              <div className={styles.mobileMenu} ref={menuRef}>
                <Link href='/' className={styles.logoWrapper}>
                  {isDesktop ? <FullLogo /> : <CleanLogo />}
                </Link>
                <ul>
                  {routes.map((route, index) => (
                    <li
                      key={index}
                      className={
                        pathname == route.path ||
                        (route.path !== '/' &&
                          pathname.slice(1).includes(route.path.slice(1)))
                          ? styles.active
                          : ''
                      }
                    >
                      <Link href={route.path} onClick={(toggleMenu)}>
                        {route.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className={styles.menuFooter}>
                  <div className={styles.socialsWrapper}>
                    <p>gde zujimo:</p>
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
                <Link href='/' className={styles.logoWrapper}>
                  <CleanLogo />
                </Link>
                <ul>
                  {routes.map((route, index) => (
                    <li
                      key={index}
                      className={
                        pathname == route.path ||
                        (route.path !== '/' &&
                          pathname.slice(1).includes(route.path.slice(1)))
                          ? styles.active
                          : ''
                      }
                    >
                      <Link href={route.path} onClick={toggleBottomMenu}>
                        {route.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className={styles.menuFooter}>
                  <div className={styles.socialsWrapper}>
                    <p>gde zujimo:</p>
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
      </header>

      {!isDesktop && (
        <div
          className={[
            styles.navbarMobileScrolled,
            headerTransformed && !isAtFooter ? styles.visible : '',
            menuOpen ? styles.active : '',
            bottomMenuOpen ? styles.activeBottom : '',
          ].join(' ')}
        >
          <Link href='/' className={styles.logoWrapper}>
            <CleanLogo />
          </Link>

          <BurgerIcon
            burgerRef={stickyBurgerRef}
            isSticky={true}
            active={menuOpen || bottomMenuOpen}
            onClickHandler={toggleBottomMenu}
          />
        </div>
      )}
    </>
  );
}
