import { Document, Types } from 'mongoose';



export interface IStorage {
  type: string;
  volume: string;
}

export interface IConfiguration {
  processor: string;
  cores: number;
  ram: string;
  storage: IStorage;
  bandwidth: string;
  location: string;
  type: string;
}

export interface IResource  extends Document {
  readonly name: string;
  readonly  configuration: IConfiguration;
  readonly type: string;
  readonly campaignType: string;
  readonly createdBy: Types.ObjectId;
  readonly updatedBy: Types.ObjectId | null;
}


