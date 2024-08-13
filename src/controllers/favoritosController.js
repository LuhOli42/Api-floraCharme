import { favoritos } from "../models/Favoritos.js";

class FavoritosController {
  static async listarFavoritos(req, res) {
    try {
      const favoritosLista = await favoritos
        .findOne({
          user_id: req.usuario._id,
        })
        .populate();
      return res.status(200).json(favoritosLista);
    } catch (error) {}
  }

  static async adicionarItemFavorito(req, res) {
    try {
      const favoritosLista = await favoritos.findOne({
        user_id: req.usuario._id,
      });

      if (favoritosLista.produto_id.includes(req.params.id)) {
        return res
          .status(400)
          .json({ message: "Produto ja existente nos favoritos" });
      }

      favoritosLista.produto_id.push(req.params.id);

      const atualizarInformacoes = await favoritos.findByIdAndUpdate(
        favoritosLista.id,
        favoritosLista
      );

      return res.status(200).json(atualizarInformacoes);
    } catch (error) {}
  }

  static async deletarItemFavorito(req, res) {
    try {
      const favoritosLista = await favoritos
        .findOne({
          user_id: req.usuario._id,
        })
        .populate();

      const indexOfProduct = favoritosLista.produto_id.indexOf(req.params.id);
      favoritosLista.produto_id.splice(indexOfProduct, 1);

      const atualizarInformacoes = await favoritos.findByIdAndUpdate(
        favoritosLista.id,
        favoritosLista
      );

      return res.status(200).json(atualizarInformacoes);
    } catch (error) {}
  }
}

export default FavoritosController;
