//SIRVE PARA DETALLAR LO QUE SE MANEJARA DENTRO DEL CODIGO
import { Document } from 'mongoose';

export interface UsuarioInterface extends Document {
    readonly clinica: string;
    readonly nombreMedico: string;
    readonly cedula: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly correo: string;
    readonly password: string;
    readonly createdAT: Date;
}
