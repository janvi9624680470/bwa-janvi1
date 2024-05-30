import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTemplateDto {

  @IsNotEmpty()
  @IsString({ message: ' name must be a string' })
  name: string;

  @IsNotEmpty()
  @IsString({ message: ' content must be a string' })
  content: string;

  @IsNotEmpty()
  @IsString({ message: ' image must be a string' })
  image: string;

  @IsNotEmpty({ message: 'Status is required' })
  @IsBoolean()
  status: boolean;

  @IsNotEmpty({ message: 'Created by user ID is required' })
  @IsMongoId({ message: 'Created by user ID must be a valid MongoDB ObjectId' })
  createdBy: string;

  @IsOptional()
  @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
  updatedBy?: string;
}
