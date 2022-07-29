import CardapioMetodos from "../DAO/CardapioMetodos.js"
import CardapioModel from "../model/CardapioModel.js";


class CardapioController {

  static rotas(app){

    app.get("/cardapio",  async (req, res) => {

      const response = await CardapioMetodos.listarCardapio()
      res.status(200).json(response)

    })

    app.get("/cardapio/:sabor",  async (req, res) => {
      const response = await CardapioMetodos.listarCardapioPorSabor(req.params.sabor)
      res.status(200).json(response)

    })

    app.post("/cardapio", async (req, res) => {

      const item = new CardapioModel(...Object.values(req.body))
      const response = await CardapioMetodos.insereItemCardapio(item)
      res.status(200).json(response)

    })

    app.put("/cardapio/:id", async (req, res) =>{
      
      const item = new CardapioModel(...Object.values(req.body))
      const response = CardapioMetodos.atualizarItemCardapio(item, req.params.id)
      res.status(201).json(response)

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