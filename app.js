import express from "express";
import CriaTabelas from "./src/DAO/CriaTabelas.js";
import * as dotenv from "dotenv";
import ColaboradoresController from "./src/controller/ColaboradoresController.js";
import ProdutosController from "./src/controller/ProdutosController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.json());

CriaTabelas.criaTabelaCardapio();
CriaTabelas.criaTabelaCliente();
CriaTabelas.criaTabelaFornecedores();
CriaTabelas.criaTabelaColaboradores();
CriaTabelas.criaTabelaProdutos();

ColaboradoresController.rotas(app);
ProdutosController.rotas(app);
