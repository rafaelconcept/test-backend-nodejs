<h1>Backend Analyst Candidate Testing</h1>


<strong>Como rodar</strong>

Clone esse repositorio e rode "npm install" para que todas as dependencias sejam instaladas.
Server rodando com "yarn server" ou "node src/server.js" na porta 3333

<strong>Caso use o Insomnia para requisições:</strong>
importe o arquivo "anotaai-Insomnia_2020-12-29.json"

<strong>Explicação de rotas:</strong>

- /cad_produto ------------------
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
  

- /edit_produto ------------------
  Usada para editar categorias do produto no seguinte formato json:

  <code>
    {
      "jwt_usuario":"1",
      "id_produto":"5feba120b296d13914f4a585",
      "nova_categoria":["brinquedo", "criança"]
    }

  </code>

    Em "jwt_usuario" pode deixar "1" como default pois não há sistema de criação de usuario.
    Pode inserir mais de uma categoria adicionando-as no array.



- /edit_produto ------------------
  Usada para editar os dados do produto no seguinte formato json:

  <code>
    {
      "jwt_usuario":"1",
      "id_produto":"5febab0f7335783f84509236",
      "novo_titulo":"Novo Titulo",
      "nova_descricao":"",
      "novo_preco":""
      
    }


  </code>

    Em "jwt_usuario" pode deixar "1" como default pois não há sistema de criação de usuario.
    Informações que não devem ser alteradas deixa vazio como default, exemplo "novo_preco":""




- /delet_produto ------------------
  Usada para excluir o produto no seguinte formato json:

  <code>
    {
      "jwt_usuario":"1",
      "id_produto":"5febc6851a80951e7037c66c"
    }


  </code>

    Em "jwt_usuario" pode deixar "1" como default pois não há sistema de criação de usuario.
  
<strong>Para conectar ao MongoDB Compass use: </strong>
<code>
  mongodb+srv://rafaelconcept:<password>@cluster0.fe79l.mongodb.net/test
<code>

Senha: teste-anotaai