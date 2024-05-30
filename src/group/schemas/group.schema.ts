import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Group extends Document {

  
  @Prop({unique: true, required: true })
  name: string;

  @Prop({ required: true })
  code: string;

  
  @Prop({ type: [String], required: true })
  contacts: string[];

  @Prop()
  status: boolean;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User',required: false })
  updatedBy?: Types.ObjectId;

}

export const GroupSchema = SchemaFactory.createForClass(Group);

