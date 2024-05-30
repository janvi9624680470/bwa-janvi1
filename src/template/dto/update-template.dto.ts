import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDto } from './create-template.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {
    @IsNotEmpty({ message: 'Updated by user ID is required' })
    @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
    updatedBy: string;
}
