import React from 'react'
import { NavLink } from "react-router-dom";

const CreationForm = () => {
  return (
    <div>
      <h1>Create</h1>
      <NavLink className="nombreDeClase" to="/videogame/:id">
         <span>Details</span>
       </NavLink>
       <NavLink className="nombreDeClase" to="/">
         <span>Landing page</span>
       </NavLink>
    </div>
  )
}

export default CreationForm

