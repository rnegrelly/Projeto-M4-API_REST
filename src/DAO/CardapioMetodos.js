import Database from "../infra/dbrestaurante.js";
import DatabaseMetodos from "./DatabaseMetodos.js";

class CardapioMetodos extends DatabaseMetodos {

  static listarCardapioPorSabor(sabor) {
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

  static listarCardapioPorCategoria(categoria) {
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

  static listarCardapioPorId(id) {
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


  static listarCardapioResumido(query) {
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

  static atualizarItemCardapio(entidade, id){
    
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
          resolve(result)
        }
      })
    })

  }

  static atualizaValorItemCardapio(item, id) {
    const query = `UPDATE cardapio SET 
      valor_cardapio = ?
      WHERE id_cardapio = ?`
      
    const body = Object.values(item)
    
    return new Promise((resolve, reject)=>{
      Database.run(query,[...body, id], (e, result)=>{
        if(e){
          reject(e.message)
        } else {
          resolve(result)
        }
      })
    })
  }

  static async deletarItemCardapioPorId(id) {
    
    const idValido = await this.listarCardapioPorId(id)
    
   
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

    }    
  }
}

export default CardapioMetodos;