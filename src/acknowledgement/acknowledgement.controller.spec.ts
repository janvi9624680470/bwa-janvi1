import { Test, TestingModule } from '@nestjs/testing';
import { AcknowledgementController } from './acknowledgement.controller';
import { AcknowledgementService } from './acknowledgement.service';

describe('AcknowledgementController', () => {
  let controller: AcknowledgementController;











  



  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcknowledgementController],
      providers: [AcknowledgementService],
    }).compile();

    controller = module.get<AcknowledgementController>(AcknowledgementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
