import React from 'react';
import { useState } from 'react';
import style from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { getVideogameName } from '../../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.length) {
      alert('Please enter a videogame');
    } else {
      dispatch(getVideogameName(name));
      setName('');
    }
  }

  return (
    <form className={style.containerSearch}>
      <input
        className={style.search}
        placeholder="Enter the name of a videogame"
        type="search"
        value={name}
        onChange={e => handleInputChange(e)}
      />
      <button
        onClick={e => handleSubmit(e)}
        type="submit"
        className={style.button}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
