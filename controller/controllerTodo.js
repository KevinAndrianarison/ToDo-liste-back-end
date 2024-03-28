import todos from "../model/todo";

const todoliste = {
  getAll: async (req, res) => {
    try {
      const result = await todos.find();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Toutes les tâches sont introuvables !" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await todos.findById(id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Tâche introuvable !" });
    }
  },
  create: async (req, res) => {
    try {
      const { titre, commentaire, status, date } = req.body;
      const result = await todos.create({
        titre: titre,
        commentaire: commentaire,
        status: status,
        date: date,
      });
      res.status(201).json({ message: "Enregistrement réussi !" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de l'enregistrement !" });
    }
  },
  updateStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.params;
      const resultId = await todos.findById(id, { status: 1 });
      if (!resultId) {
        return res.status(404).json({ message: "Tâche non trouvé !" });
      }
      const result = await todos.updateOne(
        { _id: id },
        {
          $set: {
            status: status,
          },
        }
      );
      res.json({ message: "Modifications avec succès", result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la modification !" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { titre, commentaire, status, date } = req.body;
      const resultId = await todos.findById(id);
      if (!resultId) {
        return res.status(404).json({ message: "Tâche non trouvé !" });
      }
      const result = await todos.updateOne(
        { _id: id },
        {
          $set: {
            titre: titre,
            commentaire: commentaire,
            status: status,
            date: date,
          },
        }
      );
      res.json({ message: "Modifications avec succès", result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la modification !" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const resultId = await todos.findById(id);
      if (!resultId) {
        return res.status(404).json({ message: "Tâche non trouvé !" });
      }
      await todos.deleteOne({ _id: id });
      res.json({ message: "Suppression avec succès ! " });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la suppression !" });
    }
  },
};

module.exports = todoliste;
