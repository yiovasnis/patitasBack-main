//SIRVE PARA DETALLAR LO QUE SE MANEJARA DENTRO DEL CODIGO
import { Document } from 'mongoose';

export interface PropietarioInterface extends Document {
    readonly nombrePropietario: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly correo: string;
    readonly id_mascota: string;
    readonly createdAT: Date;
}