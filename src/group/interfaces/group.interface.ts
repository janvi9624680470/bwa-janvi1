import { Document, Types } from 'mongoose';


export interface IGroup extends Document {
  readonly name: string;
  readonly code: string;
  readonly status: boolean;
  readonly contacts: string[];
  readonly createdBy: Types.ObjectId;
  readonly updatedBy: Types.ObjectId | null;
}



