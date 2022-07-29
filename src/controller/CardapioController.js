import CardapioMetodos from "../DAO/CardapioMetodos.js"
import CardapioModel from "../model/CardapioModel.js";


class CardapioController {

  static rotas(app){

    app.get("/cardapio",  async (req, res) => {

      const response = await CardapioMetodos.listarCardapio()
      res.status(200).json(response)

    })

      app.get("/cardapio/:categoria", async (req, res) => {
        //listar cardapio por categoria
        try{
          const response = await CardapioMetodos.listarCardapio()
          res.status(200).json(response)
        } catch(error) {
          throw new Error(res.status(400).send(`Erro ao acessar o endereço: ${error}`));
        }
      })

      app.get("/cardapio/:sabor", async (req, res) => {
        //recupera pizza por sabor
        try{
          const response = await CardapioMetodos.buscarSaborCardapio(req.params.sabor);
          res.status(200).json(response)
        } catch(error) {
          throw new Error(res.status(400).send(`Erro ao acessar o endereço: ${error}`));
        }     
      })

      app.post("/cardapio", async (req, res) => {
        //insere novo item no cardapio
        try{
          const item_cardapio = new CardapioModel(...Object.values(req.body));
          const response = await CardapioMetodos.InserirItemCardapio(item_cardapio);
        res.status(200).json(response);
        } catch(error) {
          res.status(400).send(`${error}`);
        }
      })

      app.put("/cardapio/:parametro", async (req, res) => {
        //alterar item do cardapio, objeto inteiro
      })

      app.patch("/cardapio/:parametro", async (req, res) => {
        //alterar valor do item do cardapio
      })

      app.delete("/cardapio/:id", async (req, res) => {
        // deletar item do cardapio
        try {                
          const item = await CardapioMetodos.deletaItemCardapio(req.params.id)
          if(!item){
              throw new Error("Item não encontrado")
          }
          res.status(200).json(item)
      } catch (error) {    
          res.status(404).json({Error: error.message})
      }
      })

  }

}

export default CardapioController;