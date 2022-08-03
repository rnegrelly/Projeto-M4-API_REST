import Database from "../infra/dbrestaurante.js";

class FornecedoresMetodos {

    static async fornecedoresInserir(fornecedores) {
      const query = `INSERT INTO fornecedores
      (nome_fornecedor, cnpj_fornecedor, endereco_fornecedor, ramo_fornecedor, email_fornecedor, telefone_fornecedor)
      VALUES (?,?,?,?,?,?)`

      const body = Object.values(fornecedores);

      return new Promise((resolve, reject) => {
          Database.run(query, ...body, (error) => {
              if (!error) {
                  resolve('Fornecedor cadastrado com sucesso.')
              } else {
                  reject(`Não foi possível efetuar o cadastro do fornecedor: ${error.message}`);
              }
          })
      })
    }

    static async fornecedoresListar() {
      const query = `SELECT * FROM fornecedores`;
      
      return new Promise((resolve, reject) => { 
        Database.all(query,(erro, result) => {
          if (!erro) {
            resolve(result) 
          } else {
            reject(erro.message)
          }
        })
      });
    }
    
    static async fornecedoresListarId(id) {
      const query = `SELECT * FROM fornecedores WHERE id = ?`;
      
      return new Promise((resolve, reject) => {
        Database.get(query, id,(erro, result) => {
          if (!erro){
            resolve(result)
          }else{
            reject(erro.message)
          }
        })
      })
    }
    
    static async fornecedoresDelete(id) {
      const query = `DELETE FROM fornecedores WHERE id = ?`;

      return new Promise ((resolve, reject) => {
        Database.run (query, id,(erro) => {
          if (!erro){
            resolve ("Fornecedor deletado!")
          }else{
            reject(erro.message)
          }
        })
      })
    }
  
    static async fornecedoresUpdate(id, fornecedor) {
      const query = `UPDATE fornecedores SET 
        id = ?,
        nome_fornecedor = ?,
        cnpj_fornecedor = ?,
        endereco_fornecedor = ?,
        ramo_fornecedor = ?,
        email_fornecedor = ?,
        telefone_fornecedor = ?
        WHERE id = ?`

      const body = Object.values(fornecedor)
      
      return new Promise ((resolve, reject) => {
        Database.run (query, ...body, id,(erro) => {
         if (!erro){
         resolve("Fornecedor atualizado!")

           } else {
            reject(erro.message)
    }
  })
}
)
    }
  }
export default FornecedoresMetodos;