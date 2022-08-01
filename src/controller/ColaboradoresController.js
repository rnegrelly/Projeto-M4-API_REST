import ColaboradoresModel from "../model/ColaboradoresModel.js";
import ColaboradoresMetodos from "../DAO/ColaboradoresMetodos.js";

class ColaboradoresController {
  static rotas(app) {

    app.get("/colaboradores", async (req, res) => {
        const response = await ColaboradoresMetodos.listarColaboradores();
        res.status(200).json(response);
    })

    app.get("/colaboradores/:matricula_colaborador", async (req, res) => {
        try{
          const matricula = req.params.matricula_colaborador;
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
        const colaborador = new ColaboradoresModel(...Object.values(req.body));
        if (!colaborador) {
          res.status(204).json(`Sem retorno para o endereço informado.`)
        }
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

    app.patch("/colaboradores/:matricula_colaborador", async (req, res) => {
      try{
        const matricula = req.params.matricula_colaborador;
        const envio = Object.values(req.body);
        const response = await ColaboradoresMetodos.alterarCamposColaborador(envio, matricula);
        res.status(200).json(response);
      } catch(error) {
        res.status(400).send(error);
      }
    })

    app.delete("/colaboradores/:matricula_colaborador", async (req, res) => {
      try{
        const matricula = req.params.matricula_colaborador;
        const response = await ColaboradoresMetodos.descadastrarColaborador(matricula);
        res.status(202).json(response);
      } catch(error) {
        res.status(404).json(`Impossível descadastrar colaborador: ${error}`);
      }
    })

  }

}

export default ColaboradoresController;