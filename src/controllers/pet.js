const Pet = require("../models/pet");
const Tutor = require("../models/tutor")

class PetController {
   createPet = async (req, res) => {
    try {
      const pet = req.body; 
      const tutorId = req.params.tutorId;
      const data ={ 
        ...pet,
        tutorId
      }
      console.log(data)
      await Pet.create(data);
      res.status(201).send("Pet salvo com sucesso!");
    } catch (err) {
      res.status(500).json(err)
    }
  };

   updatePet = async(req, res) =>{
    try {
      const id = req.params.id;
      const tutorId = req.params.tutorId;
      const pet = await Pet.findByPk(id);
      const data = {
        ...req.body, 
        tutorId
      }
      if(pet){
        await pet.update(data);
        res.status(201).send("Atualizado com sucesso");
      }else{
        res.status(404).send("Não existe esse pet!")
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  deletePet = async(req, res) => {
    try {
      const id = req.params.id;
      const tutorId = req.params.tutorId
      const pet = await Pet.findByPk(id);
      if(!pet){
        res.status(404).send("Pet nao encontrado")
      }
      await Pet.destroy({
        where: {id: id, tutorId}
      });
      res.status(201).send("Pet deletado com sucesso!")
    } catch (error) {
      res.status(500).json(err)
    }
  };

  getAllPetrs = async(req, res) => {
    try {
      const pet =  await Pet.findAll();
      res.json(pet);
    } catch (err) {
      res.status(500).json(err)
    }
  };
}

module.exports = new PetController();
