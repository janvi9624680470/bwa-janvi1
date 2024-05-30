import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { IGroup } from './interfaces/group.interface';

@Injectable()
export class GroupService {

  constructor(@InjectModel('Group') private groupModel: Model<IGroup>) { }
  async create(createGroupDto: CreateGroupDto) : Promise<IGroup> {
    try {
      const group = new this.groupModel(createGroupDto);
      return await group.save();
    } catch (error) {

      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        throw new ConflictException(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
      }
      throw error;
    }
  }

  async findAll(): Promise<IGroup[]> {
    const group = await this.groupModel.find();
    if (!group || group.length == 0) {
      throw new NotFoundException('group Data Not Found');
    }
    return group;
  }

 async  findOne(id: string): Promise<IGroup> {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }


  const group = await this.groupModel.findById(id);
  if (!group) {
    throw new NotFoundException(`group #${id} Not Found`);
  }
  return group;
  }

 async update(id: string, updateGroupDto: UpdateGroupDto): Promise<IGroup> {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }

  const group = await this.groupModel.findByIdAndUpdate(id, updateGroupDto, {
    new: true,
  });
  if (!group) {
    throw new NotFoundException(`group #${id} Not Found`);
  }
  return group;
  }

 async remove(id: string): Promise<IGroup> {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }

  const group = await this.groupModel.findByIdAndDelete(id);
  if (!group) {
    throw new NotFoundException(`group #${id} Not Found`);
  }
  return group;
  }
}
