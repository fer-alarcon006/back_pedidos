import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  cliente: String,
  producto: String,
  cantidad: Number,
  precio: Number,
  fecha: {
    type: Date,
    default: Date.now
  }
});


export const Pedido = mongoose.model("Pedido", pedidoSchema);