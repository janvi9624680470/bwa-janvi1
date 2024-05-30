import { PartialType } from '@nestjs/mapped-types';
import { CreateCampaignDto } from './create-campaign.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateCampaignDto extends PartialType(CreateCampaignDto) {
    @IsNotEmpty({ message: 'Updated by user ID is required' })
    @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
    updatedBy: string;
}
