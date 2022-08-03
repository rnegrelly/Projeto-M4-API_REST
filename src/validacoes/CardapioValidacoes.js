import ValidacoesGerais from "./ValidacoesGerais.js";

class CardapioValidacoes extends ValidacoesGerais {

  static verificaCategoria (categoria) {
    const categorias = ['Bebida', 'Pizza Salgada', 'Pizza Doce']
    const valida = categorias.includes(categoria)
    console.log(categoria)
    return valida
  }

  
  static validaCategoria (categoria) {
    
    const tipo = this.ValidaStringNaoVazia(categoria)
    const categoriaValida = this.verificaCategoria(categoria)

    if ((tipo) && (categoriaValida)) {
      return true
    }
  }

  


}

export default CardapioValidacoes;