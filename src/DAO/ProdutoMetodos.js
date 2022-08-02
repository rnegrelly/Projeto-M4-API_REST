import Database from "../infra/dbrestaurante.js";

class ProdutosMetodos {
  static cadastrarProduto(produto) {
    const query = `INSERT INTO produtos 
    (
        codigoDeBarras_produto,
        nome_produto,
        dataDeFabricacao_produto,
        dataDeVencimento_produto,
        id_fornecedor,
        valorUnitario_produto,
        dataDeCompra_produto)
    VALUES (?,?,?,?,?,?,?)`;

    const body = Object.values(produto);

    return new Promise((resolve, reject) => {
      Database.run(query, ...body, (error) => {
        if (!error) {
          resolve("Produto cadastrado com sucesso.");
        } else {
          reject(
            `Não foi possível efetuar o cadastro do produto: ${error.message}`
          );
        }
      });
    });
  }

  static listarProdutos() {
    const query = `SELECT * FROM produtos`;

    return new Promise((resolve, reject) => {
      Database.all(query, (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error.message);
        }
      });
    });
  }

  static pesquisarProduto(codigoDeBarras) {
    const query = `SELECT * FROM produtos WHERE codigoDeBarras_produto=${codigoDeBarras}`;

    return new Promise((resolve, reject) => {
      Database.all(query, (error, response) => {
        if (!error) {
          resolve([response]);
        } else {
          reject(error.message);
        }
      });
    });
  }

  static atualizarColaboradores(id) {
    const query = `UPDATE colaboradores SET 
    codidoDeBarra_produto = ?,
    nome_produto = ?,
    dataDeFabricacao_produto = ?,
    dataDeVencimento_produto = ?,
    fornecedor_produto = ?,
    valorUnitario_produto = ?,
    dataDeCompra_produto = ?
    WHERE codidoDeBarra_produto = ?`;

    return new Promise((resolve, reject) => {
      Database.run(query, id, (error) => {
        if (!error) {
          resolve("Produto atualizado com sucesso.");
        } else {
          reject(
            `Não foi possível atualizar os dados do produto: ${error.message}`
          );
        }
      });
    });
  }

  static apagarProduto(codigoDeBarras) {
    const query = `DELETE FROM produtos WHERE codigoDeBarras_produto=${codigoDeBarras}`;

    return new Promise((resolve, reject) => {
      Database.all(query, (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error.message);
        }
      });
    });
  }
}
export default ProdutosMetodos;
