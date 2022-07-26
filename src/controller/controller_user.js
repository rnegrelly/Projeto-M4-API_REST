import CreateClient from "../models/models_user.js";
import ValidaCliente from "../services/validation_user.js"
import Dbmetodos from "../utils/dbmetodos.js";
import { Database } from "../infra/dbrestaurante.js";



class ClienteMetodos {
    
    static Rotas (app){
        
        //Método para listar todos os clientes cadastrados
        app.get("/client", (req, res) => {
            const listaclientes = Dbmetodos.listarAgenda()
            res.json(listaclientes)
        })

        //Método para listar os clientes cadastrados por ID

        //Método para cadastrar novos clientes.
        app.post("/client", (req, res) => {
            
            const valido = ValidaCliente.validaTudo(...Object.values(req.body))

            if(valido){

                const nClient = new CreateClient (...Object.values(req.body))
                const nBooking = Dbmetodos.insertClient (nClient)
                res.json(nBooking)

            } else {
                res.send("Dados de cliente preenchidos incorretamente.")
            }
            
        })
        
    }
    
}

export default ClienteMetodos;
