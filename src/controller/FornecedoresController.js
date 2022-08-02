import FornecedoresModel from "../model/FornecedoresModel"
import FornecedoresMetodos from "../DAO/FornecedoresMetodos"

class FornecedoresController {
        static rotas(app) {

          app.get("/fornecedores", async (req, res)=>{
            const response = await FornecedoresMetodos.fornecedoresListagem()
            res.status(200).json(response)
          })
          app.get("/fornecedores/:id", async (req, res)=>{
            try {
                const fornecedores = await FornecedoresMetodos.listagem(req.params.id)
                if(!fornecedores){
                    throw new Error("Id inexistente, tente novamente.")
                }
                res.status(200).json(fornecedores)
            } catch (error) {
                res.status(404).json(error.message)
            }
          })
          app.post("/fornecedores", async (req, res)=>{
          const validar = FornecedoresValidacao.validar(...Object.values(req.body))
          try {
              if(validar){
                  const fornecedores = new FornecedoresModel(...Object.values(req.body))
                  const response = await FornecedoresMetodos.fornecedoresAcrescentar(fornecedores)
                  res.status(201).json(response)
              }else{
                  throw new Error("Erro, tente novamente")
              }
          }catch(error){
              res.status(400).json(error.message)
          }
          })
        app.put("/fornecedores/:id", async (req, res)=> {
          const validar = FornecedoresValidacao.validar(...Object.values(req.body))
          try{
            const fornecedores = await FornecedoresMetodos.fornecedoresListar(req.params.id_fornecedores)
            if(!fornecedores){
              throw new Error("Id inexistente, tente novamente.")
            }
            if(validar){
              const fornecedores = new FornecedoresModel(...Object.values(req.body))
              const response = FornecedoresMetodos.fornecedoresUpdate(req.params.id_fornecedores, fornecedores)
              res.status(201).json(response)
            }else{
                throw new Error("Erro, tente novamente.")
            }
          }catch(error){
            res.status(400).json(error.message)
          }
        })
        app.delete("/fornecedores/:id", async (req, res) => {
          try {                
              const fornecedores = await FornecedoresMetodos.fornecedoresDeletar(req.params.id)
              if(!fornecedores){
                  throw new Error("Erro, tente novamente.")
              }
              res.status(200).json(fornecedores)
          }catch (error){    
            console.log(error)
              res.status(404).json({Error: error.message})
          }            
        })
      }
    }

export default FornecedoresController;