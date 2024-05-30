import { ConflictException, Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IResource } from './interfaces/resource.interface';

@Injectable()
export class ResourceService {
  constructor(@InjectModel('Resource') private resourceModel: Model<IResource>) { }
 
  async create(createResourceDto: CreateResourceDto): Promise<IResource>  {
  try {
    const resource = new this.resourceModel(createResourceDto);
    return await resource.save();
  } catch (error) {

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new ConflictException(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
    }
    throw error;
  }
  }

 async findAll() {
    return `This action returns all resource`;
  }

 async findOne(id: number) {
    return `This action returns a #${id} resource`;
  }

async  update(id: number, updateResourceDto: UpdateResourceDto) {
    return `This action updates a #${id} resource`;
  }

 async remove(id: number) {
    return `This action removes a #${id} resource`;
  }
}
