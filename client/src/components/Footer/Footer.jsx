import React from 'react';
import style from './Footer.module.css';
import logoInstagram from './instagram.svg';
import logoX from './twitter-x-fill.svg';
import logoGithub from './github.svg';
import logoLinkedin from './linkedin.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <article className={style.container}>
      <div>
        <a
          className={style.link}
          href="https://www.instagram.com/tomas.toledo89/"
          target="blank"
        >
          <img
            className={style.logo}
            src={logoInstagram}
            alt="Instagram logo"
          />
          <span className={style.span}>Follow me on Instagram</span>
        </a>
      </div>
      <div>
        <a className={style.link} href="https://x.com/CarcTomii" target="blank">
          <img className={style.logo} src={logoX} alt="X logo" />
          <span className={style.span}>Follow me on X</span>
        </a>
      </div>
      <div>
        <a
          className={style.link}
          href="https://github.com/ToledoTomas/"
          target="blank"
        >
          <img className={style.logo} src={logoGithub} alt="Github logo" />
          <span className={style.span}>Follow me on GitHub</span>
        </a>
      </div>
      <div>
        <a
          className={style.link}
          href="https://www.linkedin.com/in/tom%C3%A1s-toledo-8113a41b9/"
          target="blank"
        >
          <img className={style.logo} src={logoLinkedin} alt="Linkedin logo" />
          <span className={style.span}>Follow me on Linkedin</span>
        </a>
      </div>
    </article>
  );
};

export default Footer;
