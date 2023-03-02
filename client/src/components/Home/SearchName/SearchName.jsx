import React, { useState } from "react";
import "./SearchName.css";

import { MdOutlineMyLocation } from "react-icons/md";
import { useDispatch } from "react-redux";
import { searchName, searchNameReset } from "../../../redux/actions";
import { BiReset } from "react-icons/bi";



const SearchName = () => {

  const [input, setInput] = useState('')

        const dispatch = useDispatch()
        

        const handlerChangeName = (e) => {
          e.preventDefault();
          setInput('')
        input.length > 0 && dispatch(searchName(input))
      }

      const inputchange= (e) => {
        setInput(e.target.value)
      }



  return (
    <div className="SearchContainer" to="/home">
        <form className="searchContainerForm" onSubmit={handlerChangeName}>
        <input
          className="NavBarSearch"
          type="text"
          value={input}
          placeholder="search game"
           onChange={inputchange}
        />
        <button type="submit" className="NavBarSearchSubmit">
          <MdOutlineMyLocation />
        </button>
        <button onClick={()=>dispatch(searchNameReset())} className="NavBarSearchReset" > <BiReset/></button></form>
    </div>
  );
};

export default SearchName;
