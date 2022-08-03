import ValidacoesGerais from './ValidacoesGerais.js';

class ValidacoesColaboradores extends ValidacoesGerais{    
    static validaNome(nome){
        if(!nome.length >= 3){
            console.log('error 3 digitos');
        } else if (/^\d+$/.test(nome)){
            console.log('error tipo string')
        }
    }

    static validaCpf(cpf){
        return cpf.length === 14 ? true : false;
    }

    static validaCargo(cargo){
        return cargo.length >= 6 ? true : false;
    }

    static validaSalario(salario){
        const lista = '0123456789.,R$ ';
        
        return salario.split('').every(salario => lista.includes(salario))
    }
}

// const cpf = '014.578.963-40'

// console.log(cpf.length)

console.log(ValidacoesColaboradores.validaSalario('R$ l1643,47'))