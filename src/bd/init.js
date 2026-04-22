import mongoose from "mongoose";

export async function initBaseDeDatos() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB 🚀");
  } catch (error) {
    console.error("Error Mongo:", error);
    process.exit(1);
  }
}