import ValidacoesGerais from './ValidacoesGerais.js';

class ValidacoesColaboradores extends ValidacoesGerais{    
    static validaSalario(salario){
        const lista = '0123456789.,R$ ';
        
        return salario.split('').every(salario => lista.includes(salario))
    }
}

export default ValidacoesColaboradores;