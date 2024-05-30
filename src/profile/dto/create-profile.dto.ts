import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export class CreateProfileDto {

    @IsNotEmpty({ message: ' identify is required' })
    @IsString({ message: ' identity must be a string' })
    identity: string;

    @IsNotEmpty({ message: ' imgae is required' })
    @IsString({ message: ' imgae must be a string' })
    image: string;


    @IsNotEmpty({ message: ' phone number is required' })
    @IsString({ message: ' number must be a string' })
    @Matches(/^\d{10}$/, { message: 'Phone number must be a valid 10-digit number' })
    number: string;

 

    @IsNotEmpty({ message: 'Status is required' })
    @IsBoolean({ message: 'Status is boolean' })
    status: boolean;

    @IsNotEmpty({ message: 'virtual is required' })
    @IsBoolean({ message: 'Status is boolean' })
    virtual: boolean;

    @IsNotEmpty({ message: 'Resource ID is required' })
    @IsMongoId({ message: 'Resource ID must be a valid MongoDB ObjectId' })
    resource: string;

    @IsNotEmpty({ message: 'Created by user ID is required' })
    @IsMongoId({ message: 'Created by user ID must be a valid MongoDB ObjectId' })
    createdBy: string;

    @IsOptional()
    @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
    updatedBy?: string;
}
