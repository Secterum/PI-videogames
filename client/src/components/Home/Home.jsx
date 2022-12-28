import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";

const Home = () => {
  console.log("entre al componente");

  const dispatch = useDispatch()
  console.log("guarde el dispatch")
  const allGames = useSelector((state) => state.videogames);
  console.log("guarde el all games");
  useEffect(() => {
    dispatch(action.getVideogames());
  }, []);
  console.log(allGames);

  return (
    <>
      <h1>home</h1>
      <NavLink className="nombreDeClase" to="/esquis">
        <span>ruta esquis</span>
      </NavLink>
      <NavLink className="nombreDeClase" to="/videogames">
        <span>ruta videogames create</span>
      </NavLink>
    </>
  );
};

export default Home;
