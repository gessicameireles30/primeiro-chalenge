const express = require("express");
const router = express.Router();
const Tutor = require("../controllers/tutor");


router.post("/tutor", Tutor.createTutor );
router.get("/tutor" , Tutor.getAllTutors);
router.put("/tutor/:id", Tutor.updateTutor );
router.delete("/tutor/:id", Tutor.deleteTutor);

module.exports = router;
