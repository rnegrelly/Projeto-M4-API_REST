import FornecedoresModel from "../model/FornecedoresModel.js"
import FornecedoresMetodos from "../DAO/FornecedoresMetodos.js"

class FornecedoresController {
  static rotas(app) {

    app.get("/fornecedores", async (req, res)=>{
      const response = await FornecedoresMetodos.fornecedoresListar()
        res.status(200).json(response)
})

    app.get("/fornecedores/:id", async (req, res)=>{
      
      try {
        const id = req.params.id
        const fornecedores = await FornecedoresMetodos.fornecedoresListarId(id)
          if(!fornecedores){
            throw new Error("Id inexistente, tente novamente.")
}
          res.status(200).json(fornecedores)
          } catch (error) {
            
            res.status(404).json(error.message)
}
})

    app.post("/fornecedores", async (req, res)=>{
      const fornecedores = new FornecedoresModel(...Object.values(req.body))
      const response = await FornecedoresMetodos.fornecedoresInserir(fornecedores)
    
        res.status(201).json(response)
})

    app.put("/fornecedores/:id", async (req, res)=> {
      const id = req.params.id
      const fornecedores = new FornecedoresModel(...Object.values(req.body))
      const response = FornecedoresMetodos.fornecedoresUpdate(id, fornecedores)
        res.status(200).json(response)
})

    app.delete("/fornecedores/:id", async (req, res) => {
      
      try { 
        const id = req.params.id               
        const fornecedores = await FornecedoresMetodos.fornecedoresDelete(id)
          if(!fornecedores){
            throw new Error("Erro, tente novamente.")
  }
            res.status(200).json(fornecedores)
          }catch (error){    
              res.status(404).json({Error: error.message})
          }            
        })
      }
    }

export default FornecedoresController;