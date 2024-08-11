const { DataTypes } = require("sequelize");
const sequelize = require("../config/batabase");

const pet = sequelize.define("pet", {
  name: {
    type: DataTypes.STRING,
  },
  species: {
    type: DataTypes.STRING,
    
  },
  carry: {
    type: DataTypes.STRING,
    
  },
  weight: {
    type: DataTypes.STRING,
  },
  date_of_birth: {
    type: DataTypes.STRING,
  },
});

module.exports = pet;
