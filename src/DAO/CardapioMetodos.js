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

  static listarCategoriaCardapio() {
    //metodo que busque o item de uma dar 3 categorias: pizzas doces, pizzas salgadas, bebidas
  }

  static buscarSaborCardapio() {
    //metodo que retorne um item pizza por sabor
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