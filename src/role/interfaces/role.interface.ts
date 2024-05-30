// interfaces/role.interface.ts
import { Types } from 'mongoose';
import { Permissions } from './permissions.interface';

export interface IRole  extends Document  {
    readonly name: string;
    readonly code: string;
    readonly permissions: Permissions;
    readonly createdBy: Types.ObjectId;
    readonly updatedBy: Types.ObjectId | null;
}

