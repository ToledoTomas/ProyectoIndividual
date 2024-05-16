import React from 'react';
import style from './Landing.module.css';

const Landing = () => {
  return (
    <div className={style.main}>
        <div className={style.container}>
            <button className={style.button}>START GAME</button>
        </div>
    </div>
  )
}

export default Landing