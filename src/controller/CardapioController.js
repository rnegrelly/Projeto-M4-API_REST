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
      } catch (error) {
        res.status(400).send(error)
      }  

    })

    app.get("/cardapio/resumo",  async (req, res) => {
      
      try {
        const query = `SELECT sabor_cardapio, tamanho_cardapio, valor_cardapio FROM cardapio`
        const response = await CardapioMetodos.listar(query)
        res.status(200).json(response)
      } catch (error) {
        res.status(400).send(error)
      }  

    })

    app.get("/cardapio/sabor/:sabor",  async (req, res) => {
      
        try {
          const response = await CardapioMetodos.listarCardapioPorSabor(req.params.sabor)

          if (response.length > 0) {
            res.status(200).json(response)
          } else {
            res.status(406).json({Not_Found: `O sabor_cardapio ${req.params.sabor} não foi encontrado em nossa base da dados!`})

          } 
        } catch  (error) {

          res.status(400).json(error)
        }     

    })

    app.get("/cardapio/categoria/:categoria",  async (req, res) => {
      
      try {
       
        const categ = CardapioValidacoes.validaCategoria(req.params.categoria)

        if(categ) {
          const response = await CardapioMetodos.listarCardapioPorCategoria(req.params.categoria)
          res.status(200).json(response)
        } else {
          throw new Error("Categoria solicitada é inválida!")
        }
        
      } catch(error) {
        res.status(400).json({Error:error.message})
      }     

    })

    app.get("/cardapio/id/:id",  async (req, res) => {
      
      try {

        const response = await CardapioMetodos.listarCardapioPorId(req.params.id)
        
        if (response.length > 0) {
          res.status(200).json(response)

        } else {

          res.status(406).json({Error: `O id_cardapio ${req.params.id} não foi encontrado em nossa base da dados!`})
        }
        
        
      } catch(error) {

        res.status(400).send({error:error.message})
      }
      
    })

    app.post("/cardapio/novo", async (req, res) => {

      try {
        const body = req.body
        const itemValido = CardapioValidacoes.validaNovoItem(body.sabor_cardapio, body.categoria_cardapio, body.valor_cardapio, body.ingredientes_cardapio, body.tamanho_cardapio)

        if (itemValido) {
          const item = new CardapioModel(...Object.values(req.body))
          const response = await CardapioMetodos.insereItemCardapio(item)
          res.status(201).json(response)
        } else {
          res.status(401).json("Verifique o item. Objeto não cadastrado")
        }
      } catch  (error) {
        res.status(401).send({error:error.message})
      }      
              
    })

     app.put("/cardapio/:id", async (req, res) =>{

        try {
          const body = req.body
          const itemValido = CardapioValidacoes.validaNovoItem(body.sabor_cardapio, body.categoria_cardapio, body.valor_cardapio, body.ingredientes_cardapio, body.tamanho_cardapio)

          if (itemValido) {   
          const item = new CardapioModel(...Object.values(body))
          const response = await CardapioMetodos.atualizarItemCardapio(item, req.params.id)
          res.status(201).json(response)
          } 
        } catch(error) {
          res.status(404).json({Error:error.message})
        }
      
      
    })


  app.delete("/cardapio/delete/:id", async (req, res) => {

      try {                
        const item = await CardapioMetodos.deletarItemCardapioPorId(req.params.id)
        console.log(item)
        
          res.status(200).json(item)
              
      } catch (error) {    
        res.status(404).json({Error: error.message})
      }
    })

  }

}


export default CardapioController;