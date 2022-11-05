import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const mascotasSchema = new Schema({
    nombreMascota: String,
    expediente: String,
    fechaMascota: String,
    sexoMascota: String,
    raza: String,
    color: String,
    descripcionMascota: String,
    microchip: String,
    animal: String,
    propietario: { type: mongoose.Schema.Types.ObjectId, ref: 'Propietarios' },
    createdAT: {
        type: Date,
        default: Date.now
    }
})