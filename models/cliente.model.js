const {Schema,model,SchemaTypes}=require('mongoose');

const ClienteSchema = Schema({
    razonSocial: {
        type: String,
        required: true
    },

    ruc: {
        type: String,
    },

    personaNatural: {
        type: String,
    },

    direccion: {
        type: String,
        required: true
    },

    celular: {
        type: String,
        required: true
    },
    
})

module.exports = model ('cliente', ClienteSchema);