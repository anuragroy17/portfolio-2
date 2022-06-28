import React from 'react';
import styles from './Home.module.css';

import UilLinkedInAlt from '@iconscout/react-unicons/icons/uil-linkedin-alt';
import UilGithubAlt from '@iconscout/react-unicons/icons/uil-github-alt';
import UilYoutube from '@iconscout/react-unicons/icons/uil-youtube';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilMouseAlt from '@iconscout/react-unicons/icons/uil-mouse-alt';
import UilArrowDown from '@iconscout/react-unicons/icons/uil-arrow-down';

const social = [
  {
    name: 'Github',
    url: 'https://www.github.com/anuragroy17',
    icon: <UilGithubAlt />,
  },
  {
    name: 'Linked In',
    url: 'https://www.linkedin.com/in/anuragroy17/',
    icon: <UilLinkedInAlt />,
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/channel/UCc3VFLm-Laqf3_KYqzdOFTQ?',
    icon: <UilYoutube />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/anuragroy17',
    icon: <UilFacebook />,
  },
];

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className={`${styles.home__container} container grid`}>
        <div className={`${styles.home__content} grid`}>
          <div className={styles.home__social}>
            {social.map((item, index) => {
              return (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles['home__social-icon']}
                  key={index}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>

          <div className={styles.home__img}>
            <svg
              className={styles.home__blob}
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  fill="#FF0066"
                  d="M50.9,-57.5C66.9,-47.3,81.4,-32.1,80.6,-17.1C79.7,-2.2,63.4,12.5,52.8,30.2C42.2,47.8,37.3,68.3,24.6,76.9C12,85.6,-8.4,82.2,-24.9,73.8C-41.4,65.4,-54.1,52,-61.8,36.7C-69.4,21.3,-72,4.1,-68.6,-11.6C-65.3,-27.3,-55.9,-41.4,-43.5,-52.2C-31,-63,-15.5,-70.6,1,-71.7C17.5,-72.9,34.9,-67.7,50.9,-57.5Z"
                  transform="translate(100 100)"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M50.9,-57.5C66.9,-47.3,81.4,-32.1,80.6,-17.1C79.7,-2.2,63.4,12.5,52.8,30.2C42.2,47.8,37.3,68.3,24.6,76.9C12,85.6,-8.4,82.2,-24.9,73.8C-41.4,65.4,-54.1,52,-61.8,36.7C-69.4,21.3,-72,4.1,-68.6,-11.6C-65.3,-27.3,-55.9,-41.4,-43.5,-52.2C-31,-63,-15.5,-70.6,1,-71.7C17.5,-72.9,34.9,-67.7,50.9,-57.5Z"
                  transform="translate(100 100)"
                />
                <image
                  x="26"
                  y="30"
                  className={styles['home__blob-img']}
                  href="images/actor.png"
                />
              </g>
            </svg>
          </div>

          <div className={styles.home__data}>
            <h1 className={styles.home__title}>Hi, I am Anurag Roy</h1>
            <h3 className={styles.home__subtitle}>Full Stack Developer</h3>
            <p className={styles.home__description}>
              I am a tech enthusiast with an extensive interest in coding and
              building new useful applications. I have taught myself programming
              in Java after seeing its potential in different areas of Computer
              Programming. Other than learning new technologies and languages, I
              have also learnt to create secured Web Apps using Spring Boot and
              Angular. In the immediate future I want to get into the world of
              AI/ML and also into cloud computing. Apart from the technology
              world I am also a photographer who likes to capture the nature.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <UilMessage className="button__icon" />
            </a>
          </div>
        </div>

        <div className={styles.home__scroll}>
          <a
            href="#about"
            className={`${styles['home__scroll-button']} button--flex`}
          >
            <UilMouseAlt className={styles['home__scroll-mouse']} />
            <span className={styles['home__scroll-name']}>Scroll down</span>
            <UilArrowDown className={styles['home__scroll-arrow']} />
          </a>
        </div>
      </div>
    </section>
  );
};
