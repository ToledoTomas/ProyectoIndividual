import React from 'react'
import style from './SearchBar.module.css'

const SearchBar = ({handleChange, handleSubmit}) => {
  return (
    <form onChange={handleChange}  className={style.containerSearch}>
        <input className={style.search} placeholder='Enter the name of a game' type="search" />
        <button onClick={handleSubmit} type='submit' className={style.button}>Search</button>
    </form>
  )
}

export default SearchBar