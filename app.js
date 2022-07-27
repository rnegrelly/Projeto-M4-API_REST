import express  from "express";
import funcionariosController from "./src/controllers/funcionariosController.js";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(express.json());


funcionariosController.rotas(app)