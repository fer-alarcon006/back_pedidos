import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  ingredients: [String],

  // 🔥 OFERTAS (SOLO UNA VEZ)
  offer: {
    type: Boolean,
    default: false
  },
  discount: {
    type: Number,
    default: 0
  }
});

export default mongoose.model("Producto", productoSchema);