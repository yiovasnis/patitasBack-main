import { Schema } from 'mongoose';

export const usuarioSchema = new Schema({
    clinica: String,
    nombreMedico: String,
    cedula: { type: String, required: true, unique: true },
    direccion: String,
    telefono: String,
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    createdAT: {
        type: Date,
        default: Date.now
    }
})