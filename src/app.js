import express from "express";
import cors from "cors";
import { pedidosRoutes } from "./rutas/pedidos.js";
import { productosRoutes } from "./rutas/productos.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // 👈 mejor que bodyParser

// Rutas
pedidosRoutes(app);
productosRoutes(app);

// Ruta base
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

export { app };