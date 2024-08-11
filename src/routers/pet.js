const express = require("express");
const router = express.Router();
const pet = require("../controllers/pet");


router.post("/", pet.createPet);

module.exports = router;
