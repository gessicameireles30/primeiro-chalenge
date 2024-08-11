const { Sequelize } = require("sequelize");

const sequelize = new Sequelize( {
      database:'bd_pestclinic',
      username:'root',
      password:'',
      host:'localhost',
      dialect:'mysql'
 })

module.exports = sequelize;
