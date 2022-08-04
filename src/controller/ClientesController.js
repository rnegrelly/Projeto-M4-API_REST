
import ClientesModel from "../model/ClientesModel.js"
import ClientesMetodos from "../DAO/ClientesMetodos.js"
import ValidaCliente from "../services/validacaoClientes.js";

class ClientesController {

    static rotas(app){
        
        //listar todos os clientes
        app.get("/clientes", async (req, res) => {
            
            try {
                const resposta = await ClientesMetodos.listarClientes();
                res.status(200).send(resposta)

            } catch (error) {
                
                throw new Error(res.status(400).send(`Erro ao acessar o endereço ${error}`))
            }
  
        })
        
        //listar clientes por id
        app.get("/clientes/:id_cliente", async (req, res) => {

            try {      
                          
                const resposta = await ClientesMetodos.listarClientesPorId(req.params.id_cliente)
                res.status(200).send(resposta);

            } catch (error) {
                res.status(404).send(error.message)
            }
  
        })

        //listar cliente e telefone por id
        app.get("/clientes/tel/:id_cliente", async (req, res) => {

            try {                
                const resposta = await ClientesMetodos.listarClientesETelPorId(req.params.id_cliente)
                res.status(200).send(resposta);

            } catch (error) {
                res.status(404).send('O ID informado não existe')
            }
  
        })
       
        //listar cliente e CPF por id
        app.get("/clientes/cpf/:id_cliente", async (req, res) => {

            try {                
                const resposta = await ClientesMetodos.listarClientesCPFPorId(req.params.id_cliente)
                res.status(200).send(resposta);

            } catch (error) {
                res.status(404).send('O ID informado não existe')
            }
  
        })

        //listar cliente e endereço por id
        app.get("/clientes/end/:id_cliente", async (req, res) => {

            try {                
                const resposta = await ClientesMetodos.listarClientesEEndPorId(req.params.id_cliente)
                res.status(200).send(resposta);

            } catch (error) {
                res.status(404).send('O ID informado não existe')
            }
  
        })    
        
        
        //cadastrar clientes
        app.post("/clientes", async (req, res) => {
                        
            try{
                const cpfvalido = ValidaCliente.validacpf(req.body.cpf_cliente)
                const nomevalido = ValidaCliente.validaNome(req.body.nome_cliente)
                const emailvalido = ValidaCliente.validaEmail(req.body.email_cliente)
                const telefonevalido = ValidaCliente.validaTelefone(req.body.telefone_cliente)

                

                if (cpfvalido && nomevalido && emailvalido && telefonevalido) {

                    const cliente = new ClientesModel(...Object.values(req.body));
                    const resposta = await ClientesMetodos.cadastrarClientes(cliente);
                    
                    res.status(200).send(resposta);

                } else {
                    res.status(400).json(`Erro: ${error.message}`);
                }

              } catch(error) {

                res.status(400).json(`Erro: ${error.message}`);

              }
            
        })
        
        //atualizar clientes por id
        app.put("/clientes/:id_cliente", async (req, res) => {

            try{

                const cpfvalido = ValidaCliente.validacpf(req.body.cpf_cliente)
                const nomevalido = ValidaCliente.validaNome(req.body.nome_cliente)
                const emailvalido = ValidaCliente.validaEmail(req.body.email_cliente)
                const telefonevalido = ValidaCliente.validaTelefone(req.body.telefone_cliente)

                if (cpfvalido && nomevalido && emailvalido && telefonevalido) {

                    const cliente = new ClientesModel(...Object.values(req.body));
                    const resposta = await ClientesMetodos.atualizarClientesporId(cliente, req.params.id_cliente);
                    
                    
                     res.status(201).json(resposta);   
    

                } else {
                    res.status(400).json(`Erro: ${error.message}`);  
    
                }
                         

              } catch(error) {
                res.status(403).json(`${error}`)

              }
        })

        //deletar cliente por id
        app.delete("/clientes/:id_cliente", async (req, res) => {
            
            try {
                const cliente = await ClientesMetodos.deletarClientesporId(req.params.id_cliente);

                if(!cliente){
                    throw new Error ("Cliente não encontrado")
                }
                res.status(200).send(cliente)

            } catch (error){

                res.status(404).send(`Erro: ${error.message}`)
            }
        })

        // //deletar TODOS os clientes cadastrados
        // app.delete("/clientes/all"), async (req, res) => {

        //     try {
        //         const cliente = await ClientesMetodos.deletarDadosTabela();
                
        //         if(!cliente){
        //             throw new Error ("Banco de dados vazio.")
        //         }else {
        //             res.status(200).send(cliente)
        //         }
                

        //     } catch (error) {
                
        //         res.status(404).send(`Erro: ${error.message}`)
        //     }

        // }
         
    }
  
  }
  
  export default ClientesController;