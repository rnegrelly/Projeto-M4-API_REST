import express  from "express";
import Client from "./src/controller/controller_user.js";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(express.json());

Client.Rotas(app);
