import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateSchema } from './schemas/template.schema';

@Module({
  imports: [

    MongooseModule.forFeature([{ name: 'Template', schema: TemplateSchema }])
  ],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
