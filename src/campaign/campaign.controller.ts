import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Controller('campaign')

export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()      
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createCampaignDto: CreateCampaignDto) {


    try {
console.log('compaing',createCampaignDto)
      const campaign = await this.campaignService.create(createCampaignDto);
      return { statusCode: HttpStatus.CREATED, message: 'Campaign Created Successfully!', data: { campaign } };
    } catch (error) {
      console.log(error)
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'Campaign creation failed', error: error.message }, HttpStatus.BAD_REQUEST);
    
    }
  }

  @Get()
  async findAll() {
   

    try {
      const campaign = await this.campaignService.findAll();

      return { statusCode: HttpStatus.OK, message: 'Campaign Collection Fetched Successfully!', data: { campaign } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to fetch campaigns', error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);

    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
 

    try {

      const campaign = await this.campaignService.findOne(id);
      if (!campaign) {
        throw new HttpException({ statusCode: HttpStatus.NOT_FOUND, message: 'campaign not found', error: 'campaign with the given ID does not exist' }, HttpStatus.NOT_FOUND);
      }
      return { statusCode: HttpStatus.OK, message: 'campaign Fetched Successfully!', data: { campaign } };
    } catch (error) {

      throw new HttpException({
        statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Failed to fetch campaign',
        error: error.response || error.message
      },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ) {
    try {
      const campaign = await this.campaignService.update(id, updateCampaignDto);
      return { statusCode: HttpStatus.OK, message: 'Campaign Updated Successfully!', data: { campaign } };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'Campaign update failed', error: error.message }, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.campaignService.remove(id);
      return { statusCode: HttpStatus.OK, message: 'Campaign Deleted Successfully!' };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'Campaign deletion failed', error: error.message }, HttpStatus.BAD_REQUEST);
    }
  }
}
