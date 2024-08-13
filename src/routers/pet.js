const express = require("express");
const router = express.Router();
const Pet = require("../controllers/pet");

router.post("/pet/:tutorId", Pet.createPet );
router.get("/pet" , Pet.getAllPetrs);
router.put("/pet/:id/tutor/:tutorId", Pet.updatePet );
router.delete("/pet/:id/tutor/:tutorId", Pet.deletePet);

module.exports = router;
