import React from "react";
import PokeList from "./PokeList";
import Pokemons from "../data/pokemons.json";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <PokeList cardList={Pokemons} />
      </div>
    );
  }
}

export default App;
