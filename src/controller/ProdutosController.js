import ProdutoModel from "../model/ProdutoModel.js";
import ProdutoMetodos from "../DAO/ProdutoMetodos.js";

class ProdutosController {
  static rotas(app) {
    app.post("/produtos", async (req, res) => {
      try {
        const produto = new ProdutoModel(...Object.values(req.body));
        const response = await ProdutoMetodos.cadastrarProduto(produto);
        res.status(200).json(response);
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

    app.get("/produtos/:ean", async (req, res) => {
      try {
        if (req.params.ean.length > 0) {
          const response = await ProdutoMetodos.pesquisarProduto(
            req.params.ean
          );
          res.status(200).json(response);
        } else {
          const response = await ProdutoMetodos.listarProdutos();
          res.status(200).json(response);
        }
      } catch (error) {
        throw new Error(
          res.status(400).send(`Erro ao acessar o endereço: ${error}`)
        );
      }
    });

    // app.put("/produtos", async (req, res) => {});

    // app.patch("/produtos/:parametro", () => {});

    app.delete("/produtos/:ean", async (req, res) => {
      try {
        const response = await ProdutoMetodos.apagarProduto(req.params.ean);
        res.status(200).json(response);
      } catch (error) {
        throw new Error(
          res.status(400).send(`Erro ao acessar o endereço: ${error}`)
        );
      }
    });
  }
}

export default ProdutosController;
