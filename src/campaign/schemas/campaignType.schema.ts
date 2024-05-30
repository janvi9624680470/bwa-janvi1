// schemas/permissions.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CampaignTypes extends Document {

  @Prop({ required: true })
Email: boolean;

  @Prop({ required: true })
Whatsapp: boolean;

  @Prop({ required: true })
Telegram: boolean;

  @Prop({ required: true })
 Sms: boolean;
 
}

export const CampaignTypeSchema = SchemaFactory.createForClass(CampaignTypes);