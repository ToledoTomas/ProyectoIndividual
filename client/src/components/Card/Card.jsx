import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ name, image, genres, id, rating }) => {
  let genre = genre.map(e => e.name);

  return (
    <div className={style.container}>
      <li>
        <Link to={'/videogame/' + id}>
          <img src={image} alt={`${name} Image`} />
        </Link>
        <div>
          <h3>{name}</h3>
        </div>
        <div>Genre:</div>
        <div>
          <h5>{genre.join('-')}</h5>
        </div>
        <div>Rating:</div>
        <div>{rating}</div>
      </li>
    </div>
  );
};

export default Card;
