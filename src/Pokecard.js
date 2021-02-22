import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let threeDigits = n => n <= 999 ? `00${n}`.slice(-3) : n;
class Pokecard extends Component {

  render() {
    let imgSrc = `${POKE_API}${threeDigits(this.props.id)}.png`;
    return(
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Experience: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;