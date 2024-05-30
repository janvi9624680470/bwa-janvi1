import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { IContact } from './interfaces/contact.interface';

@Injectable()
export class ContactService {

  constructor(@InjectModel('Contact') private contactModel: Model<IContact>) { }
 async  create(createContactDto: CreateContactDto): Promise<IContact> {
  try {
    // console.log(createContactDto,'create')
    const contact = new this.contactModel(createContactDto);
    return await contact.save();
  } catch (error) {

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new ConflictException(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
    }
    throw error;
  }
  }

 async  findAll(): Promise<IContact[]> {
  const contact = await this.contactModel.find();
  if (!contact || contact.length == 0) {
    throw new NotFoundException('contact Data Not Found');
  }
  return contact;
  }

 async  findOne(id: string): Promise<IContact> {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }


  const contact = await this.contactModel.findById(id);
  if (!contact) {
    throw new NotFoundException(`contact #${id} Not Found`);
  }
  return contact;
  }

 async  update(id: string, updateContactDto: UpdateContactDto) : Promise<IContact>{
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }

  const contact = await this.contactModel.findByIdAndUpdate(id, updateContactDto, {
    new: true,
  });
  if (!contact) {
    throw new NotFoundException(`contact #${id} Not Found`);
  }
  return contact;
  }

 async  remove(id: string): Promise<IContact> {
  if (!isValidObjectId(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }

  const contact = await this.contactModel.findByIdAndDelete(id);
  if (!contact) {
    throw new NotFoundException(`contact #${id} Not Found`);
  }
  return contact;
  }
}
