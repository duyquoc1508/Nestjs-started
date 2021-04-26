  
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemType } from './dto/create-item.dto';
import { IItem } from './interfaces/item.interface';
import { ItemInput } from './input-items.input';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<IItem>) {}

  async create(createItemDto: ItemInput): Promise<ItemType> {
    return await this.itemModel.create(createItemDto);
  }

  async findAll(): Promise<ItemType[]> {
    return await this.itemModel.find({});
  }

  async findOne(id: string): Promise<ItemType> {
    return await this.itemModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<ItemType> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: ItemInput): Promise<ItemType> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}