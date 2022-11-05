import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './dto/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  //Crear un usuario
  @Post('crear')
  create(@Body() createUsuarioDto: UsuarioDto): Promise<UsuarioDto> {

    return this.usuariosService.create(createUsuarioDto);

  }
  
  //Iniciar sesion
  @Post('login')
  async logIn(@Body() createUsuarioDto: UsuarioDto, @Res() res ){
    
    const usuario = await this.usuariosService.login( createUsuarioDto );
    
    
    if( usuario ){
      return res.status(HttpStatus.OK).json( usuario )
    }
  
    return res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Usuario o Contraseña incorrectos'
    })
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: UsuarioDto) {
    return this.usuariosService.update( id, updateUser );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
