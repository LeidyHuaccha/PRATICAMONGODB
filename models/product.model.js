const {Schema,model,SchemaTypes}=require('mongoose');

const ProductSchema = Schema({
    nombre: {
        type: String,
        required: true
    },

    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'categoria', //poner nombre Categria a mi tabla
        required: true
    },

    proveedores: {
        type: String,
        ref: 'proveedor', //poner nombre Categria a mi tabla
        required: true
    },

    unidadesStock: {
        type: Schema.Types.Int,
        required: true
    },

    precioUnitario: {
        type: Schema.Types.Double,
        required: true
    },
})

module.exports = model ('Proyecto', ProyectoSchema);
