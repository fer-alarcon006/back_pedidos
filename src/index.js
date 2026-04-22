import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.js";
import { initBaseDeDatos } from "./bd/init.js";

const PORT = process.env.PORT || 3001;

console.log(" Iniciando app...");

app.listen(PORT, async () => {
  console.log(` Servidor corriendo en puerto ${PORT}`);

  try {
    await initBaseDeDatos();
    console.log(" Mongo conectado");
  } catch (error) {
    console.error(" Error Mongo:", error);
  }
});