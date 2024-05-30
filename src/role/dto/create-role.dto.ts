// dto/create-role.dto.ts
import { IsNotEmpty, IsString, ValidateNested, IsObject, IsMongoId, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { Permissions } from '../interfaces/permissions.interface';
import { PermissionsDto } from './permissions.dto';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString({ message: 'Name is required' })
  name: string;

  @IsNotEmpty()
  @IsString({ message: 'Code is required' })
  code: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => PermissionsDto)
  permissions: Permissions;

  @IsNotEmpty({ message: 'Created by user ID is required' })
  @IsMongoId({ message: 'Created by user ID must be a valid MongoDB ObjectId' })
  createdBy: string;

  @IsOptional()
  @IsMongoId({ message: 'Updated by user ID must be a valid MongoDB ObjectId' })
  updatedBy?: string;
}
