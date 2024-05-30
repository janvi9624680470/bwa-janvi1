// dto/permissions.dto.ts
import { IsBoolean } from 'class-validator';

export class PermissionsDto {
  @IsBoolean()
  dashboard: boolean;

  @IsBoolean()
  "setting.profile": boolean;

  @IsBoolean()
  "setting.general": boolean;

  @IsBoolean()
  "setting.security": boolean;

  @IsBoolean()
  "role.list": boolean;

  @IsBoolean()
  "role.create": boolean;

  @IsBoolean()
  "role.show": boolean;

  @IsBoolean()
  "role.edit": boolean;

  @IsBoolean()
  "role.delete": boolean;

  @IsBoolean()
  "user.list": boolean;

  @IsBoolean()
  "user.create": boolean;

  @IsBoolean()
  "user.show": boolean;

  @IsBoolean()
  "user.edit": boolean;

  @IsBoolean()
  "user.delete": boolean;

  @IsBoolean()
  "package.list": boolean;

  @IsBoolean()
  "package.create": boolean;

  @IsBoolean()
  "package.show": boolean;

  @IsBoolean()
  "package.edit": boolean;

  @IsBoolean()
  "package.delete": boolean;

  @IsBoolean()
  "profile.list": boolean;

  @IsBoolean()
  "profile.create": boolean;

  @IsBoolean()
  "profile.show": boolean;

  @IsBoolean()
  "profile.edit": boolean;

  @IsBoolean()
  "profile.delete": boolean;

  @IsBoolean()
  "group.list": boolean;

  @IsBoolean()
  "group.create": boolean;

  @IsBoolean()
  "group.show": boolean;

  @IsBoolean()
  "group.edit": boolean;

  @IsBoolean()
  "group.delete": boolean;

  @IsBoolean()
  "contact.list": boolean;

  @IsBoolean()
  "contact.create": boolean;

  @IsBoolean()
  "contact.show": boolean;

  @IsBoolean()
  "contact.edit": boolean;

  @IsBoolean()
  "contact.delete": boolean;

  @IsBoolean()
  "campaign.list": boolean;

  @IsBoolean()
  "campaign.create": boolean;

  @IsBoolean()
  "campaign.show": boolean;

  @IsBoolean()
  "campaign.edit": boolean;

  @IsBoolean()
  "campaign.delete": boolean;

  @IsBoolean()
  "template.list": boolean;

  @IsBoolean()
  "template.create": boolean;

  @IsBoolean()
  "template.show": boolean;

  @IsBoolean()
  "template.edit": boolean;

  @IsBoolean()
  "template.delete": boolean;

  @IsBoolean()
  "resource.list": boolean;

  @IsBoolean()
  "resource.create": boolean;

  @IsBoolean()
  "resource.show": boolean;

  @IsBoolean()
  "resource.edit": boolean;

  @IsBoolean()
  "resource.delete": boolean;

  @IsBoolean()
  "billing.list": boolean;

  @IsBoolean()
  "billing.show": boolean;

  @IsBoolean()
  "transaction.list": boolean;

  @IsBoolean()
  "transaction.show": boolean;

  @IsBoolean()
  "history.list": boolean;

  @IsBoolean()
  "history.show": boolean;

  @IsBoolean()
  "ticket.list": boolean;

  @IsBoolean()
  "ticket.create": boolean;

  @IsBoolean()
  "ticket.show": boolean;

  @IsBoolean()
  "ticket.update": boolean;

  @IsBoolean()
  "ticket.delete": boolean;
}
