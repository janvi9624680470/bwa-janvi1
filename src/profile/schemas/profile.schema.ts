import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Profile extends Document {

  
  @Prop({unique: true, required: true })
  identity: string;

  @Prop({ unique: true, required: true })
  number: string;

  @Prop({ required: true })
  image: string;

  @Prop({ unique:true , required: true })
  resource: string;

  @Prop()
  status: boolean;

  @Prop()
  virtual: boolean;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User',required: false })
  updatedBy?: Types.ObjectId;

}

export const ProfileSchema = SchemaFactory.createForClass(Profile);

