import { Pedido } from "../bd/modelos/pedido.js";

export async function crearPedido(data) {
  const pedido = new Pedido(data);
  return await pedido.save();
}

export async function obtenerPedidos() {
  return await Pedido.find();
}

export async function obtenerPedidoPorId(id) {
  return await Pedido.findById(id);
}

export async function actualizarPedido(id, data) {
  return await Pedido.findByIdAndUpdate(id, data, { new: true });
}

export async function eliminarPedido(id) {
  return await Pedido.deleteOne({ _id: id });
}