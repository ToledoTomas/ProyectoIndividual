import React, { useState } from "react";
import style from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";

const Home = () => {

  const dispatch = useDispatch();
  const allVideogames = useSelector((state)=>state.allVideogames);
  const [filtered, setFiltered] = useState(allVideogames);
  const [searchString, setSearchString] = useState('');

  function handleChange(e){
    e.preventDefault()
    setSearchString(e.target.value)
  }

  function handleSubmit(){
    const filtered = allVideogames.filter((vg) => vg.name.includes(searchString));
    setFiltered(filtered)
  }

  useEffect(()=>{
    dispatch(getVideogames())
  },[dispatch]);

  return (
    <div className={style.main}>
      <nav>
          <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      </nav>
      <main>
        <Cards allVideogames = {filtered}/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
