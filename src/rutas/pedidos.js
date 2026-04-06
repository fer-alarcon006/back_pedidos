import {
  crearPedido,
  obtenerPedidos,
  obtenerPedidoPorId,
  actualizarPedido,
  eliminarPedido
} from "../servicios/pedidos.js";

export function pedidosRoutes(app) {

  app.get("/api/v1/pedidos", async (req, res) => {
    const data = await obtenerPedidos();
    res.json(data);
  });

  app.get("/api/v1/pedidos/:id", async (req, res) => {
    const data = await obtenerPedidoPorId(req.params.id);
    res.json(data);
  });

  app.post("/api/v1/pedidos", async (req, res) => {
    const data = await crearPedido(req.body);
    res.json(data);
  });

  app.patch("/api/v1/pedidos/:id", async (req, res) => {
    const data = await actualizarPedido(req.params.id, req.body);
    res.json(data);
  });

  app.delete("/api/v1/pedidos/:id", async (req, res) => {
    await eliminarPedido(req.params.id);
    res.sendStatus(204);
  });
}