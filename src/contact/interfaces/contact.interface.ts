import { Document, Types } from 'mongoose';


// export interface ITemplate extends Document {
//   readonly name: string;
//   readonly content: string;
//   readonly image: string;
//   readonly status: string;
//   readonly createdBy: Types.ObjectId;
//   readonly updatedBy: Types.ObjectId | null;
// }

export interface Email {
  address: string;
  verified: boolean;
}

export interface Phone {
  number: string;
  verified: boolean;
  whatsapp: boolean;
  telegram: boolean;
}

export interface Website {
  url: string;
  verified: boolean;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  is_default: boolean;
}

export interface IContact extends Document {
  readonly type: string;
  readonly category: string;
  readonly name: string;
  readonly email: Email;
  readonly phone: Phone;
  readonly website: Website;
  readonly address: Address;
  readonly groups: string[];
  readonly createdBy: Types.ObjectId;
  readonly updatedBy: Types.ObjectId | null;
}


