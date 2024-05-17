import React from 'react';
import pizza from './pexels-renestrgar-19602378.jpg';
import style from './Card.module.css';

const Card = () => {

  return (
    <div className={style.container}>
        <img className={style.image} src={pizza} alt="imagen de pizza" />
    </div>
  )
}

export default Card