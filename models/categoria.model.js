const {Schema,model,SchemaTypes}=require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
    },
    
})
module.exports = model ('categoria', CategoriaSchema);