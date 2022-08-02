import Database from "../infra/dbrestaurante.js";

class CardapioMetodos {

  static listarCardapio() {

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

  static listarCardapioPorSabor(sabor) {
    const query = `SELECT * FROM cardapio WHERE sabor_cardapio = ?`

    return new Promise((resolve, reject)=> {
      Database.get(query, sabor, (e, resultado)=>{
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
            resolve({error: false, message: "Cadastrado com sucesso!"})
          }
        })
      })
    
  }

  static atualizarItemCardapio(entidade, id){
    
    const query = `UPDATE cardapio SET 
      id_cardapio = ?, 
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

  static deletarItemCardapioPorId(id) {
    const query = `DELETE FROM cardapio WHERE id_cardapio = ?`
    
    return new Promise((resolve, reject) => {
      Database.run(query, id, (e)=>{
          if(e){
              reject(e.message)
          } else {
              resolve({erro: false, message: `Registro com Id ${id} deletado com sucesso`})
          }
      })
    })
  }
}

export default CardapioMetodos;