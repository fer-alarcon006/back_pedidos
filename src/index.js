import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.js";
import { initBaseDeDatos } from "./bd/init.js";

async function iniciarServidor() {
  try {
    console.log(" Iniciando servidor...");

    console.log("MONGO:", process.env.MONGO_URI);

    await initBaseDeDatos();

    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
      console.log(` Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error(" ERROR CRÍTICO:", error);

    setTimeout(() => {
      process.exit(1);
    }, 3000);
  }
}

iniciarServidor();