'use client';

import styles from './Header.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  const burgerRef = useRef(null);
  const stickyBurgerRef = useRef(null);
  const menuRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerTransformed, setHeaderTransformed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [position, setPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
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

  const handleStickyHeader = () => {
    if (typeof window === 'undefined') return;

    const currentPosition = window.scrollY;

    setPosition(currentPosition);

    if (currentPosition < 100) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }

    setIsHidden(true);
  };

  useEffect(() => {
    setMounted(true);

    if (typeof window === 'undefined') {
      return;
    }

    const isDesktopCurr = window.matchMedia('(min-width: 680px)').matches;
    setIsDesktop(isDesktopCurr);

    document.addEventListener('mousedown', handleClickOutside);

    if (isDesktopCurr) {
      window.addEventListener('scroll', handleStickyHeader);
      window.addEventListener('scrollend', () => setIsHidden(false));
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
        window.removeEventListener('scrollend', setIsHidden);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isDesktop, position]);

  if (!mounted) {
    return null;
  }

  const toggleMenu = (isFromSticky) => {
    if (isFromSticky) {
      if (menuRef.current.classList.contains(styles.isFromSticky)) {
        menuRef.current.classList.remove(styles.isFromSticky);
      } else {
        menuRef.current.classList.add(styles.isFromSticky);
      }
    } else {
      // setTimeout(() => {
      //   menuRef.current.classList.remove(styles.isFromSticky);
      // }, 1000);
    }

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
          className={[styles.navMenu, menuOpen ? styles.active : ''].join(' ')}
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
                active={menuOpen}
                burgerRef={burgerRef}
                onClickHandler={() => toggleMenu(false)}
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
                      <Link href={route.path} onClick={() => toggleMenu(false)}>
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
                      onClick={() => toggleMenu(true)}
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
            <CleanLogo />
          </Link>

          <BurgerIcon
            burgerRef={stickyBurgerRef}
            isSticky={true}
            active={menuOpen}
            onClickHandler={() => toggleMenu(true)}
          />
        </div>
      )}
    </>
  );
}
