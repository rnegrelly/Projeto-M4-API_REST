import ColaboradoresModel from "../model/ColaboradoresModel.js";
import ColaboradoresMetodos from "../DAO/ColaboradoresMetodos.js";

class ColaboradoresController {
  static rotas(app) {

    app.get("/colaboradores", async (req, res) => {
      try{
        const response = await ColaboradoresMetodos.listarColaboradores();
        res.status(200).json(response)
      } catch(error) {
        throw new Error(res.status(400).send(`Erro ao acessar o endereço: ${error}`));
      }
    })

    app.get("/colaboradores/:matricula_colaborador", async (req, res) => {
      try{
        const matricula = req.params.matricula_colaborador;
        const response = await ColaboradoresMetodos.listarColaboradoresPorMatricula(matricula);
        res.status(200).json(response);
      } catch(error) {
          if (matricula != number){
            res.status(404).end({
              Error: 'Erro ao buscar id no endereço informado.',
              msg: error
            })
          }
        }
    })

    app.post("/colaboradores", async (req, res) => {
      try{
        const colaborador = new ColaboradoresModel(...Object.values(req.body));
        const response = await ColaboradoresMetodos.cadastrarColaboradores(colaborador);
      res.status(200).json(response);
      } catch(error) {
        res.status(400).send(`${error}`);
      }
    })

    app.put("/colaboradores/:matricula_colaborador", async (req, res) => {
      try{
        const matricula = req.params.matricula_colaborador;
        const colaborador = new ColaboradoresModel(...Object.values(req.body));
        const response = await ColaboradoresMetodos.atualizarColaboradores(colaborador, matricula);
        res.status(201).json(response);
      } catch(error) {
        res.status(404).json(`${error}`)
      }
    })

    app.patch("/colaboradores/:matricula_colaborador", async (req, res) => {
      const matricula = req.params.matricula_colaborador;
      const envio = Object.values(...req.body);
      try{
        const colaboradorBanco = await ColaboradoresMetodos.listarColaboradoresPorMatricula(matricula);
        if (!colaboradorBanco){
          res.status(404).json('Colaborador não encontrado.');
        }
        const alteraColaborador = new ColaboradoresModel(
          envio.nome_colaborador || colaboradorBanco.nome_colaborador,
          envio.cpf_colaborador || colaboradorBanco.cpf_colaborador,
          envio.endereco_colaborador || colaboradorBanco.endereco_colaborador,
          envio.cargo_colaborador ||colaboradorBanco.cargo_colaborador,
          envio.email.colaborador || colaboradorBanco.email.colaborador,
          envio.telefone_colaborador || colaboradorBanco.telefone_colaborador,
          envio.turno_colaborador || colaboradorBanco.turno_colaborador,
          envio.salario_colaborador || colaboradorBanco.salario_colaborador,
          envio.admissao_colaborador || colaboradorBanco.admissao_colaborador,
          envio.demissao_colaborador || colaboradorBanco.demissao_colaborador
        )
        const colaboradorAlterado = alteraColaborador;
        try{
          if (colaboradorAlterado.matricula_colaborador){
          
        }
      } catch(error){

      }
        
      } catch(error) {

      }
      
    })

    app.delete("/colaboradores/:parametro", () => {

    })

  }

}

export default ColaboradoresController;