import Database from "../infra/dbrestaurante.js";

class CriaTabelas {
  static criaTabelaClientes() {
    const query = `
      CREATE TABLE IF NOT EXISTS clientes(
      id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_cliente VARCHAR,
      cpf_cliente VARCHAR,
      endereco_cliente VARCHAR,
      email_cliente VARCHAR,
      telefone_cliente VARCHAR
      )
    `;
    return new Promise((resolve, reject) => {
      Database.run(query, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Tabela Cliente criada com sucesso!");
        }
      });
    });
  }

  static criaTabelaColaboradores() {
    const query = `
      CREATE TABLE IF NOT EXISTS colaboradores(
      matricula_colaborador INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_colaborador VARCHAR,
      cpf_colaborador VARCHAR,
      endereco_colaborador VARCHAR,
      cargo_colaborador VARCHAR,
      email_colaborador VARCHAR,
      telefone_colaborador VARCHAR,
      turno_colaborador VARCHAR,
      salario_colaborador VARCHAR,
      admissao_colaborador VARCHAR,
      demissao_colaborador VARCHAR
      )
    `;
    return new Promise((resolve, reject) => {
      Database.run(query, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Tabela Colaboradores criada com sucesso!");
        }
      });
    });
  }

  static criaTabelaCardapio() {
    const query = `
      CREATE TABLE IF NOT EXISTS cardapio(
      id_cardapio INTEGER PRIMARY KEY AUTOINCREMENT,
      categoria_cardapio VARCHAR,
      sabor_cardapio VARCHAR,
      ingredientes_cardapio VARCHAR,
      tamanho_cardapio VARCHAR,
      valor_cardapio VARCHAR
      )
    `;
    return new Promise((resolve, reject) => {
      Database.run(query, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Tabela Cardápio criada com sucesso!");
        }
      });
    });
  }

  static criaTabelaFornecedores() {
    const query = `
      CREATE TABLE IF NOT EXISTS fornecedores(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_fornecedor VARCHAR,
      cnpj_fornecedor VARCHAR,
      endereco_fornecedor VARCHAR,
      ramo_fornecedor VARCHAR,
      email_fornecedor VARCHAR,
      telefone_fornecedor VARCHAR
      )
    `;
    return new Promise((resolve, reject) => {
      Database.run(query, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Tabela Fornecedor criada com sucesso!");
        }
      });
    });
  }

  static criaTabelaProdutos() {
    const query = `
      CREATE TABLE IF NOT EXISTS produtos(
      codigoDeBarras_produto VARCHAR PRIMARY KEY,
      nome_produto VARCHAR,
      dataDeFabricacao_produto DATETIME,
      dataDeVencimento_produto DATETIME,
      valorUnitario_produto VARCHAR,
      dataDeCompra_produto DATETIME,
      id_fornecedor INTEGER,
      CONSTRAINT fk_fornecedor FOREIGN KEY (id_fornecedor) REFERENCES fornecedor (id)
      )
    `;
    return new Promise((resolve, reject) => {
      Database.run(query, (e) => {
        if (e) {
          reject(e.message);
        } else {
          resolve("Tabela Produto criada com sucesso!");
        }
      });
    });
  }
}

export default CriaTabelas;
