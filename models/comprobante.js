const {Schema,model,SchemaTypes}=require('mongoose');

const ComprobanteSchema = Schema({
    cliente: {
        type: String,
        ref: 'cliente',
        required: true
    },
    empleado: {
        type: String,
        ref: 'empleado',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },

})

module.exports = model ('comprobante', ComprobanteSchema);
