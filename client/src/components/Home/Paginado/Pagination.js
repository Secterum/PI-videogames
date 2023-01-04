import React, { useEffect } from "react";
import "./Pagination.css";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../redux/actions";



const Pagination = () => {

  const dispatch = useDispatch();
  const totalPage = useSelector((state)=> state.totalPage)
  const buttons = [];

  
  useEffect(() => { dispatch(action.changePage());}, []);

  for (let i = 1; i <= totalPage; i++) {
    buttons.push(
      <button key={i} onClick={() => dispatch(action.changePage(i))}>
        {i}
      </button>
    );
  }

  return (
    <div className='paginationContainer'>
      {buttons}

    </div>
  )
}

export default Pagination