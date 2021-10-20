const {Schema,model,SchemaTypes}=require('mongoose');

const proveedorSchema = Schema({
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
        
    },

    celular: {
        type: String,
        required: true
    },
    
})

module.exports = model ('proveedor', proveedorSchema);