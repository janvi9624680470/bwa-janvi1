// create-user.dto.ts
import { IsNotEmpty, IsString, IsEmail, MinLength, Matches, IsMongoId, IsOptional } from 'class-validator';

export class CreateUserDto {
  
  @IsNotEmpty()
  @IsString({ message: 'First name must be a string' })
  firstName: string;


  
  @IsString({ message: 'Last name must be a string' })
  lastName: string;

  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  userName: string;

  @IsString({ message: 'Display name must be a string' })
  displayName: string;

  @IsString({ message: 'Phone number must be a string' })
  @Matches(/^\d{10}$/, { message: 'Phone number must be a valid 10-digit number' })
  phone: string;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsNotEmpty({ message: 'Verified email is required' })
  @IsEmail({}, { message: 'Verified email must be a valid email address' })
  email_verified: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsNotEmpty({ message: 'role is required' })
  @IsString({ message: 'role must be a string' })
  role: string;

  @IsString({ message: 'Avatar URL must be a string' })
  avatarUrl?: string;

  @IsNotEmpty({ message: 'Status is required' })
  status: boolean;

  @IsNotEmpty({ message: 'Created by user ID is required' })
  @IsMongoId({ message: 'Created by user ID must be a valid MongoDB ObjectId' })
  createdBy: string;

  @IsOptional()
  @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
  updatedBy?: string;
}
