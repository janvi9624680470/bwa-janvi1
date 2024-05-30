import { Document, Types } from 'mongoose';


export interface ITemplate extends Document {
  readonly name: string;
  readonly content: string;
  readonly image: string;
  readonly status: boolean;
  readonly createdBy: Types.ObjectId;
  readonly updatedBy: Types.ObjectId | null;
}



