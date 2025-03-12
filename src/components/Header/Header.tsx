'use client';
import Link from 'next/link';

import classes from './Header.module.css';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import Container from '../templates/Container';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (logoRef.current && e.currentTarget === logoRef.current && !menuOpen)
      return;

    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 550) {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.navWrapper}>
          <nav style={{ width: '100%' }}>
            <ul id="menuNav" className={classes.nav}>
              <li>
                <Link
                  ref={logoRef}
                  onClick={handleClick}
                  className={classes.logo}
                  href={'/#home'}>
                  JY
                </Link>
              </li>
              <li>
                <ul
                  className={
                    menuOpen ? classes.centerWrapperOpen : classes.centerWrapper
                  }>
                  <li>
                    <Link
                      onClick={handleClick}
                      className={classes.navLink}
                      href={'/#projects'}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClick}
                      className={classes.navLink}
                      href={'/#about-me'}>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClick}
                      className={classes.navLink}
                      href={'/#contact-me'}>
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <button
            onClick={handleClick}
            className={classes.mobileNavToggle}
            aria-controls="menuNav"
            aria-expanded={menuOpen}>
            <span className={classes.srOnly}>Menu</span>
            {!menuOpen ? (
              <IconMenu2 width={'2rem'} height={'2rem'} />
            ) : (
              <IconX width={'2rem'} height={'2rem'} />
            )}
          </button>
        </div>
      </Container>
    </header>
  );
};
