import express from "express";
import ComprasController from "../controllers/comprasController";

const router = express.Router();

router
  .post("/compras", ComprasController.finalizarCompra)
  .get("/compras", ComprasController.listarComprasFinalizada)
  .get("/compras/:id", ComprasController.localizarCompraFinalizada);

export default router;
