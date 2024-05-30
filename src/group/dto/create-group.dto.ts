import { ArrayNotEmpty, IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGroupDto {

    @IsNotEmpty()
    @IsString({ message: ' name must be a string' })
    name: string;
  
    @IsNotEmpty()
    @IsString({ message: ' code must be a string' })
    code: string;

    @IsNotEmpty({ message: 'Status is required' })
    status: boolean;

   
    @IsNotEmpty({ message: 'contact is required' })
    @IsString({ each: true })
    @ArrayNotEmpty({ message: 'contacts array must not be empty' })
    @IsArray()
    @IsMongoId({ each: true, message: 'Each contact ID must be a valid MongoDB ObjectId' })
    contacts: string[];

    @IsNotEmpty({ message: 'Created by user ID is required' })
    @IsMongoId({ message: 'Created by user ID must be a valid MongoDB ObjectId' })
    createdBy: string;
  
    @IsOptional()
    @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
    updatedBy?: string;
}
