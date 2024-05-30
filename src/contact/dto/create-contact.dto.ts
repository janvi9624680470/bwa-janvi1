import { ArrayNotEmpty, IsArray, IsBoolean, IsEmail, IsMongoId, IsNotEmpty, IsObject, IsOptional, IsString, Matches, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class EmailDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  address: string;

  @IsBoolean({ message: 'verified must be a boolean' })
  verified: boolean;
}

class PhoneDto {
  @IsNotEmpty({ message: 'phone number is required' })
  @IsString()
  @Matches(/^\d{10}$/, { message: 'Phone number must be a valid 10-digit number' })
  number: string;

  @IsBoolean()
  @IsOptional()
  verified: boolean;

  @IsBoolean({ message: 'whatsapp is boolean' })
  @IsOptional()
  whatsapp: boolean;

  @IsBoolean({ message: 'telegram is boolean' })
  @IsOptional()
  telegram: boolean;
}

class WebsiteDto {
  @IsNotEmpty({ message: 'url is required' })
  @IsString({ message: 'url is string' })
  url: string;

  @IsBoolean()
  verified: boolean;
}

class AddressDto {
  @IsNotEmpty({ message: 'line1 is required' })
  @IsString({ message: 'line1 is string' })
  line1: string;

  @IsString({ message: 'line2 is string' })
  @IsOptional()
  line2?: string;

  @IsNotEmpty({ message: 'city is required' })
  @IsString({ message: 'city is string' })
  city: string;

  @IsNotEmpty({ message: 'state is required' })
  @IsString({ message: 'state is string' })
  state: string;

  @IsNotEmpty({ message: 'country is required' })
  @IsString({ message: 'country is string' })
  country: string;

  @IsNotEmpty({ message: 'pincode is required' })
  @IsString({ message: 'pincode is string' })
  pincode: string;

  @IsBoolean()
  @IsOptional()
  is_default: boolean;
}

export class CreateContactDto {
  @IsNotEmpty({ message: 'type is required' })
  @IsString({ message: 'type must be a string' })
  type: string;

  @IsNotEmpty({ message: 'category is required' })
  @IsString({ message: 'category must be a string' })
  category: string;


  @IsNotEmpty({ message: 'name is required' })
  @IsString({ message: 'name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'email are required' })
  @IsObject({ message: 'email must be an object' })
  @ValidateNested()
  @Type(() => EmailDto)
  email: EmailDto;

  // @IsNotEmpty()
  // @IsObject()
  // @ValidateNested()
  // @Type(() => EmailDto)
  // email: EmailDto;

  @IsNotEmpty({ message: 'phone are required' })
  @IsObject({ message: 'phone must be an object' })
  @ValidateNested()
  @Type(() => PhoneDto)
  phone: PhoneDto;

  @IsNotEmpty({ message: 'website are required' })
  @IsObject({ message: 'website must be an object' })
  @ValidateNested()
  @Type(() => WebsiteDto)
  website: WebsiteDto;

  @IsNotEmpty({ message: 'address are required' })
  @IsObject({ message: 'address must be an object' })
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsNotEmpty({ message: 'group are required' })
  @ArrayNotEmpty({ message: 'group array must not be empty' })
  @IsMongoId({ each: true, message: 'Each recipient ID must be a valid MongoDB ObjectId' })
  @IsArray()
  @IsString({ each: true })
  groups: string[];


  @IsNotEmpty({ message: 'Created by user ID is required' })
  @IsMongoId({ message: 'Created by user ID must be a valid MongoDB ObjectId' })
  createdBy: string;

  @IsOptional()
  @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
  updatedBy?: string;
}
