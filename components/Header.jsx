'use client';

import styles from './Header.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { routes, socials } from '@/data';
import CleanLogo from '@/public/logos/BeehiveCleanLogo';
import FullLogo from '@/public/logos/BeehiveCreativeAgencyLogo';
import BurgerIcon from './BurgerIcon';

export default function Header({ theme = 'dark' }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const stickyBurgerRef = useRef(null);
  const menuRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerTransformed, setHeaderTransformed] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target) &&
        !stickyBurgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    },
    [menuOpen, menuRef, burgerRef]
  );

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
    const scrolled = document.documentElement.scrollTop;
    // TODO: table/mobile
    const breakpoint = 67;
    if (scrolled > breakpoint) {
      setHeaderTransformed(true);
    } else if (scrolled <= breakpoint) {
      setHeaderTransformed(false);
    }
  };

  useEffect(() => {
    setMounted(true);

    console.log('PATH: ' + pathname);
    const isDesktopCurr = window.matchMedia('(min-width: 680px)').matches;
    if (typeof window !== 'undefined') setIsDesktop(isDesktopCurr);

    document.addEventListener('mousedown', handleClickOutside);

    if (!isDesktopCurr) {
      window.addEventListener('scroll', hideAtFooter);
      window.addEventListener('scroll', transformHeader);
    }

    return () => {
      if (!isDesktop) {
        window.removeEventListener('scroll', transformHeader);
        window.removeEventListener('scroll', hideAtFooter);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isDesktop]);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.classList.add('stopScrolling');
      document.documentElement.classList.add('stopScrolling');
    } else {
      document.body.classList.remove('stopScrolling');
      document.documentElement.classList.remove('stopScrolling');
    }
  };

  return (
    <>
      <header className={[styles.header, styles[theme]].join(' ')}>
        <Link href='/' className={styles.logoWrapper}>
          {isDesktop ? <FullLogo theme={theme} /> : <CleanLogo theme={theme} />}
        </Link>
        <nav
          className={[styles.navMenu, menuOpen ? styles.active : ''].join(' ')}
        >
          {isDesktop && (
            <ul>
              {routes.map((route, index) => (
                <li
                  key={index}
                  className={
                    (route.path === '/' && pathname === route.path) ||
                    (pathname !== '/' &&
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
                active={menuOpen}
                burgerRef={burgerRef}
                onClickHandler={toggleMenu}
              />

              <div className={styles.mobileMenu} ref={menuRef}>
                <Link href='/' className={styles.logoWrapper}>
                  {isDesktop ? (
                    <FullLogo theme={'dark'} />
                  ) : (
                    <CleanLogo theme={'dark'} />
                  )}
                </Link>
                <ul>
                  {routes.map((route, index) => (
                    <li
                      key={index}
                      className={pathname == route.path ? styles.active : ''}
                    >
                      <Link href={route.path} onClick={toggleMenu}>
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
                  {headerTransformed && (
                    <div
                      className={styles.closeMenuButton}
                      onClick={toggleMenu}
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
          ].join(' ')}
        >
          <Link href='/' className={styles.logoWrapper}>
            <CleanLogo theme='dark' />
          </Link>

          <BurgerIcon
            burgerRef={stickyBurgerRef}
            isSticky={true}
            active={menuOpen}
            onClickHandler={toggleMenu}
          />
        </div>
      )}
    </>
  );
}
