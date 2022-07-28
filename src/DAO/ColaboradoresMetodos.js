import Database from "../infra/dbrestaurante.js";

class ColaboradoresMetodos {

    /**
     * 
     * @returns (Toda a tabela colaboradores)
     */
    static listarColaboradores() {
        const query = `SELECT * FROM colaboradores`;

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

    /**
     * 
     * @param (req.body) 
     * @returns (Popula a tabela colaboradores)
     */
    static cadastrarColaboradores(colaborador) {
        const query = `INSERT INTO colaboradores 
        (
        nome_colaborador, 
        cpf_colaborador, 
        endereco_colaborador, 
        cargo_colaborador, 
        email_colaborador, 
        telefone_colaborador, 
        turno_colaborador, 
        salario_colaborador, 
        admissao_colaborador, 
        demissao_colaborador)
        VALUES (?,?,?,?,?,?,?,?,?,?)`

        const body = Object.values(colaborador);

        return new Promise((resolve, reject) => {
            Database.run(query, ...body,(error) => {
                if (!error){
                    resolve('Colaborador cadastrado com sucesso.')
                } else {
                    reject(`Não foi possível efetuar o cadastro do colaborador: ${error.message}`);
                }
            })
        })
    }

    /**
     * 
     * @param (req.params.id)
     * @returns (update do colaborador por id)
     */
    static atualizarColaboradores(colaborador, id){

        const query = `UPDATE colaboradores SET 
        matricula_colaborador=?, 
        nome_colaborador=?,  
        cpf_colaborador=?, 
        endereco_colaborador=?, 
        cargo_colaborador=?, 
        email_colaborador=?, 
        telefone_colaborador=?, 
        turno_colaborador=?, 
        salario_colaborador=?, 
        admissao_colaborador=?, 
        demissao_colaborador=? 
        WHERE matricula_colaborador=?`

        const body = Object.values(colaborador);

        return new Promise((resolve, reject) => {
            Database.run(query, ...body, id,(error, row) => {
                if (!error){
                    resolve('Colaborador atualizado com sucesso.')
                    console.log(row)
                } else {
                    reject(`Não foi possível atualizar os dados do colaborador: ${error.message}`);
                }
            })
        })
    }

    static alterarCamposColaborador(){

        const query = ``;

        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if (!error) {
                    resolve(`Colaborador matrícula: ${id} alterado com sucesso.`)
                } else {
                    reject(`Não foi possível alterar os campos do colaborador ${id}: ${error.message}`);
                }
            })
        })
    }
}

export default ColaboradoresMetodos;