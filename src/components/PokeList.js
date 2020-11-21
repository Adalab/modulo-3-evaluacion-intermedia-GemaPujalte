import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const items = this.props.pokemons.map((card, index) => {
      return (
        <li key={card.id} id={index} className="card" title={card.name}>
          <Pokemon card={card} />
        </li>
      );
    });
    console.log(items);
    return (
      <div>
        <ul className="cards">{items}</ul>
      </div>
    );
  }
}

PokeList.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
};

export default PokeList;
