import Producto from "../bd/modelos/producto.js";

export const obtenerProductos = async () => {
  return await Producto.find();
};

export const crearProducto = async (data) => {
  return await Producto.create(data);
};