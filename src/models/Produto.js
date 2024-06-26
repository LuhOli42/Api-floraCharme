import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, require: true },
    categoria: { type: String, require: true },
    descricao: { type: String, require: true },
    valor: { type: Number, require: true },
    quantidade: { type: Number, require: true },
    img_url: { type: String, require: true },
    created_at: { type: Date },
    modified_at: { type: Date },
    deleted_at: { type: Date },
  },
  { versionKey: false }
);

const produto = mongoose.model("produtos", produtoSchema);

export { produto, produtoSchema };
