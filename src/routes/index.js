import express from "express";
import produtos from "./produtosRoutes.js";

const routes = (app) => {
  app.use(express.json(), produtos);
};

export default routes;
