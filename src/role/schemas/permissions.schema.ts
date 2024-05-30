// schemas/permissions.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class Permissions extends Document {
  @Prop({ required: true })
  dashboard: boolean;

  @Prop({ required: true })
  "setting.profile": boolean;

  @Prop({ required: true })
  "setting.general": boolean;

  @Prop({ required: true })
  "setting.security": boolean;

  @Prop({ required: true })
  "role.list": boolean;

  @Prop({ required: true })
  "role.create": boolean;

  @Prop({ required: true })
  "role.show": boolean;

  @Prop({ required: true })
  "role.edit": boolean;

  @Prop({ required: true })
  "role.delete": boolean;

  @Prop({ required: true })
  "user.list": boolean;

  @Prop({ required: true })
  "user.create": boolean;

  @Prop({ required: true })
  "user.show": boolean;

  @Prop({ required: true })
  "user.edit": boolean;

  @Prop({ required: true })
  "user.delete": boolean;

  @Prop({ required: true })
  "package.list": boolean;

  @Prop({ required: true })
  "package.create": boolean;

  @Prop({ required: true })
  "package.show": boolean;

  @Prop({ required: true })
  "package.edit": boolean;

  @Prop({ required: true })
  "package.delete": boolean;

  @Prop({ required: true })
  "profile.list": boolean;

  @Prop({ required: true })
  "profile.create": boolean;

  @Prop({ required: true })
  "profile.show": boolean;

  @Prop({ required: true })
  "profile.edit": boolean;

  @Prop({ required: true })
  "profile.delete": boolean;

  @Prop({ required: true })
  "group.list": boolean;

  @Prop({ required: true })
  "group.create": boolean;

  @Prop({ required: true })
  "group.show": boolean;

  @Prop({ required: true })
  "group.edit": boolean;

  @Prop({ required: true })
  "group.delete": boolean;

  @Prop({ required: true })
  "contact.list": boolean;

  @Prop({ required: true })
  "contact.create": boolean;

  @Prop({ required: true })
  "contact.show": boolean;

  @Prop({ required: true })
  "contact.edit": boolean;

  @Prop({ required: true })
  "contact.delete": boolean;

  @Prop({ required: true })
  "campaign.list": boolean;

  @Prop({ required: true })
  "campaign.create": boolean;

  @Prop({ required: true })
  "campaign.show": boolean;

  @Prop({ required: true })
  "campaign.edit": boolean;

  @Prop({ required: true })
  "campaign.delete": boolean;

  @Prop({ required: true })
  "template.list": boolean;

  @Prop({ required: true })
  "template.create": boolean;

  @Prop({ required: true })
  "template.show": boolean;

  @Prop({ required: true })
  "template.edit": boolean;

  @Prop({ required: true })
  "template.delete": boolean;

  @Prop({ required: true })
  "resource.list": boolean;

  @Prop({ required: true })
  "resource.create": boolean;

  @Prop({ required: true })
  "resource.show": boolean;

  @Prop({ required: true })
  "resource.edit": boolean;

  @Prop({ required: true })
  "resource.delete": boolean;

  @Prop({ required: true })
  "billing.list": boolean;

  @Prop({ required: true })
  "billing.show": boolean;

  @Prop({ required: true })
  "transaction.list": boolean;

  @Prop({ required: true })
  "transaction.show": boolean;

  @Prop({ required: true })
  "history.list": boolean;

  @Prop({ required: true })
  "history.show": boolean;

  @Prop({ required: true })
  "ticket.list": boolean;

  @Prop({ required: true })
  "ticket.create": boolean;

  @Prop({ required: true })
  "ticket.show": boolean;

  @Prop({ required: true })
  "ticket.update": boolean;

  @Prop({ required: true })
  "ticket.delete": boolean;
}

export const PermissionsSchema = SchemaFactory.createForClass(Permissions);
