import express  from "express";
import CriaTabelas from "./src/DAO/CriaTabelas.js"
import ColaboradoresController from "./src/controller/ClientesController.js";



const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(express.json());

CriaTabelas.criaTabelaCardapio();
CriaTabelas.criaTabelaClientes();
CriaTabelas.criaTabelaFornecedores();
CriaTabelas.criaTabelaColaboradores();

ColaboradoresController.rotas(app);