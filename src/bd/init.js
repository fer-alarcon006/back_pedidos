import mongoose from "mongoose";

export async function initBaseDeDatos() {
  try {
    console.log("🔌 Conectando a MongoDB...");

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI no está definida");
    }

    console.log("🔎 MONGO_URI detectada");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Conectado a MongoDB 🚀");

  } catch (error) {
    console.error("❌ ERROR REAL AL CONECTAR MONGO:");
    console.error(error); // 👈 CLAVE (muestra el error completo)

    console.log("⏳ Falló conexión. Cerrando proceso...");

    setTimeout(() => {
      process.exit(1);
    }, 3000);
  }
}