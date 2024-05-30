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
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
  
    try {

      const group  = await this.groupService.create(createGroupDto);
      return { statusCode: HttpStatus.CREATED, message: 'group Created Successfully!', data: { group } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'User creation failed', error: error.message }, HttpStatus.BAD_REQUEST);
  
    }
  }

  @Get()
 async  findAll() {
  try {
    const group = await this.groupService.findAll();

    return { statusCode: HttpStatus.OK, message: 'group Collection Fetched Successfully!', data: { group } };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to fetch group', error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
  
  }
  }

  @Get(':id')
 async  findOne(@Param('id') id: string) {
  
  try {

    const group = await this.groupService.findOne(id);
    if (!group) {
      throw new HttpException({ statusCode: HttpStatus.NOT_FOUND, message: 'group not found', error: 'group with the given ID does not exist' }, HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, message: 'group Fetched Successfully!', data: { group } };
  } catch (error) {

    throw new HttpException({
      statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message || 'Failed to fetch group',
      error: error.response || error.message
    },
      error.status || HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    try {
      const group = await this.groupService.update(id, updateGroupDto);
      return { statusCode: HttpStatus.OK, message: 'group Updated Successfully!', data: { group } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'group update failed', error: error.message }, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
  try {
    await this.groupService.remove(id);
    return { statusCode: HttpStatus.OK, message: 'group Deleted Successfully!' };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'group deletion failed', error: error.message }, HttpStatus.BAD_REQUEST);
  }
  }
}
