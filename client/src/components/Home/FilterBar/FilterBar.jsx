import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";

const FiltersBar = () => {

const dispatch = useDispatch()

  const [stateScroll, setStateScroll] = useState({
    open: false,
  });

  const handleClick = () => {
    setStateScroll((prevState) => ({
      open: !prevState.open,
    }));
  };
  
  React.useEffect(() => {
    dispatch(actions.getGenres());
  }, []);

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  
  const genres = useSelector((state) => state.genres);

console.log (genres,'aca')

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(actions.filterCreated(e.target.value));
    dispatch(actions.changePage(1))
    toTheTop()
  }

  function handleFilterByGenres(e) {
    e.preventDefault();
    dispatch(actions.filterByGenres(e.target.value));
    dispatch(actions.changePage(1))
    toTheTop()
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(actions.ordening(e.target.value));
    dispatch(actions.changePage(1));
    toTheTop()
  }


  return (
    <div>
      <button className='buttonFilter' onClick={handleClick}>Abrir scroll</button>
      {stateScroll.open && (
        <div className="scrollFilter">
          <select id="order" onChange={(e) => handleSort(e)}>
        <option value="normal">Normal</option>
        <option value="upward">A - Z</option>
        <option value="descendant">Z - A</option>
        <option value="HighRating">raiting Attack</option>
        <option value="LowRating">Lowest Attack</option>
      </select>
      <select id="url" onChange={(e) => handleFilterCreated(e)}>
        <option value="All">All</option>
        <option value="Api">API</option>
        <option value="Created">Created</option>
      </select>
      <select id="type" onChange={(e) => handleFilterByGenres(e)}>
        <option value="All">all types</option>
        {genres.map((genre) => (
          <option value={genre.name} key={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>

        </div>
      )}
    </div>
  );
};

export default FiltersBar;
