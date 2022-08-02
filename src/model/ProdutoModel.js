class ProdutoModel {
  constructor(
    codigoDeBarras,
    nome,
    dataDeFabricacao,
    dataDeVencimento,
    fornecedor,
    valorUnitario,
    dataDeCompra
  ) {
    this.codigoDeBarras = codigoDeBarras;
    this.nome = nome;
    this.dataDeFabricacao = dataDeFabricacao;
    this.dataDeVencimento = dataDeVencimento;
    this.fornecedor = fornecedor;
    this.valorUnitario = valorUnitario;
    this.dataDeCompra = dataDeCompra;
  }
}

export default ProdutoModel;
