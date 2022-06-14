const express = require("express");
const mongoose = require("mongoose");
const { use } = require("./Controller/memberController");
const members = require("./Controller/memberController");
// Acceso a las variables de entorno para la configuracion del servidor
require("dotenv").config();

// Cadena de conexion a la base de datos
const conn = process.env.DATABASE_URL;
const port = 8000;

// Conexion a la base de datos
mongoose.connect(conn);
const database = mongoose.connection;

// Verificar la conexi贸n con la base de datos
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Successfully connected");
});

const app = express();
app.use(express.json());
app.use("/members", members);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});