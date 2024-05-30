import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceSchema } from './schemas/resource.schema';

@Module({
  imports: [

    MongooseModule.forFeature([{ name: 'Resource', schema: ResourceSchema }])
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
