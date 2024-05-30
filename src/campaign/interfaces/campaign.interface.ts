import { Document, Types } from 'mongoose';
import { CampaignType } from './campaignType.interface';



export interface ICampaign extends Document {
  readonly name: string;
  readonly template: Types.ObjectId;
  readonly start: Date;
  readonly recipients: Types.ObjectId[];
  readonly interval: number;
  readonly resource: Types.ObjectId;
  // readonly types: string[];
  readonly types:CampaignType;
  readonly createdBy: Types.ObjectId;
  readonly updatedBy?: Types.ObjectId | null ;

}
