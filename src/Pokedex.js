import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css';



class Pokedex extends Component {

  render() {
    let tag;
    if (this.props.isWinner) {
      tag = <h1 className="Pokedex-winner">Winning Hand!</h1>
    } else{
      tag = <h1 className="Pokedex-loser">Losing Hand!</h1>
    }
    return(
      <div className="Pokedex">
        {tag}
        <h3>Total Experience: {this.props.exp}</h3>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
          <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;