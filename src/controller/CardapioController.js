import CardapioMetodos from "../DAO/CardapioMetodos.js"
import CardapioModel from "../model/CardapioModel.js";
import CardapioValidacoes from "../services/CardapioValidacoes.js"


class CardapioController {

  static rotas(app){

    app.get("/cardapio/tudo",  async (req, res) => {
      
      try {
        const query = `SELECT * FROM cardapio`
        const response = await CardapioMetodos.listar(query)
        res.status(200).json(response)
      } catch {
        res.status(400).send("Verique sua requisição")
      }  

    })

    app.get("/cardapio/:sabor",  async (req, res) => {
      try {

        const saborValido = CardapioMetodos.ValidaStringNaoVazia(req.body.sabor_cardapio)

        if (saborValido) {
          const response = await CardapioMetodos.listarCardapioPorSabor(req.params.sabor)
          res.status(200).json(response)
        } else {
          res.status(200).json({"erro":"Sabor informado não é valido"})
        }
        
      } catch {
        res.status(400).send("Verique sua requisição")
      }
      

    })

    app.get("/cardapio/:id",  async (req, res) => {
      try {
        const response = await CardapioMetodos.listarCardapioPorId(req.params.sabor)
        res.status(200).json(response)
      } catch {
        res.status(400).send("Verique sua requisição")
      }
      

    })

    app.post("/cardapio/novo", async (req, res) => {
                
        const body = req.body
        const itemValido = CardapioValidacoes.validaNovoItem(body.sabor_cardapio, body.categoria_cardapio, body.valor_cardapio, body.ingredientes_cardapio, body.tamanho_cardapio)

        if (itemValido) {
          const item = new CardapioModel(...Object.values(req.body))
          const response = await CardapioMetodos.insereItemCardapio(item)
          res.status(201).json(response)
        } else {
          res.status(401).json("Verifique o item. Objeto não cadastrado")
        }
              
    })

    app.put("/cardapio/:id", async (req, res) =>{
      
      const body = req.body
      const itemValido = CardapioValidacoes.validaNovoItem(body.sabor_cardapio, body.categoria_cardapio, body.valor_cardapio, body.ingredientes_cardapio, body.tamanho_cardapio)

      if (itemValido) {   
        const item = new CardapioModel(...Object.values(body))
        const response = await CardapioMetodos.atualizarItemCardapio(item, req.params.id)
        res.status(201).json(`A ${body.categoria_cardapio} ${body.sabor_cardapio} foi atualizada com sucesso!`)
      } else {
        res.status(401).json("Verifique o item. Objeto não atualizado")
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