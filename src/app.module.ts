import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MascotasModule } from './mascotas/mascotas.module';

@Module({
  imports: [
    UsuariosModule,
    MongooseModule.forRoot('mongodb://localhost/patitasDigitales'),
    MascotasModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
