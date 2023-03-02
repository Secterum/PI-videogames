import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../redux/actions";
import "./GameCard.css";
import Pagination from "../Paginado/Pagination";


const CardGame = () => {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.videogames);
  const currentPage = useSelector((state) => state.currentPage);
  const gamesPerPage = useSelector((state) => state.gamesPerPage);



  useEffect(() => {
    dispatch(action.changePage(1));}, []);

  const lengthValidator = (array, index, c) => {
      if (array.length == index+1) {
        return <p key={index}>{c}</p>;
      }
      else {
        return <p key={index}>{c},</p>;
      }
  }


  

  const totalPage = Math.ceil(games.length / gamesPerPage);
  
  // Calcula el índice del primer juego a mostrar en la página actual
  const firstGameIndex = (currentPage - 1) * gamesPerPage;
  // Calcula el índice del último juego a mostrar en la página actual
  const lastGameIndex = firstGameIndex + gamesPerPage;
  // Obtiene una sublista de los juegos a mostrar en la página actual
  const currentGames = games.slice(firstGameIndex, lastGameIndex);

  

  return (
    <>
      {currentGames &&
        currentGames.map((c,) => (
          <div className="box" key={c.id}>
            <Link className="boxLink" to={`/videogame/${c.id}`}> 
            {/* onClick={() => handleClick(c.id)} */}
            <img
              className="gamePicture"
              src={
                c.background_image
                  ? c.background_image
                  : "https://images2.alphacoders.com/105/1052293.jpg"
              }
              alt="game Picture"
            />
            <div className="textContainer">
              
              <div className="ratingBox"><h1 className="ratingBoxNumber" >{c.rating}</h1></div>
              <h2 className="title">{c.name ? c.name : ""}</h2>
              <div className="genres">
                {c.genres &&
                  c.genres.map((genre, index) =>
                    lengthValidator(c.genres, index, genre)
                  )}  
              </div>
            </div>
            </Link>
          </div>
        ))}
          <Pagination/>

        
    </>
  );
};

export default CardGame;
