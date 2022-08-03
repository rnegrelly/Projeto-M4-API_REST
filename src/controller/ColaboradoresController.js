import ColaboradoresModel from "../model/ColaboradoresModel.js";
import ColaboradoresMetodos from "../DAO/ColaboradoresMetodos.js";

class ColaboradoresController {
  static rotas(app) {

    app.get("/colaboradores", async (req, res) => {
        const response = await ColaboradoresMetodos.listarColaboradores();
        res.status(200).json(response);
    })

    app.get("/colaboradores/:id", async (req, res) => {
        try{
          const matricula = req.params.id;
          const response = await ColaboradoresMetodos.listarColaboradoresPorMatricula(matricula);
          if(response) {
            res.status(200).json(response);
          } else {
            res.status(404).json(`Colaborador matrícula ${matricula} não existe.`);
          }
        } catch(error){
          throw new Error(error);
        }
    })

    app.post("/colaboradores", async (req, res) => {
      try{
        if(Object.values(...req.body) === null){
          res.status(400).json({
            error: 'Requisição inválida.',
            message: 'Corpo da requisição inválida ou incompleta'
          })
        }
        const colaborador = new ColaboradoresModel(...Object.values(req.body));
        console.log(Object.values(req.body))
        
        const response = await ColaboradoresMetodos.cadastrarColaboradores(colaborador);
        res.status(200).json(response);
      } catch(error){
        res.status(400).json(error);
      }
    })

    app.put("/colaboradores/:matricula_colaborador", async (req, res) => {
        try{
          const matricula = req.params.matricula_colaborador;
          const colaborador = new ColaboradoresModel(...Object.values(req.body));
          const response = await ColaboradoresMetodos.atualizarColaboradores(colaborador, matricula);
          if(response){
            res.status(201).json(response);
          } else {
            res.status(404).json(`Colaborador matrícula ${matricula} não existe.`);
          }
        } catch(error){
          res.status(403).json({error: error})
        }
    })

    app.delete("/colaboradores/:id", async (req, res) => {
      try{
        const matricula = req.params.id;
        const response = await ColaboradoresMetodos.deletarColaborador(matricula);
        res.status(202).json(response);
      } catch(error) {
        res.status(404).json({msg: 'Erro ao excluir colaborador',
        error: error});
      }
    })

    app.delete("/colaboradores", async (req,res) => {
      try{
        const response = await ColaboradoresMetodos.limparColaboradores();
        res.status(202).json(response);
      } catch(error) {
        res.status(400).json({
          error: true,
          Mensagem: 'Endereço não encontrado.'
        })
      }
    })

  }

}

export default ColaboradoresController;