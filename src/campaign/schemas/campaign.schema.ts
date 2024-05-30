import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CampaignTypes ,CampaignTypeSchema } from './campaignType.schema';

@Schema({ timestamps: true })
export class Campaign extends Document {
  
  @Prop({ unique:true, required: true  })
  name: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Template' , unique: true})
  template: string;

  @Prop({ required: true })
  start: Date;

  @Prop({ required: true, type: [{ type: Types.ObjectId, ref: 'ContactOrGroup' }] })
  recipients: Types.ObjectId[];

  @Prop({ required: true })
  interval: number;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Resource' })
  resource: string;

  
  
  @Prop({ type:CampaignTypeSchema , required: true })
  types: CampaignTypes;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User',required: false })
  updatedBy?: Types.ObjectId;

}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);







// @Prop({
  //   required: true,
  //   type: [String],
  //   enum: ['Email', 'Whatsapp', 'Telegram', 'Sms']
  // })
  // types: string[];

  
  // @Prop({
  //   required: true,
  //   type: {
  //     Email: { type: Boolean, default: true },
  //     Whatsapp: { type: Boolean, default: true },
  //     Telegram: { type: Boolean, default: true },
  //     Sms: { type: Boolean, default: true },
  //   },
  //   default: {
  //     Email: true,
  //     Whatsapp: true,
  //     Telegram: true,
  //     Sms: true,
  //   }
  // })
  // types: {
  //   Email: boolean;
  //   Whatsapp: boolean;
  //   Telegram: boolean;
  //   Sms: boolean;
  // };