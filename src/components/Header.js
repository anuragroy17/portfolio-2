import React, { useState } from 'react';
import styles from './Header.module.css';

import UilEstate from '@iconscout/react-unicons/icons/uil-estate';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilBriefcaseAlt from '@iconscout/react-unicons/icons/uil-briefcase-alt';
import UilScenery from '@iconscout/react-unicons/icons/uil-scenery';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';

const menu = [
  {
    link: '#home',
    icon: <UilEstate className={styles.nav__icon} />,
    name: 'Home',
  },
  {
    link: '#about',
    icon: <UilUser className={styles.nav__icon} />,
    name: 'About',
  },
  {
    link: '#skills',
    icon: <UilFileAlt className={styles.nav__icon} />,
    name: 'Skills',
  },
  {
    link: '#services',
    icon: <UilBriefcaseAlt className={styles.nav__icon} />,
    name: 'Services',
  },
  {
    link: '#portfolio',
    icon: <UilScenery className={styles.nav__icon} />,
    name: 'Portfolio',
  },
  {
    link: '#contact',
    icon: <UilMessage className={styles.nav__icon} />,
    name: 'Contact',
  },
];

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenuOnItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className="header" id="header">
        <nav className={`${styles.nav} container`}>
          <a href="#home" className={styles.nav__logo}>
            Anurag
          </a>
          <div
            className={
              isMenuOpen
                ? `${styles.nav__menu} ${styles['show-menu']}`
                : styles.nav__menu
            }
            id="nav-menu"
          >
            <ul className={`${styles.nav__list} grid`}>
              {menu.map((item, index) => {
                return (
                  <li className={styles.nav__item} key={index}>
                    <a
                      href={item.link}
                      className={styles.nav__link}
                      onClick={closeMenuOnItemClick}
                    >
                      {item.icon} {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <UilTimes
              className={styles.nav__close}
              id="nav-close"
              onClick={handleClick}
            />
          </div>

          <div className={styles.nav__btns}>
            <div
              className={styles.nav__toggle}
              id="nav-toggle"
              onClick={handleClick}
            >
              <UilApps />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
