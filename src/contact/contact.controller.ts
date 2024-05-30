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
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
 async create(@Body() createContactDto: CreateContactDto) {
    try {
// console.log(createContactDto,'create')
      const contact  = await this.contactService.create(createContactDto);
      return { statusCode: HttpStatus.CREATED, message: 'contact Created Successfully!', data: { contact } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'contact creation failed', error: error.message }, HttpStatus.BAD_REQUEST);
  
    }
  }

  @Get()
 async findAll() {
  try {
    const contact = await this.contactService.findAll();

    return { statusCode: HttpStatus.OK, message: 'contact Collection Fetched Successfully!', data: { contact } };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to fetch contact', error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
  
  }
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {

  try {

    const contact = await this.contactService.findOne(id);
    if (!contact) {
      throw new HttpException({ statusCode: HttpStatus.NOT_FOUND, message: 'contact not found', error: 'contact with the given ID does not exist' }, HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, message: 'contact Fetched Successfully!', data: { contact } };
  } catch (error) {

    throw new HttpException({
      statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message || 'Failed to fetch contact',
      error: error.response || error.message
    },
      error.status || HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  @Patch(':id')
 async update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
  try {
    const contact = await this.contactService.update(id, updateContactDto);
    return { statusCode: HttpStatus.OK, message: 'contact Updated Successfully!', data: { contact } };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'contact update failed', error: error.message }, HttpStatus.BAD_REQUEST);
  }
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
  
  try {
    await this.contactService.remove(id);
    return { statusCode: HttpStatus.OK, message: 'contact Deleted Successfully!' };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'contact deletion failed', error: error.message }, HttpStatus.BAD_REQUEST);
  }
  }
}
