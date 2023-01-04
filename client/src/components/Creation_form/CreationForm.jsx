import React from 'react'

import './CreationForm'
import { useDispatch, useSelector } from "react-redux";



const CreationForm = () => {



  const genres = useSelector((state) => state.genres);

  const platforms = [
    "PC",
    "Linux",
    "Xbox One",
    "PlayStation 4",
    "PlayStation 5",
    "Wii U",
    "Nintendo Switch",
    "Mac OS",
    "iOS",
    "Nintendo 3DS",
    "Android",
    "Steam Deck",
  ];
  
  





  return (
    <form >
      <label>
        Nombre:
        <input type="text" name="name"  />
      </label>
      <br />
      <label>
        Descripción:
        <input type="text" name="description"  />
      </label>
      <br />
      <label>
        Imagen de fondo:
        <input type="text" name="background_image" />
      </label>
      <br />
      <label>
        Fecha de lanzamiento:
        <input type="date" name="released"  />
      </label>
      <br />
      <label>
        Puntuación:
        <input type="number" name="rating"  />
      </label>
      <br />
      <label>
        Fecha de creación en la base de datos:
        <input type="date" name="createdInDb"  />
      </label>
      <br />
      {genres? genres.map((g) => (
                <button
                  name="genres"
                  className={
                   genres[0] === g ||
                    genres[1] === g ||
                    genres[2] === g ||
                    genres[3] === g
                  }
                >{g.name}
                </button>
              )) : <h1>sin</h1> }

      <br />

      {platforms.map((p) => (
                <button
                  name="platforms"
                  className={
                   platforms[0] === p ||
                    platforms[1] === p ||
                    platforms[2] === p ||
                    platforms[3] === p
                  }
                >
                  {p}
                </button>
              ))}
      
      <br />
      <input type="submit" value="Crear juego" />
    </form>
  )
};

export default CreationForm

