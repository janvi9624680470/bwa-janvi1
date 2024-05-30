import { Document, Types } from 'mongoose';
export interface IUser extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly userName: string;
  readonly displayName: string;
  readonly phone: string;
  readonly email: string;
  readonly email_verified?: Date;
  readonly password: string;
  readonly status: boolean;
  readonly role: string;
  readonly createdBy: Types.ObjectId;
  readonly updatedBy: Types.ObjectId | null;



}



