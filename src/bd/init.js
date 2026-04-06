import mongoose from "mongoose";

export async function initBaseDeDatos() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/venta_lenos");

    console.log("Conectado a MongoDB ");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
}