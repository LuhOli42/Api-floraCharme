import { carrinho } from "../models/Carrinho";

class CarrinhoController {
  static async mostrarCarrinho(req, res) {
    try {
      const carrinhoLocalizado = await carrinho
        .find({
          user_id: req.user._id,
          compra_finalizada: false,
        })
        .populate();

      return res.status(200).json(carrinhoLocalizado);
    } catch (error) {}
  }

  static async adicionarItemAoCarrinho(req, res) {
    try {
      const carrinhoLocalizado = await carrinho.find({
        user_id: req.user._id,
        compra_finalizada: false,
      });

      carrinhoLocalizado.produto_id.push(req.params.id);

      const atualizarInformacoes = await carrinho.findByIdAndUpdate(
        carrinhoLocalizado.id,
        carrinhoLocalizado
      );

      return res.status(200).json(atualizarInformacoes);
    } catch (error) {}
  }

  static async deleterItemAoCarrinho(req, res) {
    try {
      const carrinhoLocalizado = await carrinho
        .find({
          user_id: req.user._id,
          compra_finalizada: false,
        })
        .populate();

      const indexOfProduct = carrinhoLocalizado.produto_id.indexOf(
        req.params.id
      );
      carrinhoLocalizado.produto_id.splice(indexOfProduct, 1);

      const atualizarInformacoes = await carrinho.findByIdAndUpdate(
        carrinhoLocalizado.id,
        carrinhoLocalizado
      );

      return res.status(200).json(atualizarInformacoes);
    } catch (error) {}
  }
}

export default CarrinhoController;
