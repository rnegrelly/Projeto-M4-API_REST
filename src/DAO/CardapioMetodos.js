import Database from "../infra/dbrestaurante.js";
import DatabaseMetodos from "./DatabaseMetodos.js";

class CardapioMetodos extends DatabaseMetodos {

  static async listarPorParametro(query, valor) {
    
    

    return new Promise((resolve, reject)=> {
      Database.all(query, valor, (e, resultado)=>{
          if(e){
            reject(e.message)
          } else {
            resolve(resultado)
          }
      })
    })
  }

   static insereItemCardapio(item) {

    const query = `INSERT INTO cardapio (categoria_cardapio, sabor_cardapio, ingredientes_cardapio, tamanho_cardapio, valor_cardapio) VALUES (?,?,?,?,?)`

    const body = Object.values(item)

      return new Promise((resolve, reject)=>{
        Database.run(query, [...body], (e)=>{
          if(e){
            reject(e.message)
          } else {
            resolve({message: "Cadastrado com sucesso!"})
          }
        })
      })
    
  }

  static async atualizarItemCardapio(entidade, id){

    const query = `SELECT * FROM cardapio WHERE id_cardapio = ?`
    const idValido = await this.listarPorParametro(query, id)
          
    if (idValido[0].id_cardapio > 0) {
    
      const query = `UPDATE cardapio SET 
      categoria_cardapio = ?, 
      sabor_cardapio = ?,
      ingredientes_cardapio = ?,
      tamanho_cardapio = ?, 
      valor_cardapio = ? 
      WHERE id_cardapio = ?`
      
      const body = Object.values(entidade)
    
      return new Promise((resolve, reject)=>{
        Database.run(query,[...body, id], (e, result)=>{
          if(e){
            reject(e.message)
          } else {
            resolve({message: `Registro com Id ${id} atualizado com sucesso`})
          }
        })
      })

    } else {
      throw new Error("Id não encontrado")
    }
  }

  static async deletarItemCardapioPorId(id) {
    
    const query = `SELECT * FROM cardapio WHERE id_cardapio = ?`
    const idValido = await this.listarPorParametro(query, id)
       
    if (idValido[0].id_cardapio > 0) {
      const query = `DELETE FROM cardapio WHERE id_cardapio = ?`
       
      return new Promise((resolve, reject) => {
      Database.run(query, id, (e)=>{
          if(e){
              reject(e.message)
          } else {
              resolve({message: `Registro com Id ${id} deletado com sucesso`})
          }
      })
      }) 

    } else {
      throw new Error("Id não em contrado")
    }    
  }
}

export default CardapioMetodos;