import React from "react";
import Card from "../Card/Card";
import style from './Cards.module.css';

const Cards = () => {
  return (
    <div className={style.container}>
      <div className={style.templA}><Card /></div>
      <div className={style.templC}><Card /></div>
      <div className={style.templD}><Card /></div>
      <div className={style.templE}><Card /></div>
      <div className={style.templB}><Card /></div>
      <div className={style.templF}><Card /></div>
    </div>
  );
};

export default Cards;
