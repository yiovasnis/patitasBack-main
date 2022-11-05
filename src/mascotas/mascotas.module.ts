import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { propietariosSchema } from './schemas/propietario.schema';
import { mascotasSchema } from './schemas/mascota.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Propietarios', schema: propietariosSchema},
      {name: 'Mascotas', schema: mascotasSchema}
    ])
  ],
  controllers: [MascotasController],
  providers: [MascotasService]
})
export class MascotasModule {}
