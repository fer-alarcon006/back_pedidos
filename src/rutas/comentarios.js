export const comentariosRoutes = (app) => {

  app.post("/comentarios", (req, res) => {
    const { comentario, puntuacion } = req.body;

    
    if (!comentario || comentario.trim() === "") {
      return res.status(400).json({
        mensaje: "El comentario es obligatorio"
      });
    }

    
    if (comentario.length > 200) {
      return res.status(400).json({
        mensaje: "El comentario no puede exceder 200 caracteres"
      });
    }

    if (!Number.isInteger(puntuacion)) {
      return res.status(400).json({
        mensaje: "La puntuación debe ser un número entero"
      });
    }


    res.json({
      mensaje: "Comentario recibido correctamente",
      comentario,
      puntuacion
    });

  });

};