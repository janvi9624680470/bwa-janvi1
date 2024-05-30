import { Module } from '@nestjs/common';
import { AcknowledgementService } from './acknowledgement.service';
import { AcknowledgementController } from './acknowledgement.controller';

@Module({
  controllers: [AcknowledgementController],
  providers: [AcknowledgementService],
})
export class AcknowledgementModule {}
