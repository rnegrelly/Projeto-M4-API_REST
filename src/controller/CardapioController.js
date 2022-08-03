import CardapioMetodos from "../DAO/CardapioMetodos.js"
import CardapioModel from "../model/CardapioModel.js";
import ValidacoesGerais from "../validacoes/ValidacoesGerais.js";
import CardapioValidacoes from "../validacoes/CardapioValidacoes.js"


class CardapioController {

  static rotas(app){

    app.get("/cardapio/all",  async (req, res) => {
      
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

        const saborValido = ValidacoesGerais.ValidaStringNaoVazia(req.body.sabor_cardapio)

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

    app.post("/cardapio", async (req, res) => {
      try{
        const saborValido = ValidacoesGerais.ValidaStringNaoVazia(req.body.sabor_cardapio)
        const categoriaValida = CardapioValidacoes.validaCategoria(req.body.categoria_cardapio)
        const precoValido = ValidacoesGerais.ValidaSeNumero(req.body.valor_cardapio)
        const ingredValido = ValidacoesGerais.ValidaStringNaoVazia(req.body.ingredientes_cardapio)
        const tamanhoValido = CardapioValidacoes.validaTamanho(req.body.tamanho_cardapio)

      
        if (categoriaValida && saborValido && precoValido && ingredValido && tamanhoValido) {
          const item = new CardapioModel(...Object.values(req.body))
          const response = await CardapioMetodos.insereItemCardapio(item)
          res.status(201).json(response)
        } else {
          res.status(201).json("Verifique o item. Objeto não cadastrado")
        }
      } catch {

          res.status(400).json("Verifique sua requisição")
      }
        
        
    })

    app.put("/cardapio/:id", async (req, res) =>{

      try {
        const saborValido = ValidacoesGerais.ValidaStringNaoVazia(req.body.sabor_cardapio)
      const categoriaValida = CardapioValidacoes.validaCategoria(req.body.categoria_cardapio)
      const precoValido = ValidacoesGerais.ValidaSeNumero(req.body.valor_cardapio)
      const ingredValido = ValidacoesGerais.ValidaStringNaoVazia(req.body.ingredientes_cardapio)
      const tamanhoValido = CardapioValidacoes.validaTamanho(req.body.tamanho_cardapio)
      
      if (categoriaValida && saborValido && precoValido && ingredValido && tamanhoValido) {      
        const item = new CardapioModel(...Object.values(req.body))
        const response = CardapioMetodos.atualizarItemCardapio(item, req.params.id)
        res.status(201).json(response)
      } else {
        res.status(200).json("Verifique o item. Objeto não atualizado")
      }
      } catch {
        res.status(400).json("Verifique sua requisição")
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