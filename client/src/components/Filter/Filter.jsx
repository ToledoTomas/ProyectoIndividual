import React from 'react';
import style from './Filter.module.css';
import { useSelector } from 'react-redux';

const Filter = ({
  handleSort,
  handleFilterGenre,
  handleFilterCreated,
  handleRating,
}) => {
  const allGenre = useSelector(state => state.genres);

  return (
    <div>
      <select onChange={e => handleSort(e)}>
        <option>Order</option>
        <option value="Asc">A-Z</option>
        <option value="Desc">Z-A</option>
      </select>
      <select onChange={e => handleRating(e)}>
        <option>Rating</option>
        <option value="Top">Top rating</option>
        <option value="Low">Low rating</option>
      </select>
      <select onChange={e => handleFilterCreated(e)}>
        <option>Games</option>
        <option value="All">All</option>
        <option value="Created">Created</option>
        <option value="Api">Existent</option>
      </select>
      <select onChange={e => handleFilterGenre(e)}>
        <option>Genres</option>
        <option value="All">All</option>
        {allGenre.map(genre => (
          <option key={genre.name} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
