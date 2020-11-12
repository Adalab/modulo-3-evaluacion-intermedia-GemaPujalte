import React from "react";

const Pokemon = (props) => {
  const items = props.card.pokemonCards.map((pokemonCard, index) => {
    return <li key={index}>{pokemonCard}</li>;
  });

  return (
    <article>
      <img>{props.card.url} alt=""</img>
      <h2>{props.card.name}</h2>
      <ul>{items}</ul>
    </article>
  );
};

export default Pokemon;
