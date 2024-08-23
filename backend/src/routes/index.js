const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionRouter = require("./session.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/session", sessionRouter);

module.exports = routes;