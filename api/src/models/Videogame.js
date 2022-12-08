const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
        type: DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      allowNull:false,
    },
    released:{
      type:DataTypes.STRING(11),
    },
    rating:{
      type:DataTypes.FLOAT,
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull:false,
    }


    
  },{
    timestamps:false
  });
};


