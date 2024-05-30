import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { IsMongoId, IsOptional } from 'class-validator';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    @IsOptional()
    @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
    updatedBy?: string;
}
