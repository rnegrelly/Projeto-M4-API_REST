import ProdutoModel from "../model/ProdutoModel.js";
import ProdutoMetodos from "../DAO/ProdutoMetodos.js";
import ValidacaoProduto from "../services/validacaoProduto.js";

class ProdutosController {
  static rotas(app) {
    app.post("/produtos/criar", async (req, res) => {
      try {
        const produto = new ProdutoModel(...Object.values(req.body));
        if (ValidacaoProduto.validaProduto(produto)) {
          const response = await ProdutoMetodos.cadastrarProduto(produto);
          res.status(200).json(response);
        } else {
          res.status(400).send("Erro ao cadastrar: Produto Inválido");
        }
      } catch (error) {
        res.status(400).send(`${error}`);
      }
    });

    app.get("/produtos", async (req, res) => {
      try {
        const response = await ProdutoMetodos.listarProdutos();
        res.status(200).json(response);
      } catch (error) {
        throw new Error(
          res.status(400).send(`Erro ao acessar o endereço: ${error}`)
        );
      }
    });

    app.get("/produtos/pesquisa/ean/:ean", async (req, res) => {
      try {
        if (req.params.ean.length > 0) {
          const response = await ProdutoMetodos.pesquisarProdutoPorEAN(
            req.params.ean
          );
          res.status(200).json(response);
        } else {
          res.status(400).json("Nenhum código encontrado.");
        }
      } catch (error) {
        throw new Error(
          res.status(400).send(`Erro ao acessar o endereço: ${error}`)
        );
      }
    });

    app.get("/produtos/pesquisa/nome", async (req, res) => {
      try {
        if (req.body.nome.length > 0 || req.body.nome.length !== "") {
          const response = await ProdutoMetodos.pesquisarProdutoPorNome(
            req.body.nome
          );
          res.status(200).json(response);
        } else {
          res.status(400).json("Nenhum nome encontrado.");
        }
      } catch (error) {
        throw new Error(
          res.status(400).send(`Erro ao acessar o endereço: ${error}`)
        );
      }
    });

    app.get("/produtos/pesquisa/fornecedor/:fornecedor", async (req, res) => {
      try {
        if (req.params.fornecedor.length > 0) {
          const response = await ProdutoMetodos.pesquisarProdutoPorFornecedor(
            req.params.fornecedor
          );
          res.status(200).json(response);
        } else {
          res.status(400).json("Nenhum fornecedor encontrado.");
        }
      } catch (error) {
        throw new Error(
          res.status(400).send(`Erro ao acessar o endereço: ${error}`)
        );
      }
    });

    app.put("/produtos/editar/:ean", async (req, res) => {
      try {
        const ean = req.params.ean;
        const produto = new ProdutoModel(...Object.values(req.body));
        if (ValidacaoProduto.validaProduto(produto)) {
          const response = ProdutoMetodos.atualizarProduto(ean, produto);
          if (response) {
            res.status(200).json("Produto editado com sucesso.");
          }
        } else {
          res.status(400).send("Erro ao editar: Produto Inválido");
        }
      } catch (error) {
        throw new Error(
          res.status(400).send(`Erro ao acessar o endereço: ${error}`)
        );
      }
    });

    app.delete("/produtos/apagar/:ean", async (req, res) => {
      try {
        if (req.params.ean.length > 0) {
          const response = await ProdutoMetodos.apagarProduto(req.params.ean);
          if (response) {
            res.status(200).json("Produto apagado com sucesso.");
          }
        } else {
          res.status(400).json("Nenhum código encontrado.");
        }
      } catch (error) {
        throw new Error(
          res.status(400).send(`Erro ao acessar o endereço: ${error}`)
        );
      }
    });
  }
}

export default ProdutosController;
