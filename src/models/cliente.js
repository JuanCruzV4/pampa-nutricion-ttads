const {Schema, model} = require('mongoose');


const clienteSchema = new Schema({
    idUsuario: String,
    usuario: String,
    password: String,
    cuil: String,
    cuit: String,
    email: String,
    fechaNacimiento: Date,
    direccion: String,
    telefono: String,
    razonSocial: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = model("Cliente", clienteSchema);