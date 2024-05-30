import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class Storage {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  volume: string;
}

export const StorageSchema = SchemaFactory.createForClass(Storage);


@Schema({ _id: false })
export class Configuration {
  @Prop({ required: true })
  processor: string;

  @Prop({ required: true })
  cores: number;

  @Prop({ required: true })
  ram: string;

  @Prop({ type: StorageSchema, required: true })
  storage: Storage;

  @Prop({ required: true })
  bandwidth: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  type: string;
}

export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);

@Schema({ timestamps: true })
export class Resource extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: ConfigurationSchema, required: true })
  configuration: Configuration;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  campaignType: string;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);