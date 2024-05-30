import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupSchema } from './schemas/group.schema';

@Module({
  imports: [

    MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }])
  ],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
