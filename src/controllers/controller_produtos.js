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

        
        //Verificar se Id digitado ta no formato correto
        if (!req.body.id_produto.match(/^[0-9a-fA-F]{24}$/)) {
            return res.json({ formato:"invalido" });
        }
        //Verificar se produto existe
        const prodExists = await Produto.findOne({ _id: req.body.id_produto })

        if(!prodExists){ 
            return res.json({ erro:"produto não encontrado, verifique o id" });
        }

        //Editar somente categoria
        if(req.body.nova_categoria!=null){

            nova_categoria = req.body.nova_categoria;
                         
            //Atualizando categoria
            const atualizando = await Produto.findOneAndUpdate({ _id: req.body.id_produto},
                {categoria: req.body.nova_categoria}, {useFindAndModify: false});

            return res.json({ modificado:true });

        }


        //Atualiza titulo caso seja diferente de default
        req.body.novo_titulo!=""? await Produto.findOneAndUpdate({ _id: req.body.id_produto},
            {titulo: req.body.novo_titulo}, {useFindAndModify: false}):''

        //Atualiza descricao caso seja diferente de default
        req.body.nova_descricao!=""? await Produto.findOneAndUpdate({ _id: req.body.id_produto},
            {descricao: req.body.nova_descricao}, {useFindAndModify: false}):''

        //Atualiza preço caso seja diferente de default
        req.body.novo_preco!=""? await Produto.findOneAndUpdate({ _id: req.body.id_produto},
            {preco: req.body.novo_preco}, {useFindAndModify: false}):''
            
        return res.json({ modificado: true});


    },




    async listar(req, res){
        //Verificando se deve listar todos ou apenas do nome/categoria
        if(req.body.categoria==null && req.body.titulo == null && req.body.todos == true ){

            const lista = await Produto.find({})

            return res.json(lista);
        }

        //Verificando se a busca é por nome
        if(req.body.categoria==null && req.body.titulo != null){
            const lista = await Produto.find({titulo:{ "$regex": req.body.titulo, "$options": "i" }});
            return res.json(lista);
        }

        //Verificando se a busca é por categoria
        if(req.body.categoria!=null && req.body.titulo == null){
            
            const lista = await Produto.find({categoria:{ "$regex": req.body.categoria, "$options": "i" }});
            return res.json(lista);
        }

        return res.json({erro:"Dados incorretos na busca"});


    },


    

    async deletar(req, res){
        
        if(req.body.id_usuario==null || req.body.id_produto==null){
            return res.json({ criado:false});
        }
        
        //Verificar se Id digitado ta no formato correto
        if (!req.body.id_produto.match(/^[0-9a-fA-F]{24}$/)) {
            return res.json({ formato:"invalido" });
        }
        //Verificar se produto existe
        const prodExists = await Produto.findOne({ _id: req.body.id_produto })

        if(!prodExists){ 
            return res.json({ erro:"produto não encontrado, verifique o id" });
        }

        const deletar = await Produto.remove({ _id: req.body.id_produto })

        return res.json({ removido:true });
    }


  








};