import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { UsuarioInterface } from './interfaces/usuario.interface';

@Injectable()
export class UsuariosService {

  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<UsuarioInterface>){}

  //CREAR UN USUARIO
  async create(createUsuarioDto: UsuarioDto): Promise<UsuarioDto> {

    const newUsuario = new this.usuarioModel( createUsuarioDto );
    return await newUsuario.save();

  }

  //METODO PARA INICIAR SESION
  async login( createUsuarioDto: UsuarioDto ): Promise<UsuarioDto | null> {

    const usuario = await this.usuarioModel.findOne({ 'correo': createUsuarioDto.correo });

    return usuario ? usuario.password === createUsuarioDto.password ? usuario : null : null;
  }
  
  async findOne(id: string): Promise<UsuarioDto> {
    const usuario = await this.usuarioModel.findById( id );
    return usuario;
  }

  findAll() {
    return `This action returns all usuarios`;
  }


  async update(id: string, updateUser: UsuarioDto) {
    const actualizar = await this.usuarioModel.findByIdAndUpdate( id,updateUser, { new: true } )
    return actualizar;

  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
