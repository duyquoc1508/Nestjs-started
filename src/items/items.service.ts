import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemTypeDto } from './dto/create-item.dto';
import { IItem } from './interfaces/item.interface';
import { Item } from './schemas/items.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<IItem>) {}

  async create(createItemDto: ItemTypeDto): Promise<Item> {
    return await this.itemModel.create(createItemDto);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find({});
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemModel.findOne({ _id: id });
    if (!item) {
      throw new NotFoundException(id);
    }
    return item;
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: ItemTypeDto): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}