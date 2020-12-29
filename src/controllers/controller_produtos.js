const Produto = require('../models/model_produto');

module.exports = {

    async cadastro(req, res){
        
        if(req.body.id_usuario==null || req.body.titulo == null || req.body.preco == null){
            return res.json({ criado:false});
        }

        id_usuario = req.body.id_usuario,

        produto_obj = {
            titulo:req.body.titulo,
            descricao:req.body.descricao,
            preco:req.body.preco,
            categoria:req.body.categoria
        }

        const criar_produto = await Produto.create(produto_obj);

        return res.json({ criado: true })
    },

    
    async editar(req, res){
        
        if(req.body.id_usuario==null || req.body.id_produto==null){
            return res.json({ criado:false});
        }



        //Editar somente categoria
        if(req.body.nova_categoria!=null){

            nova_categoria = req.body.nova_categoria;
            
            //Verificar se Id digitado ta no formato correto
            if (!req.body.id_produto.match(/^[0-9a-fA-F]{24}$/)) {
                return res.json({ formato:"invalido" });
              }
            //Verificar se produto existe
            const prodExists = await Produto.findOne({ _id: req.body.id_produto })

            if(prodExists){                
                //Atualizando categoria
                const atualizando = await Produto.findOneAndUpdate({ _id: req.body.id_produto},
                    {categoria: req.body.nova_categoria}, {useFindAndModify: false});

                return res.json({ modificado:true });

            }else{
                return res.json({ erro:"produto não encontrado, verifique o id" });
            }


        }



        /*
        id_usuario = req.body.id_usuario,

        produto_obj = {
            titulo:req.body.titulo,
            descricao:req.body.descricao,
            preco:req.body.preco,
            categoria:req.body.categoria
        }

        const criar_produto = await Produto.create(produto_obj);

        return res.json({ criado: true })

        */
    },







    async listar(req, res){
        //Verificando se deve listar todos ou apenas do nome/categoria
        if(req.body.categoria==null && req.body.nome == null){

            const lista = await Produto.find({})
    

            return res.json(lista);
        }


        const tarefExists = await Tarefa.findOne({ data: req.body.data })

        if(tarefExists){
            return res.json({ lista:tarefExists.lista});
        }else{
            return res.json({ lista:'' });
        }

    }


  








};