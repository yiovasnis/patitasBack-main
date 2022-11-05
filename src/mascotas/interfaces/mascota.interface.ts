import { Document } from 'mongoose';

export interface MascotaInterface extends Document {
     nombreMascota: string;
     expediente: string;
     fechaMascota: string;
     sexoMascota: string;
     raza: string;
     color: string;
     descripcionMascota: string;
     microchip: string;
     animal: string;
     propietario: string;
     createdAT: Date;
}