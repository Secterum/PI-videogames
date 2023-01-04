import React from 'react';
import { NavLink } from "react-router-dom";
import "./Landing.css"
const Landing = () => {
  
  return (
    <>
      <div className="boxLanding">
      
        <h2>Welcome to Landing</h2>
        <p>Individual Project for Henry Bootcamp, made by Andres Del Fabro</p>
        <NavLink className="nombreDeClase" to="/home">
         <span>NOMBRE DEL BOTON</span>
       </NavLink>
      </div>
    </>
  );
};

export default Landing;
