const { DataTypes } = require("sequelize");
const sequelize = require("../config/batabase");

const tutor = sequelize.define("tutor", {
  name: {
    type: DataTypes.STRING,
   
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  date_of_birth: {
    type: DataTypes.STRING,
  },
  zip_code: {
    type: DataTypes.INTEGER,
  
  },
});

module.exports = tutor;
