const tutor = require("../models/tutor");
const Tutor = require("../models/tutor");

class TutorController {
  createTutor = async (req, res) => {
    try {
      const tutor = req.body;
      await Tutor.create(tutor);
      res.send("Tutor salvo com sucesso!");
    } catch (error) {
      res.send("erro ao salvar o tutor");
    }
  };

  updateTutor = async (req, res) => {
    try {
      const id = req.params.id;
      const tutor = await Tutor.findByPk(id);
      if(tutor){
        await tutor.update(req.body);
        res.send("Atualizado com sucesso");
      }else{
        res.send("Não existe esse tutor!")
      }
    } catch (error) {
      res.send("Erro, não é possível atualizar!");
    }
  };

  deleteTutor = async (req, res) => {
    try {
      const id = req.params.id;
      await Tutor.destroy({
        where: {id: id}
      });
      res.send("Tutor deletado com sucesso!")
    } catch (error) {
      res.send("Erro ao deletar")
    }

  };
  getAllTutors = async (req, res) => {
    try {
      const tutor =  await Tutor.findAll();
      console.log(tutor);
      res.json(tutor);
    } catch (err) {
      res.send("Erro ao listar");
    }
  };
}

module.exports = new TutorController();
