import React from 'react';
import Footer from '../../components/Footer/Footer';
import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../../redux/actions';
import { Link } from 'react-router-dom';
import notImage from './parental-advisory.jpg';

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id, dispatch]);

  const detail = useSelector(state => state.detail);

  const removeHtmlTags = html => {
    const temporalDivElement = document.createElement('div');
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || '';
  };

  return (
    <div className={style.main}>
      <Link to="/home">
        <button className={style.button}>Home</button>
      </Link>
      <main>
        <div>
          <div>
            <div>
              <h1 className={style.title}>{detail.name}</h1>
              <img
                className={style.image}
                src={detail.image.includes('http') ? detail.image : notImage}
                alt={`${detail.name} Image`}
              />
              <p className={style.info}>
                <span className={style.span}>Released: </span> {detail.released}
              </p>
              <p className={style.info}>
                <span className={style.span}>Platforms: </span>

                {detail.id?.length > 7
                  ? detail.platforms?.map(p => p.name).join(' - ')
                  : detail.platforms?.map(p => p.platform.name).join(' - ')}
              </p>
              <p className={style.info}>
                <span className={style.span}>Genres: </span>
                {detail.genres?.map(g => g.name).join('-')}
              </p>
              <p className={style.info}>
                <span className={style.span}>Rating: </span>
                {detail.rating}
              </p>
              <p className={style.description}>
                <span className={style.span}>Description: </span>
                {removeHtmlTags(detail.description) ||
                  removeHtmlTags(detail.description_raw)}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Detail;
