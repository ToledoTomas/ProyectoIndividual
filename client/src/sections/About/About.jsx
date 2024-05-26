import React from 'react';
import style from './About.module.css';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={style.container}>
      <Link to="/home">
        <button className={style.button}>Home</button>
      </Link>
      <main className={style.main}>
        <h2 className={style.title}>Our path to success</h2>
        <hr className={style.line} />
        <div>
          <h5 className={style.description}>
            Embark on an epic journey, where each step is a level completed and
            each challenge is a battle won. Just like in your favorite video
            games, our journey is filled with quests, final bosses, and
            power-ups that propel us forward. We meet allies along the way,
            overcome impossible obstacles, and uncover hidden secrets that take
            us to new heights. Every unlocked achievement and every goal reached
            bring us closer to the top, as our team becomes a legend of success.
            Join us in this adventure and be part of a story where effort and
            passion lead us to the final victory. The game is just beginning,
            and success is only a screen away!
          </h5>
        </div>
      </main>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default About;
