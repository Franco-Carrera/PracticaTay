import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));
app.use(cors());

//Cuando te hagan un get http://localhost:3000/prueba
app.get("/prueba", (req, res) => {
  res.send("Me hicieron un get a la ruta prueba");
});

app.listen(port, () => {
  console.log(`Estoy ejecutandome en http://localhost:${port}`);
});

//como conectar este servidor a mi archivo de index.html y relacionarlo
// puedo ver ejemplo con algún proyecto de react que he hecho o investigar en youtube
// y tengo el difícil proyecto final de mauricio donde tiene un front y back conectados
