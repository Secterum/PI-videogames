import React from 'react'
import { NavLink } from "react-router-dom";

const Detail = () => {
  return (
    <div>
      <h1>details</h1>
       <NavLink className="nombreDeClase" to="/">
         <span>Landing page</span>
       </NavLink>
    </div>
  )
}

export default Detail
