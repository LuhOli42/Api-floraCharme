import express from "express";
import UsuariosController from "../controllers/usuariosController.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router
  .post("/usuario", UsuariosController.cadastrarUsuario)
  .use(authenticate)
  .get("/usuario", UsuariosController.informacoesUsuario)
  .put("/usuario", UsuariosController.atualizarUsuario)
  .delete("/usuario", UsuariosController.deletarUsuario);

export default router;
