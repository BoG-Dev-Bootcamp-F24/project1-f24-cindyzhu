import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [id, setId] = useState(1)
  const [statsText, setStatsText] = useState("Info")
  const [pokeData, setPokeData] = useState(null)

  const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
  }

  const changeInfo = (text) => {
    setStatsText(text);
  };

  const incrementID = () => {
    setId((id) => id + 1);
  }

  const decrementID = () => {
    setId((id) => id > 1 ? id - 1 : 1);
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => setPokeData(data));
  }), [id];

  return (
    <>
      <h1 id="title">
        Bits of Good Mid-Semester Project
      </h1>
      {pokeData && (
        <div id="screen">
          <div id="left">
            <div id="img_box">
              <img id="poke_pic" src={pokeData.sprites.front_default} alt={pokeData.name}></img>
            </div>
            <div id="name_box">
              <h2 id="name">{pokeData.name}</h2>
            </div>
            <div><h4 id="types_text">Types:</h4></div>
            <div id="types">

            </div>
            <div>
              <button className="button" id="prev_btn" onClick={decrementID}>&lt;</button>
              <button className="button" id="next_btn" onClick={incrementID}>&gt;</button>
            </div>
          </div>
          <div id="right">
            <h2 id="stats_label">{statsText}</h2>
            <div id="poke_stats">

            </div>
            <div className="buttons">
              <button className={statsText === 'Info' ? 'isOn' : 'button'} id="info_btn" onClick = {() => changeInfo("Info")}>
                Info
              </button>
              <button className={statsText === 'Moves' ? 'isOn' : 'button'} id="move_btn" onClick = {() => changeInfo("Moves")}>
                Moves
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
