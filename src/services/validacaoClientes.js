export default class ValidaCliente{

    static validaNome(nome){
        return nome.length >= 3
    }

    static validaEmail(email){
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return regex.test(email)
    }


    static validaTelefone(telefone){
        const tel = parseInt(telefone)
        return tel == telefone
    }


}