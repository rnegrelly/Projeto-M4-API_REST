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
                } else {
                    reject(error.message)
                }
            })
        })
    }

    /**
     * 
     * @param (matricula)
     * @returns (1 coluna da tabela colaborador)
     */
    static listarColaboradoresPorMatricula(matricula) {

        const query = `SELECT * FROM colaboradores WHERE matricula_colaborador=?`;
        return new Promise((resolve, reject) => {
            try {
                Database.get(query, matricula, (error, response) => {
                    if (!error) {
                        resolve(response);
                    } else {
                        reject(`Erro ao buscar colaborador por matricula: ${error.message}`)
                    }
                })
            } catch (error) {
                throw new Error(error);
            }
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
            Database.run(query, ...body, (error) => {
                if (!error) {
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
    static atualizarColaboradores(colaborador, matricula) {

        const query = `UPDATE colaboradores SET 
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

        const verificaMatricula = [...body];
        try{
            if (verificaMatricula[0] === parseInt(matricula)) {
                return new Promise((resolve, reject) => {
                    Database.run(query, ...body, matricula, (error) => {
                        if (!error) {
                            resolve('Colaborador atualizado com sucesso.');
                        } else {
                            reject(`Não foi possível atualizar os dados do colaborador: "${error}" - Colaborador não existente.`);
                        }
                    })
                })
            } else {
                throw new Error (`Não é possível alterar a matrícula de um colaborador.`)
            }
        } catch(error) {
            throw new Error(error)
        }

    }

    static alterarCamposColaborador(colaborador, matricula) {

        const query = `UPDATE colaboradores SET 
        cargo_colaborador=?, 
        salario_colaborador=?, 
        demissao_colaborador=? 
        WHERE matricula_colaborador=?`;

        const body = Object.values(colaborador)

        return new Promise((resolve, reject) => {
            Database.run(query, ...body, matricula, (error) => {
                if (!error) {
                    resolve(`Colaborador alterado com sucesso.`)
                } else {
                    reject(`Não foi possível alterar os campos do colaborador: ${error.message}`);
                }
            })
        })
    }

    static descadastrarColaborador(matricula) {
        const query = `DELETE FROM colaboradores WHERE matricula_colaborador=?`;

        return new Promise((resolve, reject) => {

            Database.run(query, matricula, (error) => {
                if (!error) {
                    resolve(`Colaborador matrícula ${matricula} excluído com sucesso.`);
                } else {
                    reject(`Colaborador matrícula ${matricula} não encontrado.`)
                }
            })

        })
    }

    static limparColaboradores() {
        const query = `TRUNCATE TABLE colaboradores`;

        return new Promise((resolve, reject) => {
            Database.run(query, (error) => {
                if (!error) {
                    resolve('Tabela de colaboradores limpa com sucesso.')
                } else {
                    reject(`Erro ao limpar tabela: ${error.message}`)
                }
            })
        })
    }
}

export default ColaboradoresMetodos;