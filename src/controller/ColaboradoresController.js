import ColaboradoresModel from "../model/ColaboradoresModel.js";
import ColaboradoresMetodos from "../DAO/ColaboradoresMetodos.js";
import validacoesColaboradores from "../services/validacoesColaboradores.js";

class ColaboradoresController {
  static rotas(app) {

    app.get("/colaboradores", async (req, res) => {
      try{
        const response = await ColaboradoresMetodos.listarColaboradores();
        
        res.status(200).json(response);
      } catch(error) {
        res.status(404).json({
          Erro: `Erro ao processar requisição.`,
          Mensagem: `Tabela colaboradores não existe. Reinicie o servidor para criá-la novamente.`
        })
      }
    })

    app.get("/colaboradores/:matricula_colaborador", async (req, res) => {
      try {
        const matricula = req.params.matricula_colaborador;

        if(!validacoesColaboradores.ValidaSeNumero(matricula)) {
          res.status(400).json({
            Erro: `Erro ao processar requisição.`,
            Mensagem: `Parâmetro no endpoint "${matricula}" não é válido.`
          })
        } else {
          const response = await ColaboradoresMetodos.listarColaboradoresPorMatricula(matricula);
            if (response) {
              res.status(200).json(response);
            } else {
              res.status(404).json({
                Erro: `Erro ao processar requisição.`,
                Mensagem: `Colaborador matrícula ${matricula} não existe.`
              });
            }
        }
      } catch (error) {
        throw new Error({
          Erro: `Erro ao processar requisição.`,
          Mensagem: `Tabela colaboradores não existe. Reinicie o servidor para criá-la novamente.`
        });
      }
    })

    app.post("/colaboradores", async (req, res) => {
      try {
        const colaborador = new ColaboradoresModel(...Object.values(req.body));
        
        if (Object.values(colaborador).includes(undefined)) {
            res.status(400).json({
            Erro: 'Erro ao processar requisição.',
            Mensagem: 'Corpo da requisição inválido ou incompleto.'
          })
          return;
        }
        
        const validaBanco = await ColaboradoresMetodos.listarColaboradoresPorMatricula(1);
        const response = await ColaboradoresMetodos.cadastrarColaboradores(colaborador);
        console.log(validaBanco)
        if(!validaBanco.salario.validacoesColaboradores.validaSalario()){
          res.status(400).json({
            Erro: `Erro ao processar requisição.`,
            Mensagem: `O campo salário contém caracteres inválidos.`
          })
        }
        res.status(201).json(response);
      } catch (error) {
        res.status(400).json({
          Erro: `Erro ao processar requisição.`,
          Mensagem: `Tabela colaboradores não existe. Reinicie o servidor para criá-la novamente.`
        });
      }
    })

    app.put("/colaboradores/:matricula_colaborador", async (req, res) => {
      try {
        const matricula = req.params.matricula_colaborador;

        if(!validacoesColaboradores.ValidaSeNumero(matricula)) {
          res.status(400).json({
            Erro: `Erro ao processar requisição.`,
            Mensagem: `Parâmetro no endpoint "${matricula}" não é válido.`
          })
        }

        const colaborador = new ColaboradoresModel(...Object.values(req.body));
        
        if (Object.values(colaborador).includes(undefined)) {
          res.status(400).json({
            Erro: `Erro ao processar requisição.`,
            Mensagem: 'Corpo da requisição inválido ou incompleto.'
          })
          return;
        }

        const response = await ColaboradoresMetodos.atualizarColaboradores(colaborador, matricula);
        res.status(201).json(response);
      } catch (error) {
        res.status(400).json({
          Erro: `Erro ao processar requisição.`,
          Mensagem: `Tabela colaboradores não existe. Reinicie o servidor para criá-la novamente.`
        })
      }
    })

    app.delete("/colaboradores/:matricula_colaborador", async (req, res) => {
      try {
        const matricula = req.params.matricula_colaborador;

        const validaMatricula = await ColaboradoresMetodos.listarColaboradoresPorMatricula(matricula);

        if (matricula != validaMatricula.matricula_colaborador) {
          throw new Error({
            Erro: `Erro ao processar requisição.`,
            Mensagem: `A matrícula informada no endpoint não consta no banco.`
          })
        } else {
          const response = await ColaboradoresMetodos.deletarColaborador(matricula);
          res.status(200).json(response);
        }

      } catch (error) {
        res.status(400).json({
          Erro: `Erro ao processar requisição.`,
          Mensagem: `Tabela colaboradores não existe. Reinicie o servidor para criá-la novamente.`
        });
      }
    })

    app.delete("/colaboradores", async (req, res) => {
      try {
        const verificaTabela = await ColaboradoresMetodos.listarColaboradores();

        console.log(typeof verificaTabela)
        if(verificaTabela === []) {
          res.status(404).json({
            Erro: `Erro ao processar requisição.`,
            Mensagem: `Tabela colaboradores não existe. Reinicie o servidor para criá-la novamente.`
          })
          return;
        }

        const response = await ColaboradoresMetodos.limparColaboradores();
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json({
          error: `Erro ao processar requisição.`,
          Mensagem: `Tabela colaboradores não existe. Reinicie o servidor para criá-la novamente.`
        })
      }
    })

  }

}

export default ColaboradoresController;