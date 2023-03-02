import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as action from "../../redux/actions";
import "./Detail.css";
import NavBar from "../Nav_bar/NavBar";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(action.getDetails(id));
    return () => {
      dispatch(action.clearDetails());
    };
  }, [dispatch]);

  const details = useSelector((state) => state.details);
  console.log(details.platforms);
  return (
    <div className="BoxDetails">
      <NavBar />
      <h1 className="detailsTitle">{details.name}</h1>
      <div className="detailsGridContainer">
        <img
          className="detailsIMG"
          src={
            details.background_image
              ? details.background_image
              : "https://images2.alphacoders.com/105/1052293.jpg"
          }
          alt="game Picture"
        />
        <div className="detailsContainer">
          <div className="detailsDetails">
            <h3>release: {details.released} </h3>
            <h3>rating: {details.rating} </h3>
          </div>
          <div className="detailsDetailsGyP">
            <h3>
              Genres:
              {details.genres &&
                details.genres.map((genres, index) => (
                  <p key={index}>{genres}</p>
                ))}
            </h3>
            <h3>
              platforms:
              {details.platforms &&
                details.platforms.map((platform, index) => (
                  <p key={index}>{platform}</p>
                ))}
            </h3>
          </div>
        </div>
        <h4 className="detailsDescription">{details.description}</h4>
      </div>
    </div>
  );
}
