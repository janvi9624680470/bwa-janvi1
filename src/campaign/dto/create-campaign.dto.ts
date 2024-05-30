import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsArray, IsNumber, IsBoolean, IsIn, IsMongoId, IsDateString, ArrayNotEmpty, IsEmpty, IsOptional, IsObject, ValidateNested } from 'class-validator';
import { IsNull } from 'typeorm';
import { CampaignType } from '../interfaces/campaignType.interface';
import { TypeDto } from './type.dto';



export class CreateCampaignDto {
  @IsNotEmpty({ message: 'Campaign name is required' })
  @IsString({ message: 'Campaign name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Template ID is required' })
  @IsString({ message: 'Template name must be a string' })
  @IsMongoId({ message: 'Template ID must be a valid MongoDB ObjectId' })
  template: string;

  @IsNotEmpty({ message: 'Start time is required' })
  @IsDateString()
  start: string;

  @IsNotEmpty({ message: 'Recipients are required' })
  @IsArray({ message: 'Recipients must be an array' })
  @ArrayNotEmpty({ message: 'Recipients array must not be empty' })
  @IsMongoId({ each: true, message: 'Each recipient ID must be a valid MongoDB ObjectId' })
  recipients: string[];

  @IsNotEmpty({ message: 'Interval is required' })
  @IsNumber({}, { message: 'Interval must be a number' })
  interval: number;

  @IsNotEmpty({ message: 'Resource ID is required' })
  @IsMongoId({ message: 'Resource ID must be a valid MongoDB ObjectId' })
  resource: string;

  // @IsNotEmpty({ message: 'Types are required' })
  // @IsObject({ message: 'Types must be an array' })
  // @ArrayNotEmpty({ message: 'Types array must not be empty' })
  // @IsIn(['Email', 'Whatsapp', 'Telegram', 'Sms'], { each: true, message: 'Each type must be one of Email, Whatsapp, Telegram, Sms' })
  // types: string[];

  @IsNotEmpty({ message: 'Types are required' })
  @IsObject({ message: 'Types must be an object' })
  @ValidateNested()
  @Type(() => TypeDto)
  types: CampaignType;



  @IsNotEmpty({ message: 'Created by user ID is required' })
  @IsMongoId({ message: 'Created by user ID must be a valid MongoDB ObjectId' })
  createdBy: string;

  @IsOptional()
  @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
  updatedBy?: string;
}


