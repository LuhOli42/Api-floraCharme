import express from "express";
import CarrinhoController from "../controllers/carrinhoController";

const router = express.Router();

router
  .get("/carrinho", CarrinhoController.mostrarCarrinho)
  .post("/carrinho/:id", CarrinhoController.adicionarItemAoCarrinho)
  .delete("/carrinho/:id", CarrinhoController.deleterItemAoCarrinho);

export default router;
