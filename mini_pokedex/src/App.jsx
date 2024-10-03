import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'

function App() {

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

  return (
    <>
      <h1 id="title">
        Bits of Good Mid-Semester Project
      </h1>

      <div id="screen">
        <div id="left">
          <div id="img_box">
            <img id="pokepic"></img>
          </div>
          <div id="name_box">
            <h2 id="name"></h2>
          </div>
          <div><h4 id="types_text">Types:</h4></div>
          <div id="types">

          </div>
          <div>
            <button class="button" id="prev_btn" onClick={() => id}>&lt;</button>
            <button class="button" id="next_btn">&gt;</button>
          </div>
        </div>
        <div id="right">
          <h2 id="stats_label">Info</h2>
          <div id="poke_stats">

          </div>
          <div class="buttons">
            <button class="button" id="info_btn">Info</button>
            <button class="button" id="move_btn">Moves</button>
          </div>
        </div>
      </div>
    </>
  )
}
/*
  <button onClick={() => setCount((count) => count + 1)}>
  count is {count}
  </button>
*/
export default App
