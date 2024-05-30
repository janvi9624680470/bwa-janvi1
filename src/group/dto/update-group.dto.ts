import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { IsMongoId, IsOptional } from 'class-validator';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
    @IsOptional()
    @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
    updatedBy?: string;
}
