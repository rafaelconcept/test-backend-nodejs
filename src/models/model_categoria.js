const { Schema, model, SchemaTypes } = require('mongoose');

const cadCategoria = new Schema({
    nome:{
        type: String,
        required: true,
    },
    produtos:{
        type: [String],
        required: false,
    },
    timestamps: true,

});

module.exports = model('Categoria', cadCategoria)
