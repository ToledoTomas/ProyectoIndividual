import React from "react";
import style from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, getPlatforms } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";

const Home = () => {

  // const dispatch = useDispatch();
  // const allVideogames = useSelector((state)=>state.videogames);

  // useEffect(()=>{
  //   dispatch(getGenres());
  //   dispatch(getPlatforms());
  // },[dispatch])

  // function handleClick(e){
  //   e.preventDefault();
  //   dispatch(getVideogames());
  // }

  return (
    <div className={style.main}>
      <nav>
          <NavBar  />
      </nav>
      <main>
        <Cards />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
