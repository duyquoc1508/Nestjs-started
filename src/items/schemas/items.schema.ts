import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Customer'})
  customerId: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
