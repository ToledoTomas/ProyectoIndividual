import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({handleChange, handleSubmit}) => {
  return (
    <nav className={style.container}>
      <div>
        <Link className={style.link} to="/home">
          Home
        </Link>
        <Link className={style.link} to="/games">
          Games
        </Link>
        <Link className={style.link} to="/create-games">
          Create Game
        </Link>
      </div>
      <SearchBar handleChange={handleChange}/>
    </nav>
  );
};

export default NavBar;
