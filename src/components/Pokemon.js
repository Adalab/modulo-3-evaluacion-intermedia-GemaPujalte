import React from "react";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const items = props.card.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });

  return (
    <article>
      <img src={props.card.url} alt={props.card.name} />
      <h2>{props.card.name}</h2>
      <ul>{items}</ul>
    </article>
  );
};

Pokemon.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.array,
};

export default Pokemon;
