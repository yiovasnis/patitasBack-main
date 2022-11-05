import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const propietariosSchema = new Schema({
    nombrePropietario: String,
    direccion: String,
    telefono: String,
    correo: { type: String, unique: true, required: true },
    id_mascota: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mascotas' }],
    createdAT: {
        type: Date,
        default: Date.now
    }
})