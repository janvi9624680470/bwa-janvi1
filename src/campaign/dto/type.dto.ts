import { IsBoolean, IsNotEmpty } from "class-validator";

export class TypeDto {
    @IsNotEmpty()
    @IsBoolean()
    Email: boolean;
  
    @IsNotEmpty()
    @IsBoolean()
    Whatsapp: boolean;
  
    @IsNotEmpty()
    @IsBoolean()
    Telegram: boolean;
  
    @IsNotEmpty()
    @IsBoolean()
    Sms: boolean;
  }