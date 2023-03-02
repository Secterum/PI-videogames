import React from "react";

import "./CreationForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { postVideogame } from "../../redux/actions";
import NavBar from "../Nav_bar/NavBar";
import * as action from "../../redux/actions";
const CreationForm = () => {
  const genres = useSelector((state) => state.genres);

  const platforms = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "Xbox One",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "PS Vita",
    "PSP",
    "Wii U",
    "Wii",
    "GameCube",
    "Nintendo 64",
    "Game Boy Advance",
    "Game Boy Color",
    "Game Boy",
    "SNES",
    "NES",
    "Classic Macintosh",
    "Apple II",
    "Commodore / Amiga",
    "Atari 7800",
    "Atari 5200",
    "Atari 2600",
    "Atari Flashback",
    "Atari 8-bit",
    "Atari ST",
    "Atari Lynx",
    "Atari XEGS",
    "Genesis",
    "SEGA Saturn",
    "SEGA CD",
    "SEGA 32X",
    "SEGA Master System",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",
    "Web",
  ];

  const initState = {
    name: "",
    description: "",
    background_image: "",
    released: "",
    rating: 0,
    platforms: [],
    genres: [],
  };

  const dispatch = useDispatch();

  const [creation, setCreation] = useState(initState);

  const [errors, setErrors] = useState({});

  const [disabledButton, setDisabledButton] = useState(true);

  const validate = (inputToValidate) => {
    let foundErrors = {};
    if (inputToValidate.name) {
      if (!/^[\s\S]{3,25}$/.test(inputToValidate.name)) {
        foundErrors.name =
          "The title must have a minimum of 3 character and a maximum of 25 characters";
      }
    }
    if (inputToValidate.description) {
      if (!/^[\s\S]{10,255}$/.test(inputToValidate.description)) {
        foundErrors.description =
          "The description must have a minimum of 10 character and a maximum of 255 characters";
      }
    }
    if (inputToValidate.background_image) {
      if (
        !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(
          inputToValidate.background_image
        )
      ) {
        foundErrors.background_image = "does not correspond to a valid URL";
      }
    }
    if (inputToValidate.rating) {
      if (inputToValidate.rating < 0 || inputToValidate.rating > 5) {
        foundErrors.rating = "No es un numero valido entre 0 y 5";
      }
    }

    if (inputToValidate.platforms) {
      if (inputToValidate.platforms.length > 4) {
        foundErrors.platforms = "Solo puedes seleccionar 4 plataformas";
      }
    }
    if (inputToValidate.genres) {
      if (inputToValidate.genres.length > 4) {
        foundErrors.genres = "Solo puedes seleccionar 4 generos";
      }
      if (inputToValidate.genres.length < 1) {
        foundErrors.genres = "debes seleccionar al menos 1 genero";
      }
    }

    return foundErrors;
  };

  const handlerChange = (e) => {
    setCreation({ ...creation, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const check = document.querySelectorAll("input[type=checkbox]");

    check.forEach((el) => {
      el.checked = false;
    });
    dispatch(postVideogame(creation));
    setCreation(initState);
  };

  const handlerArrays = (e) => {
    console.log(e.target.value)
    if (
      creation[e.target.name].length < 4 ||
      creation[e.target.name].includes(e.target.value)
    ) {
      creation[e.target.name].includes(e.target.value)
        ? setCreation({
            ...creation,
            [e.target.name]: creation[e.target.name].filter(
              (g) => g !== e.target.value
            ),
          })
        : setCreation({
            ...creation,
            [e.target.name]: [...creation[e.target.name], e.target.value],
          });
    }
  };

  useEffect(() => {
    setErrors(validate(creation));
  }, [creation]);

  useEffect(() => {
    if (
      (creation.name !== "",
      creation.description !== "",
      creation.released !== "",
      creation.rating !== 0)
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [errors, creation, setDisabledButton]);

  //

  useEffect(() => {
    dispatch(action.getGenres());
  }, []);

  return (
    <>
      <NavBar />
      <form className="boxCreationForm">
        <div className="CreationFormInputsContainer">
          <div className="CreationFormInputBox">
            <label className="CreationFormLabel">Title:</label>
            <input
              className="CreationFormInput"
              type="text"
              name="name"
              placeholder="Title"
              value={creation.name}
              onChange={handlerChange}
            />
            {errors?.name && (
              <p className="CreationFormErrors">{errors.name}</p>
            )}
          </div>

          <div className="CreationFormInputBox">
            <label className="CreationFormLabel">Description:</label>
            <input
              className="CreationFormInput"
              type="text"
              name="description"
              placeholder="Description"
              value={creation.description}
              onChange={handlerChange}
            />{" "}
            {errors?.description && (
              <p className="CreationFormErrors">{errors.description}</p>
            )}
          </div>

          <div className="CreationFormInputBox">
            <label className="CreationFormLabel">Image:</label>
            <input
              className="CreationFormInput"
              type="text"
              name="background_image"
              placeholder="url img"
              accept="image/png, image/jpeg"
              value={creation.background_image}
              onChange={handlerChange}
            />
            {errors?.background_image && (
              <p className="CreationFormErrors">{errors.background_image}</p>
            )}
          </div>

          <div className="CreationFormInputBox">
            <label className="CreationFormLabel">Released:</label>
            <input
              className="CreationFormInput"
              type="date"
              name="released"
              value={creation.released}
              placeholder="mm/dd/yyyy"
              onChange={handlerChange}
            />
          </div>

          <div className="CreationFormInputBox">
            <label className="CreationFormLabel">Rating:</label>
            <input
              className="CreationFormInput"
              type="number"
              id="ratingInput"
              placeholder="1 min 5 max"
              name="rating"
              value={creation.number}
              onChange={handlerChange}
            />
            {errors?.rating && (
              <p className="CreationFormErrors">{errors.rating}</p>
            )}
          </div>
        </div>
        <div className="CheckBoxContainer">
          <div className="CreationFormGyP">
            <h4>Selecciona el genero</h4>
            <div className="CreationFormGyPbox">
              {genres.map((g) => (
                <label
                  className="CreationFormGyPCheckbox"
                  htmlFor={g.id}
                  key={g.name}
                >
                  <input
                    className="CreationFormGenresH4"
                    key={g.name}
                    name="genres"
                    type="checkbox"
                    id={g.id}
                    value={g.name}
                    onChange={handlerArrays}
                  />
                  {g.name}
                </label>
              ))}
            </div>
          </div>
          <div className="CreationFormGyP">
            <h4>Selecciona el platforms</h4>
            <div className="CreationFormGyPbox">
              {platforms.map((p) => (
                <label
                  className="CreationFormGyPCheckbox"
                  htmlFor={p}
                  key={p.name}
                >
                  <input
                    className="CreationFormPlatformsH4"
                    type="checkbox"
                    name="platforms"
                    key={p.name}
                    id={p.id}
                    value={p}
                    onChange={handlerArrays}
                  />
                  {p}
                </label>
              ))}
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Crear juego"
          onClick={handlerSubmit}
          disabled={
            creation.name.length < 3 ||
            creation.name.length > 25 ||
            creation.description < 10 ||
            creation.released.length === 0 ||
            creation.rating < 0 ||
            creation.rating > 5 ||
            creation.genres[0] == undefined
          }
        />
      </form>
    </>
  );
};

export default CreationForm;
