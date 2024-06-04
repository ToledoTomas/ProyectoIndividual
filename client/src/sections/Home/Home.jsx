import React from 'react';
import style from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Filter from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getVideogames,
  getGenres,
  getPlatforms,
  filterCreated,
  filterVideogamesByGenre,
  orderByName,
  orderByRating,
} from '../../redux/actions';
import Card from '../../components/Card/Card';
import Paginado from '../../components/Paginado/Paginado';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector(state => state.videogames);

  const [currentPage, setCurrentPage] = useState(1);

  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const [order, setOrder] = useState('');

  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame,
  );

  const paginado = pageNumber => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  function handleRefresh(e){
    e.preventDefault();
    dispatch(getVideogames());
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleFilterGenre(e) {
    e.preventDefault();
    dispatch(filterVideogamesByGenre(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  if (!allVideogames.length) {
    return <Loading />;
  }

  return (
    <div className={style.main}>
      <nav>
        <NavBar handleRefresh={handleRefresh}/>
      </nav>
      <section>
        <Filter
          handleSort={handleSort}
          handleFilterGenre={handleFilterGenre}
          handleFilterCreated={handleFilterCreated}
          handleRating={handleRating}
        />
      </section>
      <main className={style.main}>
        <ul className={style.unlist}>
          {currentVideogames?.map(g => {
            return (
              <Card
                id={g.id}
                name={g.name}
                image={g.image}
                genres={g.genres}
                key={g.id}
                rating={g.rating}
                platforms={g.platforms}
              />
            );
          })}
        </ul>
      </main>
      <div>
        <Paginado
          videogamesPerPage={videogamesPerPage}
          allVideogames={allVideogames.length}
          paginado={paginado}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
