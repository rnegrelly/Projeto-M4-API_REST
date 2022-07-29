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

    app.patch("/cardapio/:id", async (req, res) => {
      const item = req.body
        try {
            const novoValor = await CardapioMetodos.atualizaValorItemCardapio(item, req.params.id)
            res.status(200).json(novoValor)
            res.status(200).send({rolou:"rolou muito"})
        } catch (error) {
            res.status(400).json({
              "error": true,
              "message": error.message
            })
        }
    })

    app.delete("/cardapio/:id", async (req, res) => {
      try {                
        const item = await CardapioMetodos.deletarItemCardapioPorId(req.params.id)
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