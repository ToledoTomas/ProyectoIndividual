import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ name, image, genres, id, rating }) => {
  let genre = genres.map(e => e.name);

  return (
    <div className={style.container}>
      <li className={style.list}>
        <Link to={'/videogame/' + id}>
          <img className={style.image} src={image} alt={`${name} Image`} />
        </Link>
        <main className={style.info}>
          <div>
            <h3 className={style.title}>{name}</h3>
          </div>
          <section className={style.genre}>
            <div className={style.divInfo}>Genre: </div>
            <div>
              <h5 className={style.titleInfo}>{genre.join('-')}</h5>
            </div>
          </section>
          <section className={style.rating}>
            <div className={style.divInfo}>Rating: </div>
            <div>
              <h5 className={style.titleInfo}>{rating}</h5>
            </div>
          </section>
        </main>
      </li>
    </div>
  );
};

export default Card;
