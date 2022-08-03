import ValidacoesGerais from "./ValidacoesGerais.js";

class CardapioValidacoes extends ValidacoesGerais {

  static verificaCategoria (categoria) {
    const categorias = ['Bebida', 'Pizza Salgada', 'Pizza Doce']
    const valida = categorias.includes(categoria)
    return valida
  }

  
  static validaCategoria (categoria) {
    
    const tipo = this.ValidaStringNaoVazia(categoria)
    const categoriaValida = this.verificaCategoria(categoria)

    if ((tipo) && (categoriaValida)) {
      return true
    }
  }

  static validaTamanho (tamanho) {
    const tamanhos = ['Brotinho', 'Média', 'Grande', 'Família']
    const valida = tamanhos.includes(tamanho)
    return valida
  }

  

  


}

export default CardapioValidacoes;