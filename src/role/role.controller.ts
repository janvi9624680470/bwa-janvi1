import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
  
    try {
 
      const role  = await this.roleService.create(createRoleDto);
      return { statusCode: HttpStatus.CREATED, message: 'role Created Successfully!', data: { role } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'User creation failed', error: error.message }, HttpStatus.BAD_REQUEST);
  
    }
  }

  @Get()
 async  findAll() {
  try {
    const role = await this.roleService.findAll();

    return { statusCode: HttpStatus.OK, message: 'role Collection Fetched Successfully!', data: { role } };
  } catch (error) {
    console.error('Error creating role:', error);
    throw new HttpException({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to fetch role', error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
  
  }
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
  try {

    const role = await this.roleService.findOne(id);
    if (!role) {
      throw new HttpException({ statusCode: HttpStatus.NOT_FOUND, message: 'role not found', error: 'role with the given ID does not exist' }, HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, message: 'role Fetched Successfully!', data: { role } };
  } catch (error) {

    throw new HttpException({
      statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message || 'Failed to fetch role',
      error: error.response || error.message
    },
      error.status || HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  @Patch(':id')
 async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
  try {
    const role = await this.roleService.update(id, updateRoleDto);
    return { statusCode: HttpStatus.OK, message: 'role Updated Successfully!', data: { role } };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'role update failed', error: error.message }, HttpStatus.BAD_REQUEST);
  }
  }

  @Delete(':id')
async  remove(@Param('id') id: string) {
  try {
    await this.roleService.remove(id);
    return { statusCode: HttpStatus.OK, message: 'role Deleted Successfully!' };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'role deletion failed', error: error.message }, HttpStatus.BAD_REQUEST);
  }
  }
}
