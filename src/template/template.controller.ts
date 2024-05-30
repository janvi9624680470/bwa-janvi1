import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post()
  async create(@Body() createTemplateDto: CreateTemplateDto) {
   
    try {

      const template  = await this.templateService.create(createTemplateDto);
      return { statusCode: HttpStatus.CREATED, message: 'Template Created Successfully!', data: { template } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'User creation failed', error: error.message }, HttpStatus.BAD_REQUEST);
  
    }
  }

  @Get()
  async findAll() {

    try {
      const template = await this.templateService.findAll();

      return { statusCode: HttpStatus.OK, message: 'Template Collection Fetched Successfully!', data: { template } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to fetch template', error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
    
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {


    try {

      const template = await this.templateService.findOne(id);
      if (!template) {
        throw new HttpException({ statusCode: HttpStatus.NOT_FOUND, message: 'template not found', error: 'template with the given ID does not exist' }, HttpStatus.NOT_FOUND);
      }
      return { statusCode: HttpStatus.OK, message: 'template Fetched Successfully!', data: { template } };
    } catch (error) {

      throw new HttpException({
        statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Failed to fetch template',
        error: error.response || error.message
      },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTemplateDto: UpdateTemplateDto) {
    
    try {
      const template = await this.templateService.update(id, updateTemplateDto);
      return { statusCode: HttpStatus.OK, message: 'template Updated Successfully!', data: { template } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'template update failed', error: error.message }, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
  
    try {
      await this.templateService.remove(id);
      return { statusCode: HttpStatus.OK, message: 'template Deleted Successfully!' };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'template deletion failed', error: error.message }, HttpStatus.BAD_REQUEST);
    }
  }
}
