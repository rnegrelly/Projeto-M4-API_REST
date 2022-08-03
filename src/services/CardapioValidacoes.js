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
    const tamanhos = ['Brotinho', 'Média', 'Grande', 'Família', 'Lata', "1 litro", '2 litros', '400ml',]
    const valida = tamanhos.includes(tamanho)
    return valida
  }

  static validaNovoItem (sabor, categoria, valor, ingredientes, tamanho) {
    const saborValido = this.ValidaStringNaoVazia(sabor)
    const categoriaValida = this.validaCategoria(categoria)
    const precoValido = this.ValidaSeNumero(valor)
    const ingredValido = this.ValidaStringNaoVazia(ingredientes)
    const tamanhoValido = this.validaTamanho(tamanho)

    if (categoriaValida && saborValido && precoValido && ingredValido && tamanhoValido) { 
      return true 
    } else {
      return false
    }

  }

}

export default CardapioValidacoes;