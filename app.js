const express = require("express");
const tutor = require("./src/routers/tutor");
const pet = require("./src/routers/pet");
const sequelize = require("./src/config/batabase");
const bodyParser = require("body-parser");
const swaggerUi = require ('swagger-ui-express');
const swagger = require ('./swagger.json');



const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));


app.use(express.json());

app.use(tutor);
app.use(pet);

sequelize
  .sync()
  .then(() => {
    app.listen(3000)
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });



module.exports = app;
