import { Database } from '../infra/dbrestaurante.js';
import funcionariosModel from '../models/funcionariosModel.js';
import funcionariosMetodos from '../utils/funcionariosMetodos.js';

class funcionariosController{
    static rotas(app){
        app.get('/funcionarios', (req, res) => {
            return Database.funcionarios;
        })

        app.post('/funcionarios', (req, res) => {
            const funcionarios = new funcionariosModel(...Object.values(req.body))
            const response = funcionariosMetodos.incluirFuncionarios();
            res.status(200).json(response)
        })
    }
}

export default funcionariosController;