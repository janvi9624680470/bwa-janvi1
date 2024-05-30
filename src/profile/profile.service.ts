import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { IProfile } from './interfaces/profile.interface';

@Injectable()
export class ProfileService {
  constructor(@InjectModel('Profile') private profileModel: Model<IProfile>) { }
async  create(createProfileDto: CreateProfileDto): Promise<IProfile>{
  try {
    const profile = new this.profileModel(createProfileDto);
    return await profile.save();
  } catch (error) {

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new ConflictException(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
    }
    throw error;
  }
  }

 async findAll(): Promise<IProfile[]>   {
  const profile = await this.profileModel.find();
  if (!profile || profile.length == 0) {
    throw new NotFoundException('profile Data Not Found');
  }
  return profile;
  }

 async findOne(id: string): Promise<IProfile>{
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }


  const profile = await this.profileModel.findById(id);
  if (!profile) {
    throw new NotFoundException(`profile #${id} Not Found`);
  }
  return profile;
  }

  
 async update(id: string, updateProfileDto: UpdateProfileDto): Promise<IProfile> {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }
  
  // if (!updateProfileDto.updatedBy) {
  //   throw new BadRequestException('Updated by user ID is required');
  // }

  const profile = await this.profileModel.findByIdAndUpdate(id, updateProfileDto, {
    new: true,
  });
  if (!profile) {
    throw new NotFoundException(`profile #${id} Not Found`);
  }
  return profile;
  }

 async remove(id: string) : Promise<IProfile> {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }

  const profile = await this.profileModel.findByIdAndDelete(id);
  if (!profile) {
    throw new NotFoundException(`profile #${id} Not Found`);
  }
  return profile;
  }
}
