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

  static listarCategoriaCardapio(categoria) {

    const query = `SELECT * FROM cardapio WHERE categoria_cardapio = ?`;

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

  static buscarSaborCardapio(sabor) {
    const query = `SELECT * FROM cardapio WHERE sabor_cardapio = ?`;

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

  static InserirItemCardapio(item) {
    //insere item no cardapio
    const query = `
      INSERT INTO cardapio 
      (id_cardapio,
      categoria_cardapio, 
      sabor_cardapio, 
      ingredientes_cardapio, 
      tamanho_cardapio, 
      valor_cardapio)
      VALUES (?,?,?,?,?,?)
      `

    const body = Object.values(item);

    return new Promise((resolve, reject) => {
        Database.run(query, [...body], (error) => {
            if (!error){
                resolve('Item do cardápio cadastrado com sucesso.')
            } else {
                reject(`Não foi possível efetuar o cadastro do item no cardápio: ${error.message}`);
            }
        })
    })
  }

  static alterarItemCardapio() {
    //altera item do cardapio, precisa ser o objeto completo
  }

  static alteraValorCardapio() {
    //altera valor de item do cardapio, fazendo a busca por id
  }

  static deletaItemCardapio(id) {
    //deleta item do cardapio
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