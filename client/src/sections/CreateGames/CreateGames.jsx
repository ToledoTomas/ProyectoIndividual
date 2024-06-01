import React, { useState, useEffect } from 'react';
import { postVideogame, getGenres } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import style from './CreateGames.module.css';
import { Link } from 'react-router-dom';
function validate(input) {
  let errors = {};
  if (!input.name.trim()) {
    errors.name = 'Write a name, please';
  }
  if (!input.description.trim()) {
    errors.description = 'Write a description, please';
  }
  if (!input.platforms.length) {
    errors.platforms = 'Select a platform, please';
  }
  return errors;
}

export default function CreateGames() {
  const dispatch = useDispatch();
  const genre = useSelector(state => state.genres);
  const platform = useSelector(state => state.platforms);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    image: '',
    description: '',
    released: '',
    rating: '',
    genres: [],
    platforms: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      }),
    );
  }

  function handleSelectGenre(e) {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  }

  function handleSelectPlatform(e) {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      }),
    );

    if (Object.keys(errors).length === 0) {
      dispatch(postVideogame(input));
      alert('Videogame created 👌');
      setInput({
        name: '',
        image: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
      });
    } else {
      alert('ERROR: videogame not created 😕');
      return;
    }
  }

  function handleDeletePlatform(e) {
    setInput({
      ...input,
      platforms: input.platforms.filter(p => p !== e),
    });
  }

  function handleDeleteGenre(e) {
    setInput({
      ...input,
      genres: input.genres.filter(g => g !== e),
    });
  }

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <div className={style.container}>
        <Link to="/home">
          <button className={style.button}>Home</button>
        </Link>
        <h1 className={style.title}>
          ¡Here you can create your own videogame!
        </h1>
        <form className={style.form} onSubmit={e => handleSubmit(e)}>
          <div className={style.separated}>
            <label className={style.important}>Videogame Name: </label>
            <input
              className={style.inputImportant}
              type="text"
              value={input.name}
              name="name"
              onChange={e => handleChange(e)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className={style.separated}>
            <label className={style.important}>Image: </label>
            <input
              className={style.inputImportant}
              type="img"
              value={input.image}
              name="image"
              alt="not found"
              onChange={e => handleChange(e)}
            />
          </div>
          <div className={style.separated}>
            <label className={style.important}>Description: </label>
            <input
              className={style.inputImportant}
              type="text"
              value={input.description}
              name="description"
              onChange={e => handleChange(e)}
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>
          <div className={style.separatedv2}>
            <label className={style.secondary}> Released </label>
            <input
              className={style.input}
              type="date"
              value={input.released}
              name="released"
              onChange={e => handleChange(e)}
            />
            <label className={style.secondary}>Rating </label>
            <input
              className={style.input}
              placeholder="0 to 5"
              type="number"
              value={input.rating}
              min={0}
              max={5}
              name="rating"
              onChange={e => handleChange(e)}
            />
          </div>
          <div className={style.separatedv2}>
            <div>
              <label className={style.secondary}>Genres </label>
              <select
                onChange={e => handleSelectGenre(e)}
              >
                {genre.map(g => (
                  <option key={g.name} value={g.name}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={style.secondary}>Platforms </label>
              <select
                onChange={e => handleSelectPlatform(e)}
              >
                {platform.map(p => (
                  <option key={p.name} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button className={style.buttonCreate} type="submit">
              CREATE
            </button>
          </div>
        </form>
        {/* {input.genres.map(g => (
          <div>
            <label>{g}</label>
            <button
              onClick={() => handleDeleteGenre(g)}
            >
              X
            </button>
          </div>
        ))}
        {input.platforms.map(p => (
          <div>
            <label>{p}</label>
            <button
              onClick={() => handleDeletePlatform(p)}
            >
              X
            </button>
          </div>
        ))} */}
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
}
