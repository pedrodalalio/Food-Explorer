const AppError = require('../utils/AppError');

const knex = require("../database/knex");

class IngredientsController {
  async delete(req, res) {

    if (!req.params.id) {
      throw new AppError("ID do ingrediente não informado", 400);
    }

    const ingredient = await knex('ingredients')
      .where({ id: req.params.id })
      .del();

    if (!ingredient) {
      throw new AppError("Ingrediente não encontrado", 404);
    }

    return res.json({ message: "Ingrediente deletado com sucesso" });
  }
}

module.exports = IngredientsController;