import React from "react";
import style from './Footer.module.css'
import logoInstagram from "./instagram.svg";
import logoX from "./twitter-x-fill.svg";
import logoGithub from "./github.svg";
import logoLinkedin from "./linkedin.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <article className={style.container}>
      <div>
        <Link className={style.link} to="/">
          <img className={style.logo} src={logoInstagram} alt="Instagram logo" />
          <span className={style.span}>Sigueme en Instagram</span>  
        </Link>
      </div>
      <div>
        <Link className={style.link} to="/">
          <img className={style.logo} src={logoX} alt="X logo" />
          <span className={style.span}>Sigueme en X</span>  
        </Link>
      </div>
      <div>
        <Link className={style.link} to="/">
          <img className={style.logo} src={logoGithub} alt="Github logo" />
          <span className={style.span}>Sigueme en GitHub</span>  
        </Link>    
      </div>
      <div>
        <Link className={style.link} to="/">
          <img className={style.logo} src={logoLinkedin} alt="Linkedin logo" />
          <span className={style.span}>Sigueme en Linkedin</span>  
        </Link>
      </div>
    </article>
  );
};

export default Footer;
