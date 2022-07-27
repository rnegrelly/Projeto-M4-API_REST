import { Database } from '../infra/dbrestaurante.js';

class funcionariosMetodos{
    static visualizarFuncionarios(){

    }

    static visualizarFuncionariosPorSalario(){

    }

    static visualizarFuncionariosPorTurno(){

    }

    static visualizarFuncionariosPorSetor(){

    }

    static visualizarFuncionariosPorCargo(){

    }

    static visualizarFuncionariosPorMatricula(){

    }

    static incluirFuncionarios(funcionario){
        Database.funcionarios = [...Database.funcionarios, funcionario]
        return Database.funcionarios;
    }

    static atualizarFuncionarios(){

    }

    static deletarFuncionariosPorMatricula(){

    }

    static deletarFuncionariosPorNome(){

    }
}

export default funcionariosMetodos;