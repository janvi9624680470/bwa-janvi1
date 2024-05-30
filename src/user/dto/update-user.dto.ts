import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty({ message: 'Updated by user ID is required' })
    @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
    updatedBy: string;
}
