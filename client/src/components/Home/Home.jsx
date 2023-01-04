import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import GameCard from "./Game_card/GameCard";
import Footer from "../Footer/Footer";
import NavBar from "../Nav_bar/NavBar";
import Pagination from "./Paginado/Pagination";
import FilterBar from "./FilterBar/FilterBar";

const Home = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(action.getVideogames());
  }, []);
 return (
  <div className="homeContainer" > 
  <NavBar/>
  <FilterBar/>
  <Pagination/>
  <GameCard/>
  <Footer/>
  </div>
 )
};

export default Home;
