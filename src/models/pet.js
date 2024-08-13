const { DataTypes } = require("sequelize");
const sequelize = require("../config/batabase");
const Tutor = require('./tutor')

const Pet = sequelize.define('Pet', {
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

Tutor.hasMany(Pet, {foreignKey:'tutorId'});
Pet.belongsTo(Tutor,{foreignKey:'tutorId'});

module.exports = Pet;
