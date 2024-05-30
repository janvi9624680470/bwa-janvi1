import { IsNotEmpty, IsString, IsNumber, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateStorageDto {
    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    volume: string;
}

export class CreateConfigurationDto {
    @IsNotEmpty()
    @IsString()
    processor: string;

    @IsNotEmpty()
    @IsNumber()
    cores: number;

    @IsNotEmpty()
    @IsString()
    ram: string;

    // @IsNotEmpty()
    // @ValidateNested()
    // @Type(() => CreateStorageDto)
    // storage: CreateStorageDto;

    @IsOptional() // Make storage optional
    @ValidateNested()
    @Type(() => CreateStorageDto)
    storage?: CreateStorageDto; 

    @IsNotEmpty()
    @IsString()
    bandwidth: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    type: string;
}



export class CreateResourceDto {
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateConfigurationDto)
    configuration: CreateConfigurationDto;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    campaignType: string;



}
