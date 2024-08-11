const express = require("express");
const tutor = require("./src/routers/tutor");
const pet = require("./src/routers/pet");
const sequelize = require("./src/config/batabase");

const app = express();

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
