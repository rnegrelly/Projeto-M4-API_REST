class FornecedoresModel {
    constructor({ id_fornecedor, nome_fornecedor, cnpj_fornecedor, endereco_fornecedor, ramo_fornecedor, email_fornecedor, telefone_fornecedor}){
        this.id_fornecedor = id_fornecedor;
        this.nome_fornecedor = nome_fornecedor;
        this.cnpj_fornecedor = cnpj_fornecedor;
        this.endereco_fornecedor = endereco_fornecedor;
        this.ramo_fornecedor = ramo_fornecedor;
        this.email_fornecedor = email_fornecedor;
        this.telefone_fornecedor = telefone_fornecedor;
    }
}

export default FornecedoresModel