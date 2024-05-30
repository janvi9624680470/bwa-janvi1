

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
  UsePipes,
  ValidationPipe,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ErrorHandler } from 'src/helpers/ErrorHandler ';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundError } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  // @UseGuards(AuthGuard())
  // @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    try {

      const user = await this.userService.create(createUserDto);
      return { statusCode: HttpStatus.CREATED, message: 'User Created Successfully!', data: { user } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'User creation failed', error: error.message }, HttpStatus.BAD_REQUEST);
      // ErrorHandler.handle(error, 'User creation failed');
    }
  }

  @Get()
  // @UseGuards(AuthGuard())
  async findAll() {
    try {
      const users = await this.userService.findAll();

      return { statusCode: HttpStatus.OK, message: 'User Collection Fetched Successfully!', data: { users } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to fetch users', error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      // ErrorHandler.handle(error, 'Failed to fetch user');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {

      

      const user = await this.userService.findOne(id);
      if (!user) {
        throw new HttpException({ statusCode: HttpStatus.NOT_FOUND, message: 'User not found', error: 'User with the given ID does not exist' }, HttpStatus.NOT_FOUND);
      }
      return { statusCode: HttpStatus.OK, message: 'User Fetched Successfully!', data: { user } };
    } catch (error) {

      throw new HttpException({
        statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Failed to fetch user',
        error: error.response || error.message
      },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
     
      const user = await this.userService.update(id, updateUserDto);
      return { statusCode: HttpStatus.OK, message: 'User Updated Successfully!', data: { user } };
    } catch (error) {
      // ErrorHandler.handle(error, 'User update failed');
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'User update failed', error: error.message }, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.userService.remove(id);
      return { statusCode: HttpStatus.OK, message: 'User Deleted Successfully!' };
    } catch (error) {
      // ErrorHandler.handle(error, 'User deletion failed');
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'User deletion failed', error: error.message }, HttpStatus.BAD_REQUEST);
    }
  }
}

