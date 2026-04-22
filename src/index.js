import dotenv from "dotenv";
dotenv.config(); 
import { app } from "./app.js";
import { initBaseDeDatos } from "./bd/init.js";

const PORT = process.env.PORT || 3001;

async function iniciarServidor() {
  try {
    await initBaseDeDatos();

    app.listen(PORT, () => {
console.log(` Servidor corriendo en puerto ${PORT}`);    });

  } catch (error) {
    console.error(" Error al iniciar:", error);
  }
}

iniciarServidor();