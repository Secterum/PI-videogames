import React from 'react'
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='NavBarContainer'>
      <h1>Nav Bar</h1>
      <NavLink className="nombreDeClase" to="/">
        <span>       /Landing     </span>
        </NavLink>
        <NavLink className="nombreDeClase" to="/home">
        <span>   /home   </span>
        </NavLink>
        <NavLink className="nombreDeClase" to="/videogames">
        <span>   /creacion de juego    </span>
        </NavLink>
    </div>
  )
}

export default NavBar