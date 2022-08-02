import Database from "../infra/dbrestaurante.js";

class ClientesMetodos {

    
    static listarClientes() {
        const SQL = `SELECT * FROM clientes`

        return new Promise((resolve, reject) => {
            Database.all(SQL, (error, resposta) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(resposta)
                }
            })
        })
    }
    

    static listarClientesPorId(idCliente) {
        const SQL = `SELECT * FROM clientes WHERE id_cliente=?`

        return new Promise((resolve, reject) => {
            Database.get(SQL, idCliente, (error, resposta) => {
                if(error) {
                    reject(`Erro ao buscar cliente através do id fornecido: ${error.message}`)                                 
                } else {
                    resolve(resposta);
                }
            })
    })
    }
  
    static cadastrarClientes(clientes) {
        const SQL = `INSERT INTO clientes 
        (nome_cliente, 
        cpf_cliente, 
        endereco_cliente, 
        email_cliente, 
        telefone_cliente) 
        VALUES (?,?,?,?,?)`

        const body = Object.values(clientes);

        return new Promise((resolve, reject) => {
            Database.run(SQL, ...body,(error) => {
                if (error){
                    reject(`Não foi possível efetuar o cadastro do cliente: ${error.message}`);
                } else {
                    resolve('Cliente cadastrado com sucesso.')
                }
            })
        })
    }


    static atualizarClientesporId (cliente, idCliente){

        const SQL = `UPDATE clientes SET 
        nome_cliente=?,  
        cpf_cliente=?, 
        endereco_cliente=?, 
        email_cliente=?, 
        telefone_cliente=? 
        WHERE id_cliente=?`

        const body = Object.values(cliente)

        return new Promise((resolve, reject) => {
            Database.run(SQL, [...body, idCliente], (error) => {
                if (error){
                    reject(`Não foi possível atualizar os dados do Cliente: ${error.message}`);

                } else {
                    resolve('Cliente atualizado com sucesso.')

                }
            })
        })
    }

    static  deletarClientesporId (idCliente){

        const SQL = `DELETE FROM clientes WHERE id_cliente=?`;

        return new Promise((resolve, reject) => {
            Database.run(SQL, idCliente, (error) => {
                if (error){
                    reject(`Não foi possível deletar os dados do Cliente: ${error.message}`);
                } else {
                    resolve('Cliente deletado com sucesso.')                    
                }
            })
        })
    }


    static deletarDadosTabela () {

        const SQL = `DELETE FROM clientes`

        return new Promise((resolve, reject) => {
            Database.run(SQL, (error) => {
                if (error){
                    reject(`Não foi possível deletar os dados do Cliente: ${error.message}`);
                } else {
                    resolve('TODOS o cadastro de clientes foi apagado com sucesso.')                    
                }
            })
        })
    }

}

   

export default ClientesMetodos;