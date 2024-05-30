// schemas/role.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Permissions, PermissionsSchema } from './permissions.schema';

@Schema({ timestamps: true })
export class Role extends Document {
  @Prop({ unique:true ,required: true })
  name: string;

  @Prop({ required: true })
  code: string;

  @Prop({ type: PermissionsSchema, required: true })
  permissions: Permissions;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  updatedBy?: Types.ObjectId;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
