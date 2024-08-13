import { carrinho } from "../models/Carrinho";

class ComprasController {
  static async finalizarCompra(req, res) {
    try {
      const carrinhoLocalizado = await carrinho.find({
        user_id: req.user._id,
        compra_finalizada: false,
      });

      carrinhoLocalizado.compra_finalizada = true;

      const atualizarInformacoes = await carrinho.findByIdAndUpdate(
        carrinhoLocalizado.id,
        carrinhoLocalizado
      );

      const criarCarrinho = await carrinho.create({
        user_id: req.usuario._id,
        produto_id: [],
        compra_finalizada: false,
      });

      return res.status(200).json(atualizarInformacoes);
    } catch (error) {}
  }

  static async listarComprasFinalizada(req, res) {
    try {
      const comprasFinalizadas = await carrinho.find({
        compra_finalizada: true,
      });

      res.status(200).json(comprasFinalizadas);
    } catch (error) {}
  }

  static async localizarCompraFinalizada(req, res) {
    try {
      const compraFinalizada = await carrinho
        .findById(req.params.id)
        .populate();

      return res.status(200).json(compraFinalizada);
    } catch (error) {}
  }
}

export default ComprasController;
