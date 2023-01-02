import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../redux/actions";
// import styles from "./GameCard.module.css";
import "./GameCard.css";

const CardGame = () => {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(action.getVideogames());
  }, []);

  const lengthValidator = (array, index, c) => {
      if (array.length == index+1) {
        return <p key={index}>{c}</p>;
      }
      else {
        return <p key={index}>{c},</p>;
      }
  }

  return (
    <>
      {games &&
        games.map((c, index) => (
          <div className="box" key={index}>
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
              <h2 className="title">{c.name ? c.name : ""}</h2>

              <div className="genres">
                {c.genres &&
                  c.genres.map((genre, index) =>
                    lengthValidator(c.genres, index, genre)
                  )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardGame;
