import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ _id: false })
export class Email {
  @Prop({ required: true })
  address: string;

  @Prop({ default: false })
  verified: boolean;
}

export const EmailSchema = SchemaFactory.createForClass(Email);

@Schema({ _id: false })
export class Phone {
  @Prop({ required: true })
  number: string;

  @Prop({ default: false })
  verified: boolean;

  @Prop({ default: false })
  whatsapp: boolean;

  @Prop({ default: false })
  telegram: boolean;
}

export const PhoneSchema = SchemaFactory.createForClass(Phone);

@Schema({ _id: false })
export class Website {
  @Prop({ required: true })
  url: string;

  @Prop({ default: false })
  verified: boolean;
}

export const WebsiteSchema = SchemaFactory.createForClass(Website);

@Schema({ _id: false })
export class Address {
  @Prop({ required: true })
  line1: string;

  @Prop()
  line2: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  pincode: string;

  @Prop({ default: false })
  is_default: boolean;
}

export const AddressSchema = SchemaFactory.createForClass(Address);

@Schema({timestamps:true})
export class Contact extends Document {
  @Prop({ unique:true , required: true })
  type: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true ,unique:true })
  name: string;

  @Prop({ type: EmailSchema, required: true })
  email: Email;

  @Prop({ type: PhoneSchema, required: true })
  phone: Phone;

  @Prop({ type: WebsiteSchema, required: true })
  website: Website;

  @Prop({ type: AddressSchema, required: true })
  address: Address;

  @Prop({ type: [String], required: true })
  groups: string[];

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User',required: false })
  updatedBy?: Types.ObjectId;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);































