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


app.use(cors({
  origin: "http://localhost:5173"
}));


app.use(express.json());


const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: "Demasiadas peticiones, intenta más tarde"
});

app.use(limiter);


app.use(xss());


pedidosRoutes(app);
productosRoutes(app);
comentariosRoutes(app);
usuariosRoutes(app);


app.get("/", (req, res) => {
  res.send("API funcionando");
});

export { app };