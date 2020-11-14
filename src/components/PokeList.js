import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    console.log(this.props.cardList);
    const items = this.props.cardList.map((card, index) => {
      return (
        <li key={card.id} id={index} className="card" title={card.name}>
          <Pokemon card={card} />
        </li>
      );
    });

    return (
      <div>
        <ul className="cards">{items}</ul>
      </div>
    );
  }
}

export default PokeList;
