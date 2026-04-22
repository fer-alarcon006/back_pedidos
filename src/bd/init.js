import mongoose from "mongoose";

export async function initBaseDeDatos() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI no está definida");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("Conectado a MongoDB 🚀");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
}