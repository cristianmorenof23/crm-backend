const mongoose = require('mongoose')

const ProductosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    existencia: {
        type: Number,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
})

// Crear indice para buscar productos por nombre
ProductosSchema.index({ nombre: 'text'})


module.exports = mongoose.model('Producto', ProductosSchema)