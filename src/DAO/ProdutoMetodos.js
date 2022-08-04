import Database from "../infra/dbrestaurante.js";

class ProdutosMetodos {
  static cadastrarProduto(produto) {
    const query = `INSERT INTO produtos 
    (
        codigoDeBarras_produto,
        nome_produto,
        quantidade_produto,
        dataDeCompra_produto,
        id_fornecedor)
    VALUES (?,?,?,?,?)`;

    const content = Object.values(produto);

    return new Promise((resolve, reject) => {
      Database.run(query, ...content, (error) => {
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

  static pesquisarProdutoPorEAN(codigoDeBarras) {
    const query = `SELECT * FROM produtos WHERE codigoDeBarras_produto=${codigoDeBarras}`;

    return new Promise((resolve, reject) => {
      Database.all(query, (error, response) => {
        if (!error) {
          const [newResponse] = response;
          resolve(newResponse);
        } else {
          reject(error.message);
        }
      });
    });
  }

  static pesquisarProdutoPorNome(nome) {
    const query = `SELECT * FROM produtos WHERE nome_produto LIKE '%${nome}%'`;

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

  static pesquisarProdutoPorFornecedor(id_fornecedor) {
    const query = `SELECT * FROM produtos WHERE id_fornecedor=${id_fornecedor}`;

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

  static atualizarProduto(ean, produto) {
    const query = `UPDATE produtos SET 
    codigoDeBarras_produto = ?,
    nome_produto = ?,
    quantidade_produto = ?,
    id_fornecedor = ?,
    dataDeCompra_produto = ?
    WHERE codigoDeBarras_produto = ?`;

    const content = Object.values(produto);

    return new Promise((resolve, reject) => {
      Database.run(query, ...content, ean, (error) => {
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
