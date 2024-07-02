import express from "express";
import produtos from "./produtosRoutes.js";
import usuarios from "./usuariosRouters.js";
import login from "./loginRouter.js";

const routes = (app) => {
  app.use(express.json(), produtos, login, usuarios);
};

export default routes;
