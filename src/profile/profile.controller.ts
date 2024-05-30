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
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
 async create(@Body() createProfileDto: CreateProfileDto) {
    try {

      const profile  = await this.profileService.create(createProfileDto);
      return { statusCode: HttpStatus.CREATED, message: 'profile Created Successfully!', data: { profile } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'User creation failed', error: error.message }, HttpStatus.BAD_REQUEST);
  
    }
  }

  @Get()
 async findAll() {
  try {
    const profile = await this.profileService.findAll();

    return { statusCode: HttpStatus.OK, message: 'profile Collection Fetched Successfully!', data: { profile } };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to fetch profile', error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
  
  }
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
  try {

    const profile = await this.profileService.findOne(id);
    if (!profile) {
      throw new HttpException({ statusCode: HttpStatus.NOT_FOUND, message: 'profile not found', error: 'profile with the given ID does not exist' }, HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, message: 'profile Fetched Successfully!', data: { profile } };
  } catch (error) {

    throw new HttpException({
      statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message || 'Failed to fetch profile',
      error: error.response || error.message
    },
      error.status || HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
async  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
  try {
    const profile = await this.profileService.update(id, updateProfileDto);
    return { statusCode: HttpStatus.OK, message: 'profile Updated Successfully!', data: { profile } };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'profile update failed', error: error.message }, HttpStatus.BAD_REQUEST);
  }
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
  try {
    await this.profileService.remove(id);
    return { statusCode: HttpStatus.OK, message: 'profile Deleted Successfully!' };
  } catch (error) {
    throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'profile deletion failed', error: error.message }, HttpStatus.BAD_REQUEST);
  }
  }
}
