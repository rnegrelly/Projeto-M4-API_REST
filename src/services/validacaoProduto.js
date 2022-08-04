import ValidacoesGerais from "./ValidacoesGerais.js";

class ValidacaoProduto extends ValidacoesGerais {
  static validaProduto(produto) {
    const codigoDeBarras =
      !!produto.codigoDeBarras &&
      this.ValidaStringNaoVazia(produto.codigoDeBarras) &&
      produto.codigoDeBarras.length <= 13;
    if (!codigoDeBarras) {
      return false;
    }
    const nome =
      !!produto.nome &&
      this.ValidaStringNaoVazia(produto.nome) &&
      produto.nome.length >= 3;
    if (!nome) {
      return false;
    }
    const fornecedor =
      !!produto.fornecedor && this.ValidaSeNumero(String(produto.fornecedor));
    if (!fornecedor) {
      return false;
    }

    const quantidade =
      !!produto.quantidade && this.ValidaSeNumero(String(produto.quantidade));
    if (!quantidade) {
      return false;
    }

    const dataDeCompra = new Date(produto.dataDeCompra);
    const seData =
      !!produto.dataDeCompra &&
      !!dataDeCompra &&
      dataDeCompra instanceof Date &&
      !isNaN(dataDeCompra);
    if (!seData) {
      return false;
    }

    return true;
  }
}

export default ValidacaoProduto;
