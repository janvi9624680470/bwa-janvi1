import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Template extends Document {

  
  @Prop({unique: true, required: true })
  name: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  image: string;

  @Prop()
  status: boolean;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User',required: false })
  updatedBy?: Types.ObjectId;

}

export const TemplateSchema = SchemaFactory.createForClass(Template);

