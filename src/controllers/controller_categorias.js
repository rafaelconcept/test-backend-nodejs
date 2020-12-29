const Missao = require('../models/categorias');

module.exports = {









    async cadastro(req, res){

        if(req.body.categoria==null || req.body.nivel==null || req.body.tarefa==null){
            return res.json({ criado:false});
        }

        const missaoExists = await Missao.findOne({ tarefa: req.body.tarefa })
        
        if(missaoExists){
            return res.json({criado:false});
        }



        const missao = await Missao.create({
            categoria: req.body.categoria,
            nivel:req.body.nivel,
            tarefa:req.body.tarefa
        });

        return res.json({ criado: true });
    },

    



    





    async pegar(req, res){
        


        //const tipo = await Missao.find({categoria:req.body.categoria}).limit(2);

        
        var quantidade = req.body.quantidade;
        const total = await Missao.find({categoria:req.body.categoria, nivel:req.body.nivel}).countDocuments();
        
        if(isNaN(quantidade)){
            return res.json({escolhido:[]});
        }

        if(total == 0){
            return res.json({escolhido:[]});
        }
        if(quantidade>total){
            quantidade = total;
        }

        var arr = [];
        while(arr.length < quantidade){
            var r = Math.floor(Math.random() * total) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        var exercicios =  [];
        
        for(i=0;i<quantidade;i++){
          teste = await Missao.findOne().skip(arr[i]-1)

          repeticoes =  Math.floor(Math.random() * (quantidade - 1 + 1) ) + 1;
         exercicios.push(repeticoes+'x '+teste.tarefa);
        }

        //console.log(teste);


        
        return res.json({escolhido:exercicios});
  
        
    }










};