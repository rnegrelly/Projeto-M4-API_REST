import { Database } from "../infra/dbrestaurante.js";

class Dbmetodos {

    //Método para listar a agenda de reservas do restaurante.
    static listarAgenda () {

        return Database.cliente
    }
    
    //Método para inserir nova reserva de cliente no restaurante.
    static insertClient (cliente){

        Database.cliente = [...Database.cliente, cliente]
        return {sucess: "Reserva realizada com sucesso."}
    }


}

export default Dbmetodos