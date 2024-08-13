const Pet = require("../models/pet");
const Tutor = require("../models/tutor");

class TutorController {
  createTutor = async (req, res) => {
    try {
      const tutor = req.body;
      await Tutor.create(tutor);
      res.status(201).send("Tutor salvo com sucesso!");
    } catch (error) {
      res.status(500).json(err);
    }
  };

  updateTutor = async (req, res) => {
    try {
      const id = req.params.id;
      const tutor = await Tutor.findByPk(id);
      if(tutor){
        await tutor.update(req.body);
        res.status(201).send("Atualizado com sucesso");
      }else{
        res.tatus(404).send("Não existe esse tutor!")
      }
    } catch (error) {
      res.status(500).json(err);
    }
  };

  deleteTutor = async (req, res) => {
    try {
      const id = req.params.id;
      await Tutor.destroy({
        where: {id: id}
      });
      res.status(201).send("Tutor deletado com sucesso!")
    } catch (error) {
      res.status(500).json(err)
    }

  };
  getAllTutors = async (req, res) => {
    
      const tutor =  await Tutor.findAll({
        include: Pet
      }        
      ).then(result => {
        res.json(result);
      }).catch((err)=>{
        res.status(500).json(err);
      });
      //console.log(tutor);
      //res.json(tutor);
    }
  };


module.exports = new TutorController();
