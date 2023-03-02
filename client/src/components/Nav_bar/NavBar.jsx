import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import imgTitle from "../../utilidades/DangerZoneO2.png";
import imgFondo from "../../utilidades/fondoNavbar.png";
import { MdOutlineMyLocation } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <Link className="NavBarBoxTitleImg" to="/*"  >
        <img className="NavBarTitleImg" src={imgTitle} />
      </Link>

      <div className="boxButton">
      <NavLink className="nombreDeClase" to="/home">
        <span>home</span>
      </NavLink>
      <NavLink className="nombreDeClase" to="/videogames">
        <span>creacion de juego</span>
      </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
