import { app } from "./app.js";

async function iniciarServidor() {
  try {
    console.log("Iniciando servidor...");

    const PORT = process.env.PORT || 10000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error("ERROR CRÍTICO:", error);
  }
}

iniciarServidor();

console.log("Servidor iniciado");