import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Timestamp } from 'typeorm';

@Schema({ timestamps: true })
export class User extends Document {

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ unique: true, required: true })
  userName: string;

  @Prop()
  displayName: string;

  @Prop({ unique: true, sparse: true }) // Sparse index to allow multiple null values
  phone: string;

  @Prop({ unique: true, sparse: true }) // Sparse index to allow multiple null values
  email: string;

  @Prop() // Sparse index to allow multiple null values
  email_verified: Date;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true }) // Sparse index to allow multiple null values
  role: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ required: true, default: true }) // Default value to true
  status: boolean;


  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User',required: false })
  updatedBy?: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);

