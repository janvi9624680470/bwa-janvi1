import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { IRole } from './interfaces/role.interface';

@Injectable()
export class RoleService {

  constructor(@InjectModel('Role') private roleModel: Model<IRole>) { }
  async create(createRoleDto: CreateRoleDto): Promise<IRole> {
    try {

      const role = new this.roleModel(createRoleDto);
      return await role.save();
    } catch (error) {

      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        throw new ConflictException(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
      }
      throw error;
    }
  }

 async findAll(): Promise<IRole[]>  {
  const role = await this.roleModel.find();
  if (!role || role.length == 0) {
    throw new NotFoundException('role Data Not Found');
  }
  return role;
  }

 async findOne(id: string): Promise<IRole>  {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }


  const role = await this.roleModel.findById(id);
  if (!role) {
    throw new NotFoundException(`role #${id} Not Found`);
  }
  return role;
  }

 async update(id: string, updateRoleDto: UpdateRoleDto): Promise<IRole>  {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }

  const role = await this.roleModel.findByIdAndUpdate(id, updateRoleDto, {
    new: true,
  });
  if (!role) {
    throw new NotFoundException(`role #${id} Not Found`);
  }
  return role;
  }

 async remove(id: string): Promise<IRole>  {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }

  const role = await this.roleModel.findByIdAndDelete(id);
  if (!role) {
    throw new NotFoundException(`role #${id} Not Found`);
  }
  return role;
  }
}
