import Database from "../infra/dbrestaurante.js";
import DatabaseMetodos from "./DatabaseMetodos.js";

class CardapioMetodos extends DatabaseMetodos {

  static listar() {

    const query = `SELECT * FROM cardapio`

    return new Promise((resolve, reject)=> {
      Database.all(query, (e, resultado)=>{
          if(e){
              reject(e.message)
          } else {
              resolve(resultado)
          }
      })
    })
  }

  static async listarResumo() {

    const query = `SELECT sabor_cardapio, tamanho_cardapio, valor_cardapio FROM cardapio`
    
    return new Promise((resolve, reject)=> {
      Database.all(query, (e, resultado)=>{
          if(e){
            reject(e.message)
          } else {
            resolve(resultado)
          }
      })
    })
  }

  static async listarPorSabor(sabor) {

    const query = `SELECT * FROM cardapio WHERE sabor_cardapio = ?`
    
    return new Promise((resolve, reject)=> {

      Database.all(query, sabor, (e, resultado)=>{
          if(e){
            reject(e.message)
          } else {
            resolve(resultado)
          }
      })
    })
  }

  static async listarPorId(id) {

    const query = `SELECT * FROM cardapio WHERE id_cardapio = ?`
    
    return new Promise((resolve, reject)=> {

      Database.all(query, id, (e, resultado)=>{
          if(e){
            reject(e.message)
          } else {
            resolve(resultado)
          }
      })
    })
  }

  static async listarPorCategoria(categoria) {
    const query = `SELECT * FROM cardapio WHERE categoria_cardapio = ?`
    return new Promise((resolve, reject)=> {
      Database.all(query, categoria, (e, resultado)=>{
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

    const idValido = await this.listarPorId(id)
          
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
    
    const idValido = await this.listarPorId(id)
       
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