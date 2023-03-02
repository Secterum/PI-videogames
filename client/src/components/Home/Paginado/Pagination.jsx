import React, { useEffect } from "react";
import "./Pagination.css";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../redux/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.totalPage);
  const currentPage = useSelector((state) => state.currentPage);
  const buttons = [];

  useEffect(() => {
    dispatch(action.changePage());
  }, []);



  for (let i = 1; i <= totalPage; i++) {
    buttons.push(
      <button
        key={i}
        className={i === currentPage && "active"}
        onClick={() => dispatch(action.changePage(i))}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="paginationContainer">
      

      < button className = 'pages' onClick={currentPage!== 1 ? () => dispatch(action.changePage(currentPage-1)):console.log("")} > « </button>

       {buttons}{" "}
      <button className="pages" onClick={buttons.length>currentPage? () => dispatch(action.changePage(currentPage+1)):console.log()}> » </button>{" "}
    </div>
  );
};

export default Pagination;
