import React from 'react';
import { NavLink } from "react-router-dom";
import "./Landing.css"
const Landing = () => {
  
  return (
    <>
      <div className="boxLanding">
      
        <NavLink className="LandingNavLink" to="/home">
         <div className='LandingNavLinkPicture'>
         </div>
       </NavLink>
      </div>
    </>
  );
};

export default Landing;
