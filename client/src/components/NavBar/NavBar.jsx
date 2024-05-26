import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  return (
    <nav className={style.container}>
      <div>
        <Link className={style.link} to="/home">
          Home
        </Link>
        <Link className={style.link} to="/create-games">
          Create Game
        </Link>
        <Link className={style.link} to="/about-us">
          About us
        </Link>
      </div>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
