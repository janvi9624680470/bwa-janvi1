import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) { }

  async create(createUserDto: CreateUserDto): Promise<IUser> {

    try {
      const { email, email_verified, ...userData } = createUserDto;
      let IsEmailVerified = undefined;
      if (email === email_verified) {
        IsEmailVerified = new Date();
      }
      if (email !== email_verified) {
        throw new BadRequestException(` email and varifild emaila are different`)
      }
      // const user = new this.userModel(createUserDto);
      const user = new this.userModel({ ...userData, email, email_verified: IsEmailVerified });
      return await user.save();
    } catch (error) {
      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        throw new ConflictException(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
      }
      throw error;
    }

  }

  async findAll(): Promise<IUser[]> {
    const users = await this.userModel.find();
    if (!users || users.length == 0) {
      throw new NotFoundException('User Data Not Found');
    }
    return users;

  }

  async findOne(id: string): Promise<IUser> {
 
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }


    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User #${id} Not Found`);
    }
    return user;

  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
  
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }

    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    if (!user) {
      throw new NotFoundException(`User #${id} Not Found`);
    }
    return user;

  }

  async remove(id: string): Promise<IUser> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }

    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) {
      throw new NotFoundException(`User #${id} Not Found`);
    }
    return user;

  }
  async findOneByUserName(userName: string): Promise<IUser> {

    const user = await this.userModel.findOne({userName});
    return user
  }
}
