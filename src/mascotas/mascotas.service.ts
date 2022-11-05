import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Model } from 'mongoose';
import { MascotaInterface } from './interfaces/mascota.interface';
import { PropietarioInterface } from '../../dist/mascotas/interfaces/propietario.interface';

@Injectable()
export class MascotasService {
  constructor(@InjectModel('Mascotas') private mascotasModel: Model<MascotaInterface>,
              @InjectModel('Propietarios') private propietariosModel: Model<PropietarioInterface>) {}

  async create(createMascotaDto: CreateMascotaDto): Promise<CreateMascotaDto> {
    
    const mascota = {
      nombreMascota: createMascotaDto.nombreMascota,
      expediente: createMascotaDto.expediente,
      fechaMascota: createMascotaDto.fechaMascota,
      sexoMascota: createMascotaDto.sexoMascota,
      raza: createMascotaDto.raza,
      color: createMascotaDto.color,
      descripcionMascota: createMascotaDto.descripcionMascota,
      microchip: createMascotaDto.microchip,
      animal: createMascotaDto.animal
    }

    const mascotaBd = new this.mascotasModel( mascota );

    const propietario = {
      nombrePropietario: createMascotaDto.nombrePropietario,
      direccion: createMascotaDto.direccion,
      telefono: createMascotaDto.telefono,
      correo: createMascotaDto.correo,
      id_mascota: mascotaBd._id
    }

    const propietarioBd = new this.propietariosModel( propietario );
    mascotaBd.propietario = propietarioBd._id;

    await mascotaBd.save();
    await propietarioBd.save();

    return await this.mascotasModel.findById(mascotaBd._id).populate("propietario")
  }

  findAll() {
    return `This action returns all mascotas`;
  }

  async findOne(id: string) {
    return await this.mascotasModel.findById( id ).populate("propietario");
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    return `This action updates a #${id} mascota`;
  }

  remove(id: number) {
    return `This action removes a #${id} mascota`;
  }
}
