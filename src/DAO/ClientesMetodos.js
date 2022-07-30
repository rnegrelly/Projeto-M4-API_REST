import Database from "../infra/dbrestaurante.js";

class ClientesMetodos {

    
    static listarClientes() {
        const query = `SELECT * FROM clientes`;

        return new Promise((resolve, reject) => {
            Database.all(query, (error, response) => {
                if (!error) {
                    resolve(response)
                    console.log(response)
                } else {
                    reject(error.message)
                }
            })
        })
    }

  
    static cadastrarClientes(clientes) {
        const query = `INSERT INTO clientes 
        (nome_cliente, 
        cpf_cliente, 
        endereco_cliente, 
        email_cliente, 
        telefone_cliente) 
        VALUES (?,?,?,?,?)`

        const body = Object.values(cliente);

        return new Promise((resolve, reject) => {
            Database.run(query, ...body,(error) => {
                if (!error){
                    resolve('Cliente cadastrado com sucesso.')
                } else {
                    reject(`Não foi possível efetuar o cadastro do cliente: ${error.message}`);
                }
            })
        })
    }


    static atualizarClientes(id){

        const query = `UPDATE clientes SET 
        nome_cliente=?,  
        cpf_cliente=?, 
        endereco_cliente=?, 
        email_cliente=?, 
        telefone_cliente=? 
        WHERE id_cliente=?`

        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if (!error){
                    resolve('Cliente atualizado com sucesso.')
                } else {
                    reject(`Não foi possível atualizar os dados do Cliente: ${error.message}`);
                }
            })
        })
    }
}

export default ClientesMetodos;