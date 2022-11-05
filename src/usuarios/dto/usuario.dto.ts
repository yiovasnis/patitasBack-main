//DEFINE LO QUE SE RECIBE Y ENVIA 
export class UsuarioDto {
    readonly clinica: string;
    readonly nombreMedico: string;
    readonly cedula: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly correo: string;
    readonly password: string;
    readonly createdAT: Date;
}

    //  "clinica": 'Patitas Digitales';
    //  "nombreMedico": "Medico prueba";
    //  "cedula": "ABCD8001234HDFRRD00";
    //  "direccion": "CDMX";
    //  "telefono": "1234567891";
    //  "correo": "correo_Prueba@gmail.com";
    //  "password": "medicoPrueba";
