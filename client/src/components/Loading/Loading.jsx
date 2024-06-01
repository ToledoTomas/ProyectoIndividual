import React from 'react';
import style from './Loading.module.css';

const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.loader}>
        <h3 className={style.loading}>LOADING..</h3>
      </div>
    </div>
  );
};

export default Loading;
