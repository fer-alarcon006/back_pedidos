import Usuario from "../bd/modelos/Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// 🟢 REGISTRO
export const createUsuario = async (username, password) => {
  const existe = await Usuario.findOne({ username });

  if (existe) {
    throw new Error("El usuario ya existe");
  }

  // 🔐 Hash de contraseña
  const hash = await bcrypt.hash(password, 10);

  const nuevoUsuario = new Usuario({
    username,
    password: hash,
  });

  return await nuevoUsuario.save();
};

// 🔵 LOGIN
export const loginUsuario = async (username, password) => {
  const user = await Usuario.findOne({ username });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // 🔐 Comparar contraseña
  const esValido = await bcrypt.compare(password, user.password);

  if (!esValido) {
    throw new Error("Contraseña incorrecta");
  }

    // 🔍 DEBUG (puedes quitarlo después)
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

    // 🎟️ Generar JWT (con respaldo)
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "clave_temporal_123",
      { expiresIn: "24h" }
    );

    return token;
  };