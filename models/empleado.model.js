const {Schema,model,SchemaTypes}=require('mongoose');

const EmpleadoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },

    dni: {
        type: String,
        required: true
    },

    cargo: {
        type: Schema.Types.ObjectId,
        required: true
    },

    fecha_nacimiento: {
        type: String,
        ref: 'proveedor', //poner nombre Categria a mi tabla
        required: true
    },

    direccion: {
        type: String,
        required: true
    },

    celular: {
        type: String,
        required: true
    },

    montoSalrio: {
        type: Schema.Types.Double,
        required: true
    },
})

module.exports = model ('empleadoo', EmpleadoSchema);