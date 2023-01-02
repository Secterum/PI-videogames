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
  
  const gameGenre = await Genre.findAll({
    where: {
      name: genres,
    },
  });


    const gameCreated = await Videogame.create({
      name,
      description,
      background_image,
      released,
      rating,
      platforms,
      createdInDb,
      genres:genres,
    });
    
    gameCreated.addGenre(gameGenre);

    // gameCreated.genres = gameGenre.map(g => g.dataValues.name)

    return {
        status: 'done',
        message: "New game added successfully!",
        game: gameCreated,
      }
    }

module.exports = PostCreateGame;