import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcknowledgementService } from './acknowledgement.service';
import { CreateAcknowledgementDto } from './dto/create-acknowledgement.dto';
import { UpdateAcknowledgementDto } from './dto/update-acknowledgement.dto';

@Controller('acknowledgement')
export class AcknowledgementController {
  constructor(private readonly acknowledgementService: AcknowledgementService) {}

  @Post()
  create(@Body() createAcknowledgementDto: CreateAcknowledgementDto) {
    return this.acknowledgementService.create(createAcknowledgementDto);
  }

  @Get()
  findAll() {
    return this.acknowledgementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acknowledgementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcknowledgementDto: UpdateAcknowledgementDto) {
    return this.acknowledgementService.update(+id, updateAcknowledgementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acknowledgementService.remove(+id);
  }
}
