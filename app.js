import express  from "express";
import CriaTabelas from "./src/DAO/CriaTabelas.js"
import ClientesController from "./src/controller/ClientesController.js";
import * as dotenv from "dotenv"
import ColaboradoresController from "./src/controller/ColaboradoresController.js";
import FornecedoresController from "./src/controller/FornecedoresController.js";
import CardapioController from "./src/controller/CardapioController.js";

dotenv.config()

const app = express();
const port =  process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(express.json());

CriaTabelas.criaTabelaCardapio();
CriaTabelas.criaTabelaClientes();
CriaTabelas.criaTabelaFornecedores();
CriaTabelas.criaTabelaColaboradores();



ColaboradoresController.rotas(app);
ClientesController.rotas(app);
CardapioController.rotas(app);
FornecedoresController.rotas(app);