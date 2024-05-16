import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import style from './Detail.module.css';

const Detail = () => {
  return (
    <div className={style.main}>
      <nav>
          <NavBar />
      </nav>
      <main>
        
      </main>
      <Footer />
    </div>
  );
}

export default Detail