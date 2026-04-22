import Producto from "../bd/modelos/producto.js";
export const productosRoutes = (app) => {

  app.get("/api/v1/productos", async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
  });

  app.post("/api/v1/productos", async (req, res) => {
    const nuevo = new Producto({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      ingredients: req.body.ingredients || []
    });

    await nuevo.save();
    res.json(nuevo);
  });

  // s DELETE
  app.delete("/api/v1/productos/:id", async (req, res) => {
    const { id } = req.params;

    await Producto.findByIdAndDelete(id);

    res.json({ message: "Producto eliminado" });
  });

};