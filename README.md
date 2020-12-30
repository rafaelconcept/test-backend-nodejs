<h1>Backend Analyst Candidate Testing</h1>


<strong>Como rodar</strong>

Clone esse repositorio e rode "npm install" para que todas as dependencias sejam instaladas.
Server rodando com "yarn server" ou "node src/server.js" na porta 3333

<strong>Caso use o Insomnia para requisições:</strong>
importe o arquivo "adicionando arquivo do insomnia para requests de rotas"

<strong>Explicação de rotas:</strong>

- /cad_produto
  Usada para cadastrar um produto no seguinte formato json:
  <code>
    {
      "jwt_usuario":"1",
      "titulo":"Bola de couro2",
      "descricao":"Bola mais resistente",
      "preco":20.90,
      "categoria":["brinquedo"]
    }
  </code>
    Em "jwt_usuario" pode deixar "1" como default pois não há sistema de criação de usuario.
  
  
- I as a user would like to be able to associate and edit a product category;
- As a user I would like to be able to access the list of all products;
- As a user I would like to be able to filter products by name or category;
- I as a user would like to be able to update the product data;
- I as a user would like to be able to delete a product from my catalog;
 
<strong>Instructions</strong>
- <strong>To start the test, <strong>fork</strong> this repository, create a branch with its full name and then and send us the link to the test performed (link to your repository) . If you just clone the repository you will not be able to push and then it will be more complicated to make the pull request.</strong>
- The choice of libraries, databases, architecture, etc. is at your discretion.
- Change the README file explaining what it takes to run your application.
- Paste the branch name into the GUPY system and indicate the completion of the test
- If you want you can leave us feedback regarding the test

 
<strong>Our analysis</strong>
- Knowledge of Javascript, NodeJs, Express will be assessed for this position;
- We'll look at how you structure the:
  application layers;
  outgoing calls,
  environment variables,
   cache,
  unit tests,
  logs;
  error handling;
  documentation.
- Code organization, module separation, readability and comments.
- Commit history.
- The use of MongoDB is a differentiator
