const AppError = require("../utils/AppError");

class DishesController{

    async create(req, res){
        const { name } = req.body;
    }
}

module.exports = DishesController;