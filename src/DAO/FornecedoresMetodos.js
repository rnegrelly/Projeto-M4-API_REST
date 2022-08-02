import Database from "../infra/dbrestaurante.js";

class FornecedoresMetodos {

    static async fornecedoresInserir(fornecedores) {
      const query = `INSERT INTO fornecedor(id_fornecedor, nome_fornecedor, cnpj_fornecedor, endereco_fornecedor, ramo_fornecedor, email_fornecedor, telefone_fornecedor ) VALUES (?,?,?,?,?,?)`;
      const resposta = await this.inserir(fornecedores, query);
      return resposta;
    }

    static async fornecedoresListar() {
      const query = `SELECT * FROM fornecedor`;
      const resposta = await this.fornecedoresTodosListar(query);
      return resposta;
    }
    
    static async fornecedoresListarId(id_fornecedores) {
      const query = `SELECT * FROM fornecedor WHERE id = ?`;
      const resposta = await this.fornecedoresIdListar(id_fornecedores, query);
      return resposta;
    }
    
    static async fornecedoresDelete(id_fornecedores) {
      const query = `DELETE FROM fornecedor WHERE id = ?`;
      const resposta = await this.fornecedoresIdDeletar(id_fornecedores, query);
      return resposta;
    }
  
    static async fornecedoresUpdate(id_fornecedor, nome_fornecedor) {
      const query = `UPDATE fornecedor SET 
        id_fornecedor = ?,
        nome_fornecedor = ?,
        cnpj_fornecedor = ?,
        endereco_fornecedor = ?,
        ramo_fornecedor = ?,
        email_fornecedor = ?,
        telefone_fornecedor = ?
        WHERE id = ?`
  
      const resposta = await this.fornecedoresIdUpdate(id_fornecedor, nome_fornecedor, query);
      return resposta;
    }
  }
export default FornecedoresMetodos;