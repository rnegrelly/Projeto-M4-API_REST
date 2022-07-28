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

    app.post("/colaboradores", async (req, res) => {
      try{
        const colaborador = new ColaboradoresModel(...Object.values(req.body));
        const response = await ColaboradoresMetodos.cadastrarColaboradores(colaborador);
      res.status(200).json(response);
      } catch(error) {
        res.status(400).send(`${error}`);
      }
    })

    app.put("/colaboradores/:id", async (req, res) => {
      try{
        const matricula = req.params.id;
        const colaborador = new ColaboradoresModel(...Object.values(req.body));
        const response = await ColaboradoresMetodos.atualizarColaboradores(colaborador, matricula);
        res.status(201).json(response);
      } catch(error) {
        res.status(404).json(`${error}`)
      }
      
    })

    app.patch("/colaboradores/:parametro", () => {

    })

    app.delete("/colaboradores/:parametro", () => {

    })

  }

}

export default ColaboradoresController;