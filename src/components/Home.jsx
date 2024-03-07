import React, { useState,useEffect } from 'react';
import moviesData from '../constants/Movies.js';
import ButtonSeach from './ButtonSeach.jsx';
import InputMovie from './InputMovie.jsx';
import './HomeStyles.css';


function Home() {

// Estados
  const[lives, setLives] = useState(3);
  const[points, setPoints] = useState(0);
  const[inputmovieUser, setInputmovieUser] = useState('');
  const [selectedmovie, setselectedmovie] = useState(moviesData[0]); 

  
  function random(arrLength) {
    let max = arrLength - 1;
    let min = 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Posicion aleatoria del array movies
const randomMovieIndex = random(moviesData.length);

  const handleChange = (e) => {
    setInputmovieUser(e.target.value);
    console.log("Esta recibiendo informacion del Usuario por input")
  };

 
  
  useEffect(() => {
    setselectedmovie(moviesData[randomMovieIndex]); // Actualizar selectedmovie cuando cambia moviesData
  }, []);

  useEffect(() => {
    if(points === 1){
        alert("YOU win bb")
    }
  }, [points]);


  useEffect(() => {
    if(lives === 0){
       alert("YOU LOSE!")  
    }
  }, [lives]);



  const handleClick = () => {
    selectedmovie.name.toLowerCase() === inputmovieUser.toLowerCase()
    ? setPoints((prePoints) => prePoints + 1)
    : setLives((preLives) => preLives - 1)
    setselectedmovie(moviesData[randomMovieIndex]) // cambia la pelicula
    setInputmovieUser('')


  }

  return (
    <div className="container-main">
      <div className="cajaTitulo">
        <h1 className="titulo">Guess the Movie!</h1>
      </div>
      <div>
        <p className="emojis">{selectedmovie.emoji}</p>
        <InputMovie value={inputmovieUser} onChange={handleChange} />
        <p className='lives'> VIDAS: {lives} </p>
        <p className='points'>POINTS:  {points}</p>
        <div>
          <ButtonSeach onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Home;