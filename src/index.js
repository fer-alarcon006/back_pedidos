async function iniciarServidor() {
  try {
    await initBaseDeDatos();
    console.log("Conectado a MongoDB ");

    app.listen(PORT, () => {
      console.log(`Servidor en puerto ${PORT}`);
    });

  } catch (error) {
    console.error(" ERROR EN INICIO:", error);
    process.exit(1);
  }
}