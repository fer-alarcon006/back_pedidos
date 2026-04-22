import { app } from "./app.js"; // si lo tienes separado
import { initBaseDeDatos } from "./config/db.js";

async function iniciarServidor() {
  try {
    console.log("Iniciando servidor...");

    await initBaseDeDatos();

    const PORT = process.env.PORT;

    if (!PORT) {
      throw new Error("PORT no definido por Render");
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error("ERROR CRÍTICO:", error);
    process.exit(1);
  }
}

iniciarServidor();

console.log("MONGO:", process.env.MONGO_URI);