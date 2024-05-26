import React from 'react';
import style from './Paginado.module.css';

export default function Paginado({
  videogamesPerPage,
  allVideogames,
  paginado,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={style.container}>
      {pageNumbers &&
        pageNumbers.map(number => (
          <a className={style.number} key={number} href onClick={() => paginado(number)}>
            {number}
          </a>
        ))}
    </div>
  );
}
