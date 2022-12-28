const { Videogame, Genre } = require('../db');
const getAllGenres = require('./getAllGenres');

const PostCreateGame = async (dataForm) => {
    let {
    name,
    description,
    background_image,
    released,
    rating,
    genres,
    createdInDb,
    platforms,
  } = dataForm;

    const gameCreated = await Videogame.create({
      name,
      description,
      background_image,
      released,
      rating,
      platforms,
      createdInDb,
    });
    const gameGenre = await Genre.findAll({
      where: {
        name: genres,
      },
    });
    // console.log (gameCreated)
    gameCreated.addGenre(gameGenre);

    return {
        status: 'done',
        message: "New game added successfully!",
        game: gameCreated
      }
    }

module.exports = PostCreateGame;