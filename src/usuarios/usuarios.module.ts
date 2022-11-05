import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioSchema } from './schemas/usuarios.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Usuario', schema: usuarioSchema }
    ])
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
