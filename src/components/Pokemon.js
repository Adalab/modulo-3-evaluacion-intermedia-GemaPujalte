import React from "react";

const Pokemon = (props) => {
  const items = props.card.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });

  return (
    <article>
      <img src={props.card.url} alt="" />
      <h2>{props.card.name}</h2>
      <ul>{items}</ul>
    </article>
  );
};

export default Pokemon;
