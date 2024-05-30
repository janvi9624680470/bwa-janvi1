import { Document, Types } from 'mongoose';


export interface IProfile extends Document {
  readonly identity: string;
  readonly number: string;
  readonly resource: string;
  readonly image: string;
  readonly status: boolean;
  readonly virtual: boolean;
  readonly createdBy: Types.ObjectId;
  readonly updatedBy: Types.ObjectId | null;
}



