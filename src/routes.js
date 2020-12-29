const { response } = require('express');
const express = require('express');
const route = express();

const produtos = require('./controllers/controller_produtos');
//const missao = require('./controllers/control_categorias');


route.get("/",(req, res)=>{
    res.send('rota funcionando');
  })
  
route.post("/cad_produto",produtos.cadastro);
route.post("/edit_produto",produtos.editar);
route.post("/list_produto",produtos.listar);

/*
route.post("/cad_tarefa",tarefas.cadastro);
route.post("/list_tarefa",tarefas.listar);

route.post("/cad_missao",missao.cadastro);
route.post("/pegar_missao",missao.pegar);
*/

module.exports = route