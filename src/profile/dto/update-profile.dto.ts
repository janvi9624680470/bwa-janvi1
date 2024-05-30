import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsNotEmpty({ message: 'Updated by user ID is required' })
    @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
    updatedBy: string;
}
