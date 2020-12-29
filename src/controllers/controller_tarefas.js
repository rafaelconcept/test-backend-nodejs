const Tarefa = require('../models/tarefas');

module.exports = {










    async cadastro(req, res){

        if(req.body.data==null || req.body.lista ==null){
            return res.json({ criado:false});
        }

        const tarefExists = await Tarefa.findOne({ data: req.body.data })
        
        if(tarefExists){
            return res.json({ criado:false});
        }

        const tarefa = await Tarefa.create({
            data: req.body.data,
            lista:req.body.lista
        });

        return res.json({ criado: true })
    },

    



    





    async listar(req, res){

        const tarefExists = await Tarefa.findOne({ data: req.body.data })

        if(tarefExists){
            return res.json({ lista:tarefExists.lista});
        }else{
            return res.json({ lista:'' });
        }

        
    }










};