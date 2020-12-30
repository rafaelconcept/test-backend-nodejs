const { Schema, model, SchemaTypes } = require('mongoose');

const cadProduto = new Schema({
    titulo:{
        type: String,
        required: true,
    },
    descricao:{
        type: String,
        required: true,
    },
    preco:{
        type: SchemaTypes.Decimal128,
        required: true,
    },   
    categoria:{
        type: [String],
        required: false,
    },
},{
    timestamps: true,

});

module.exports = model('Produto', cadProduto)
