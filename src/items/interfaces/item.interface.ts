import { Document } from 'mongoose';

export interface IItem extends Document {
  readonly title: string;
  readonly price: number;
  readonly description: string;
}