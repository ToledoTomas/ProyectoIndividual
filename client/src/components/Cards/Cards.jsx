import React from "react";
import Card from "../Card/Card";

const Cards = ({ allVideogames }) => {
  const videogamesList = allVideogames;

  return (
    <div>
      {videogamesList.map((vg) => (
        <Card vg={vg} />
      ))}
    </div>
  );
};

export default Cards;
