import { createUsuario, loginUsuario } from "../servicios/usuarios.js";

export const usuariosRoutes = (app) => {

 
  app.post("/signup", async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await createUsuario(username, password);

      
      res.status(201).json({
        mensaje: "Usuario creado correctamente",
        user: {
          id: user._id,
          username: user.username,
        },
      });

    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  });

  
  app.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;

      const token = await loginUsuario(username, password);

      res.json({
        mensaje: "Login exitoso",
        token,
      });

    } catch (error) {
      res.status(401).json({
        error: error.message,
      });
    }
  });

};