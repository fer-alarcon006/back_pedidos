import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";

import { pedidosRoutes } from "./rutas/pedidos.js";
import { productosRoutes } from "./rutas/productos.js";
import { comentariosRoutes } from "./rutas/comentarios.js";
import { usuariosRoutes } from "./rutas/usuarios.js";

const app = express();


app.use(helmet());

app.use(cors()); 

app.use(express.json({ limit: "10kb" }));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: {
    error: "Demasiadas peticiones, intenta más tarde"
  }
});

app.use(limiter);


app.use(xss());



try {
  pedidosRoutes(app);
  productosRoutes(app);
  comentariosRoutes(app);
  usuariosRoutes(app);
} catch (error) {
  console.error(" Error cargando rutas:", error);
}



app.get("/", (req, res) => {
  res.status(200).json({
    message: "API funcionando correctamente "
  });
});

export { app };