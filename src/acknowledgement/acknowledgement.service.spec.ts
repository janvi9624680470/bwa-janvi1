import { Test, TestingModule } from '@nestjs/testing';
import { AcknowledgementService } from './acknowledgement.service';

describe('AcknowledgementService', () => {
  let service: AcknowledgementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcknowledgementService],
    }).compile();

    service = module.get<AcknowledgementService>(AcknowledgementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
