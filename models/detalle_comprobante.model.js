const {Schema,model,SchemaTypes}=require('mongoose');

const detalle_comprobanteSchema = Schema({

    comprobante:{
        type: String,
        ref: 'comprobante',
        required: true
    },
    producto: {
        type: String,
        ref: 'product', 
        required: true
    },
    
    cantidad: {
        type: Schema.Types.Int,
        required: true
    },

    precioUnitario: {
        type: Schema.Types.Double,
        required: true
    },
})

module.exports = model ('detalle_comprobante', detalle_comprobanteSchema);