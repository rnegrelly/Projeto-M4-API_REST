import ValidacoesGerais from "./ValidacoesGerais.js";

class FornecedoresValidacao extends ValidacoesGerais {
    
    static checkNome(nome){
            if (nome <= 5) {
            return false
        } else{
            return true
            }
        }  

    static checkTelefone(telefone){
        if (telefone < 11){
            return false
        } else {
            return true
        }
    }

    static checkCnpj(cnpj){
        if (cnpj < 14){
            return false
        } else {
            return true
        }
    }
}

export default FornecedoresValidacao