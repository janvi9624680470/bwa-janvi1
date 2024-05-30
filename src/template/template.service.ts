import { BadRequestException, ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { ITemplate } from './interfaces/template.interface';

@Injectable()
export class TemplateService {

  constructor(@InjectModel('Template') private templateModel: Model<ITemplate>) { }

  async create(createTemplateDto: CreateTemplateDto): Promise<ITemplate>  {
    try {
      const template = new this.templateModel(createTemplateDto);
      return await template.save();
    } catch (error) {

      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        throw new ConflictException(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
      }
      throw error;
    }
  }

 async findAll(): Promise<ITemplate[]>  {
        const template = await this.templateModel.find();
    if (!template || template.length == 0) {
      throw new NotFoundException('template Data Not Found');
    }
    return template;
  }

  async findOne(id: string): Promise<ITemplate> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }


    const template = await this.templateModel.findById(id);
    if (!template) {
      throw new NotFoundException(`template #${id} Not Found`);
    }
    return template;
  }

  async update(id: string, updateTemplateDto: UpdateTemplateDto): Promise<ITemplate>  {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }

    const template = await this.templateModel.findByIdAndUpdate(id, updateTemplateDto, {
      new: true,
    });
    if (!template) {
      throw new NotFoundException(`template #${id} Not Found`);
    }
    return template;
  }

  async remove(id: string) : Promise<ITemplate>{
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }

    const template = await this.templateModel.findByIdAndDelete(id);
    if (!template) {
      throw new NotFoundException(`template #${id} Not Found`);
    }
    return template;
  }
}
