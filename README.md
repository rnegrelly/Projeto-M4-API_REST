## API Rest -  Restaurante
![image](https://img.shields.io/github/issues/rnegrelly/Projeto-M4-API_REST?color=%23B5A595&logo=GOT&logoColor=%23B5A595&style=plastic) 
![image](https://img.shields.io/github/forks/rnegrelly/Projeto-M4-API_REST?color=%23B5A595&logoColor=%23B5A595&style=plastic) 
![image](https://img.shields.io/github/stars/rnegrelly/Projeto-M4-API_REST?color=%23B5A595&style=plastic) 
![image](https://img.shields.io/github/license/rnegrelly/Projeto-M4-API_REST?color=%23B5A595&logoColor=%23B5A595&style=plastic)

Projeto de conclusão do módulo 4, idealizado pelo BootCamp [Resilia](https://www.resilia.com.br/), que nos foi proposto, criar uma aplicação desenvolvida em NodeJs, 
com Express e SQLite, para gerar e administrar a rotas da API, para gerenciamento de um restaurante.

## Ferramentas ⚙: 
 -   VScode
 -   Insomnia ou Postman
 -   GIT
 -   GitHub
 -   NODE.Js
 -   HEROKU
 
## ✔ Checklist dos requisitos do projeto:

1. [x] Utilizar o padrão MVC;
2. [x] Utilizar os verbos HTTP seguindo o padrão REST;
3. [x] Implementar todas as operações de CRUD;
4. [x] Utilizar o padrão de projeto (design pattern) DAO para abstração de transações no
banco, com Promises;
5. [x] Utilizar o README.md do repositório para documentação;
6. [x] Utilização de async/await para operações no banco (DAO)
7. [x] Ter o código fonte hospedado em um repositório no Github

 
 ## Dependências utilizadas:

![Badge](https://img.shields.io/badge/"nodemon"-"%5E2.0.15"-orange)
![Badge](https://img.shields.io/badge/"express"-"%5E4.17.1"-orange)
![Badge](https://img.shields.io/badge/"sqlite3"-"%5E5.0.2"-orange)
![Badge](https://img.shields.io/badge/"dotenv"-"%5E5.0.2"-orange)
![Badge](https://img.shields.io/badge/"path"-"%5E5.0.2"-orange)
![Badge](https://img.shields.io/badge/"url"-"%5E5.0.2"-orange)


  
 ## Para instalar o projeto na sua máquina, siga as instruções a seguir usando os comandos descritos:

 1. INSTALAR [Node JS](https://nodejs.org/en/) NA SUA MÁQUINA. 
 
 2. CLONAR ESSE REPOSITÓRIO: 
 ```
     git clone [API REST](https://github.com/rnegrelly/Projeto-M4-API_REST.git)
 ```

3. ACESSAR A PASTA CRIADA ATRAVÉS DO CMD USANDO O COMANDO: 
 ```
      cd Projeto-M4-API_REST
 ```      
4. INSTALAR DEPENDÊNCIAS:
 ```
      npm install
  ```     	    
5. INICIANDO O SERVIDOR:
 ```
      npm run dev
 ```

## ROTAS E MÉTODOS Entidade_Colaborador:

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **GET** | `/colaboradores` | Retorna toda a tabela de colaboradores |
| **GET** | `/colaboradores/{matricula_colaborador}` | Retorna um colaborador com base na matrícula informada no endpoint |
| **POST** | `/colaboradores` | Popula a entidade colaboradores  |
| **PUT** | `/colaboradores/{matricula_colaborador}` | Atualiza os dados de um colaborador com base na matrícula informada no endpoint |
| **DELETE** | `/colaboradores/` | Exclui a tabela colaboradores |
| **DELETE** | ` /colaboradores/{matricula_colaborador}` | Exclui os registros de um colaborador com base na matrícula informada no endpoint |

> Modelo de requisição para o metódo POST:

``` 
  {
    "nome_colaborador": "Andressa Ricardo de Amorim",
    "cpf_colaborador": "433.199.143-47",
    "endereco_colaborador": "Av. Edgard Romero nº 87, Madureira, Rio de Janeiro - RJ",
    "cargo_colaborador": "Administrador contábil",
    "email_colaborador": "homerolinspaiva81@oi.com.br",
    "telefone_colaborador": "(21)98416-2188",
    "turno_colaborador": "Noite",
    "salario_colaborador": "R$ 2.165,30",
    "admissao_colaborador": "13/07/2019",
    "demissao_colaborador": "null"
    }
```
> RETORNA - 

## ROTAS E MÉTODOS Entidade_Estoque:

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **POST** | `/produtos/criar` |Cria um novo produto|
| **GET** | `/produtos` | Lista todos os produtos |
| **GET** | `/produtos/pesquisa/ean/{codigoDeBarras}` | Retorna o produto especificado |
| **GET** | `/produtos/pesquisa/nome` | Pesquisa Produto pelo nome |
| **GET** | `/produtos/pesquisa/fornecedor/{id}` | Pesquisa fornecedor de acordo o ID|
| **PUT** | `/produtos/editar/{codigoDeBarras}` | Atualiza produtos de acordo atualização direta ou código de barras|
| **DELETE** | `/produtos/apagar/{id}` | Deleta produto de acordo o seu {id} |

Modelo de requisição para o método GET

```
   {
    "nome":"REFINADO"
   }
   
```
> RETORNA - Produto Selecionando de acordo, o nome escolhido.

## ROTAS E MÉTODOS Entidade_Cardapio:

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **GET** | `/cardapio/tudo` | Retorna todos dados existente na tabela entidade_cardapio.|
| **GET** | `/cardapio/resumo` | Retorna os itens do cardapio, com os atributos sabor_cardapio, tamanho_cardapio, valor_cardapio.|
| **GET** | `/cardapio/sabor/{sabor}` | Retorna os itens do cardapio cujo sabor seja igual ao do parametro da requisição.|
| **GET** | `/cardapio/categoria/{categoria}` | Retorna os itens do cardapio cuja categoria seja igual ao do parametro da requisição. |
| **GET** | `/cardapio/id/{id}` | Retorna o item do cardápio cujo Id seja o mesmo que foi informado no endpoint. |
| **POST** | `/cardapio/novo` | Insere um novo item no cardapio conforme os dados informados no corpo da requisição.|
| **PUT** | `/cardapio/{id}` | Atualiza os dados do item do cardapio que possua o Id informado no endpoint.|
| **DELETE** | `/cardapio/delete/{id}` | Exclui o item do cardapio cujo ID seja o mesmo que foi informado no endpoit.|

**Modelo de requisição para o metódo POST:**

```
{
    "categoria_cardapio" : "Pizza Salgada",
    "sabor_cardapio" : "Calabresa",
    "ingredientes_cardapio" : "Queijo Mussarela, molho de tomate, linguiça calabresa, cebola e orégano",
    "tamanho_cardapio" : "Brotinho",
    "valor_cardapio" : "R$15,00"
}

```
> RETORNA - mensagem de sucesso {message: "Cadastrado com sucesso!"} ou mensagem de erro {"Verifique o item. Objeto não cadastrado"}.

**Modelo de requisição para o metódo PUT:**

```
{
    "categoria_cardapio" : "Pizza Salgada",
    "sabor_cardapio" : "Calabresa",
    "ingredientes_cardapio" : "Queijo Mussarela, molho de tomate, linguiça calabresa, cebola e orégano",
    "tamanho_cardapio" : "Brotinho",
    "valor_cardapio" : "R$15,00"
}

```
> RETORNA - mensagem de sucesso {message: "A Bebida Suco Natural foi atualizada com sucesso!"} ou mensagem de erro {"Verifique o item. Objeto não atualizado"}.

**Modelo de requisição para o metódo DELETE:**

```
{
    "categoria_cardapio" : "Pizza Salgada",
    "sabor_cardapio" : "Calabresa",
    "ingredientes_cardapio" : "Queijo Mussarela, molho de tomate, linguiça calabresa, cebola e orégano",
    "tamanho_cardapio" : "Brotinho",
    "valor_cardapio" : "R$15,00"
}

```
> RETORNA - mensagem de sucesso {"message": "Registro com Id <Id> deletado com sucesso"} ou mensagem de erro.


1. <h4>Validações:</h4>

	- O valor correspondente a chave "categoria_cardapio" deve estar contido na lista ['Bebida', 'Pizza Salgada', 'Pizza Doce'];
	- O valor correspondente a chave "sabor_cardapio" deve ser uma string e não pode estar vazia;
	- O valor correspondente a chave "ingredientes_cardapio" deve ser uma string e não pode estar vazia;
	- O valor correspondente a chave "tamanho_cardapio" deve estar contido na lista ['Brotinho', 'Média', 'Grande', 'Família', 'Lata', "1 litro", '2 litros', '400ml',];
	- O valor correspondente a chave "valor_cardapio" deve ser um dado do tipo string que utilize os caracteres da lista '0123456789.,R$', espaços não são permitidos;
	- Case-sensitive.  


## ROTAS E MÉTODOS Entidade_Cliente:

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **GET** | `/clientes` | Retorna todos os clientes cadastrados no banco de dados.|
| **GET** | `/clientes/:id_cliente` | Recebe um ID e retorna o referido cliente cadastrado no banco de dados.|
| **GET** | `/clientes/tel/:id_cliente` | Recebe um ID e retorna o referido cliente e seu telefone cadastrado no banco de dados.|
| **GET** | `/clientes/end/:id_cliente` | Recebe um ID e retorna o referido cliente e seu endereço cadastrado no banco de dados. |
| **GET** | `/clientes/cpf/:id_cliente` | Recebe um ID e retorna o referido cliente e seu CPF cadastrado no banco de dados. |
| **POST** | `/clientes` | Realiza o cadastro de um novo cliente no banco de dados. |
| **PUT** | `/clientes/:id_cliente` | Recebe um ID e atualiza o cadastro do referido cliente no banco de dados. |
| **DELETE** | `/clientes/:id_cliente` | Recebe um ID e exlcui o cadastro do referido cliente do banco de dados. |

**Modelo de requisição para o metódo POST:**

```
{
    "nome_cliente": "Giorgian Daniel De Arrascaeta Benedetti",
    "cpf_cliente": "55555555565",
    "endereco_cliente": "Av. Borges de Medeiros, 997 - Gávea, Rio de Janeiro - RJ",
    "email_cliente": "arrascaidolo@rubronegro.com",
    "telefone_cliente": "21984162188"
}

```
> RETORNA - Cadastra um novo cliente na base de dados.


**Modelo de requisição para o metódo PUT:**

```
{
    "nome_cliente": "Giorgian Daniel De Arrascaeta Benedetti",
    "cpf_cliente": "55555555565",
    "endereco_cliente": "Av. Borges de Medeiros, 997 - Gávea, Rio de Janeiro - RJ",
    "email_cliente": "arrascaidolo@rubronegro.com",
    "telefone_cliente": "21984162188"
}

```
> RETORNA - Mensagem de sucesso: "Cliente atualizado com sucesso."
            Mensagem de erro: "Não foi possível atualizar os dados do Cliente."

## ROTAS E MÉTODOS Entidade_Fornecedores:

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **GET** | `/fornecedores` | Retorna todos dados existente na tabela da entidade_fornecedores|
| **GET** | `/fornecedores/{id}` | Retorna o cliente selecionado pelo ID selecionado.|
| **POST** | `/fornecedores/` | Insere um novo cadastro de fornecedores no banco de dados|
| **PUT** | `/fornecedores/{id}` | Atualiza através do ID selecionado o cadastro do fornecedor.|
| **DELETE** | `/fornecedores/{id}` | Deleta o fornecedor selecionado pelo ID.|

> *Números dos id's cadastrados: 4, 6, 7 e 8.*

**Modelo de requisição para o metódo POST:**

```
{
    "nome_fornecedor": "Luiz Inácio Lula da Silva",
    "cnpj_fornecedor": "24.543.256/0001-38",
    "endereco_fornecedor": "Rua fora bolsonario",
    "ramo_fornecedor": "Bebidas artesanais",
    "email_fornecedor": "lulalivre@gmail.com",
    "telefone_fornecedor": "(83)3464-8575"
}

```
> RETORNA - mensagem de sucesso {message: "Fornecedor cadastrado com sucesso."} ou mensagem de erro {"Não foi possível efetuar o cadastro do fornecedor"}.

**Modelo de requisição para o metódo PUT:**

```
   {
        "nome_fornecedor": "Layse Mayanne",
        "cnpj_fornecedor": "44.438.256/0001-38",
        "endereco_fornecedor": "Rua cimento nobre 405",
        "ramo_fornecedor": "Atacadista",
        "email_fornecedor": "atacados@gmail.com",
        "telefone_fornecedor": "(83)3364-8575"
    }

```
> RETORNA - mensagem de sucesso {message: "Fornecedor atualizado!"}.

**Modelo de requisição para o metódo DELETE:**

```
   {
        "nome_fornecedor": "Layse Mayanne",
        "cnpj_fornecedor": "44.438.256/0001-38",
        "endereco_fornecedor": "Rua cimento nobre 405",
        "ramo_fornecedor": "Atacadista",
        "email_fornecedor": "atacados@gmail.com",
        "telefone_fornecedor": "(83)3364-8575"
    }

```
> RETORNA - mensagem de sucesso {"message": "Fornecedor deletado!"} ou mensagem de erro.






## Status do Projeto
![Bagde](https://img.shields.io/badge/Status%20do%20Projeto-finalizando-orange)


