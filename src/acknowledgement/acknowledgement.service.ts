import { Injectable } from '@nestjs/common';
import { CreateAcknowledgementDto } from './dto/create-acknowledgement.dto';
import { UpdateAcknowledgementDto } from './dto/update-acknowledgement.dto';

@Injectable()
export class AcknowledgementService {
  create(createAcknowledgementDto: CreateAcknowledgementDto) {
    return 'This action adds a new acknowledgement';
  }

  findAll() {
    return `This action returns all acknowledgement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acknowledgement`;
  }

  update(id: number, updateAcknowledgementDto: UpdateAcknowledgementDto) {
    return `This action updates a #${id} acknowledgement`;
  }

  remove(id: number) {
    return `This action removes a #${id} acknowledgement`;
  }
}
