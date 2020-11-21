import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import data from "../data/pokemons.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">Pokemon List</h1>
        </header>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
