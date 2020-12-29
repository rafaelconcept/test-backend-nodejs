const { Schema, model, SchemaTypes } = require('mongoose');

const cadUsuario = new Schema({
    nome:{
        type: String,
        required: true,
    },
    tipo_conta:{
        type: String,
        required: true,
    },
    timestamps: true,

});

module.exports = model('Produto', cadUsuario)
