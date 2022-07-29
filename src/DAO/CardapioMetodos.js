import Database from "../infra/dbrestaurante.js";

class CardapioMetodos {

  static listarCardapio() {

    const query = `SELECT * FROM cardapio`;

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

  static InserirItemCardapio() {
    //insere item no cardapio
  }

  static alterarItemCardapio() {
    //altera item do cardapio, precisa ser o objeto completo
  }

  static alteraValorCardapio() {
    //altera valor de item do cardapio, fazendo a busca por id
  }

  static deletaItemCardapio() {
    //deleta item do cardapio
  }
}

export default CardapioMetodos;