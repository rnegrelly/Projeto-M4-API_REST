class ProdutoModel {
  constructor(codigoDeBarras, nome, fornecedor, dataDeCompra, quantidade) {
    this.codigoDeBarras = codigoDeBarras;
    this.nome = nome;
    this.fornecedor = fornecedor;
    this.dataDeCompra = dataDeCompra;
    this.quantidade = quantidade;
  }
}

export default ProdutoModel;
