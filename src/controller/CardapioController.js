import CardapioMetodos from "../DAO/CardapioMetodos.js";
import CardapioModel from "../model/CardapioModel.js";


class CardapioController {

  static rotas(app){

      app.get("/cardapio", async (req, res) => {
        //recupera todos os itens do cardapio
        try{
          const response = await CardapioMetodos.listarCardapio();
          res.status(200).json(response)
        } catch(error) {
          throw new Error(res.status(400).send(`Erro ao acessar o endereço: ${error}`));
        }
      })

      app.get("/cardapio/:categoria_cardapio", async (req, res) => {
        //listar cardapio por categoria
        try{
          const response = await CardapioMetodos.listarCategoriaCardapio(req.params.categoria_cardapio);
          res.status(200).json(response)
        } catch(error) {
          throw new Error(res.status(400).send(`Erro ao acessar o endereço: ${error}`));
        }
      })

      app.get("/cardapio/:sabor_cardapio", async (req, res) => {
        //recupera pizza por sabor
        try{
          const response = await CardapioMetodos.buscarSaborCardapio(req.params.sabor_cardapio);
          res.status(200).json(response)
        } catch(error) {
          throw new Error(res.status(400).send(`Erro ao acessar o endereço: ${error}`));
        }     
      })

      app.post("/cardapio", async (req, res) => {
        //insere novo item no cardapio
      })

      app.put("/cardapio/:parametro", async (req, res) => {
        //alterar item do cardapio, objeto inteiro
      })

      app.patch("/cardapio/:parametro", async (req, res) => {
        //alterar valor do item do cardapio
      })

      app.delete("/cardapio/:parametro", async (req, res) => {
        // deletar item do cardapio
      })

  }

}

export default CardapioController;