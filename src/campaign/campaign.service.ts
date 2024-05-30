import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ICampaign } from './interfaces/campaign.interface';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel('Campaign') private campaignModel: Model<ICampaign>
  ) {}
  async create(createCampaignDto: CreateCampaignDto): Promise<ICampaign>  {
    try {
      console.log('role',createCampaignDto)
      const campaign = new this.campaignModel(createCampaignDto);
      return await campaign.save();
    } catch (error) {
      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        throw new ConflictException(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
      }
      throw error;
    }
  }

  async findAll(): Promise<ICampaign[]>  {
    const campaign = await this.campaignModel.find();
    if (!campaign || campaign.length == 0) {
      throw new NotFoundException('Campaign Data Not Found');
    }
    return campaign;
  }

  async  findOne(id: string): Promise<ICampaign> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }


    const campaign = await this.campaignModel.findById(id);
    if (!campaign) {
      throw new NotFoundException(`Campaign #${id} Not Found`);
    }
    return campaign;
  }

  async update(id: string, updateCampaignDto: UpdateCampaignDto): Promise<ICampaign> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }

    const campaign = await this.campaignModel.findByIdAndUpdate(id, updateCampaignDto, {
      new: true,
    });
    if (!campaign) {
      throw new NotFoundException(`Campaign #${id} Not Found`);
    }
    return campaign;
  }

  async remove(id: string): Promise<ICampaign> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid ID format: ${id}`);
    }

    const campaign = await this.campaignModel.findByIdAndDelete(id);
    if (!campaign) {
      throw new NotFoundException(`Campaign #${id} Not Found`);
    }
    return campaign;
  }
}
