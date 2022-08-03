import CardapioMetodos from "../DAO/CardapioMetodos.js"
import CardapioModel from "../model/CardapioModel.js";
import ValidacoesGerais from "../validacoes/ValidacoesGerais.js";
import CardapioValidacoes from "../validacoes/CardapioValidacoes.js"


class CardapioController {

  static rotas(app){

    app.get("/cardapio/all",  async (req, res) => {

      const query = `SELECT * FROM cardapio`

      const response = await CardapioMetodos.listar(query)
      res.status(200).json(response)

    })

    app.get("/cardapio/:sabor",  async (req, res) => {
      
      const response = await CardapioMetodos.listarCardapioPorSabor(req.params.sabor)
      res.status(200).json(response)

    })

    app.get("/cardapio/:id",  async (req, res) => {
      const response = await CardapioMetodos.listarCardapioPorSabor(req.params.sabor)
      res.status(200).json(response)

    })

    app.post("/cardapio", async (req, res) => {
     
        const saborValido = ValidacoesGerais.ValidaStringNaoVazia(req.body.sabor_cardapio)
        const categoriaValida = CardapioValidacoes.validaCategoria(req.body.categoria_cardapio)
        const precoValido = ValidacoesGerais.ValidaSeNumero(req.body.valor_cardapio)
        const ingredValido = ValidacoesGerais.ValidaStringNaoVazia(req.body.ingredientes_cardapio)
        const tamanhoValido = CardapioValidacoes.validaTamanho(req.body.tamanho_cardapio)

      
        if (categoriaValida && saborValido && precoValido && ingredValido && tamanhoValido) {
          const item = new CardapioModel(...Object.values(req.body))
          const response = await CardapioMetodos.insereItemCardapio(item)
          res.status(200).json(response)
        } else {
          res.status(200).json("Verifique o item. Objeto não cadastrado")
        }
        
    })

    app.put("/cardapio/:id", async (req, res) =>{

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
        res.status(200).json("Verifique o item. Objeto não cadastrado")
      }

    })


    app.patch("/cardapio/:id", async (req, res) => {
      const item = req.body.valor_cardapio
      const novoValor = await CardapioMetodos.atualizaValorItemCardapio(Object.values(item), req.params.id)
      res.status(200).json(novoValor)
           
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