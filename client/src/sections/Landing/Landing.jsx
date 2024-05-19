import React from 'react';
import style from './Landing.module.css';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div className={style.main}>
        <div className={style.container}>
          <Link to='/home' >
            <button className={style.button}>START GAME</button>
          </Link>
        </div>
    </div>
  )
}

export default Landing