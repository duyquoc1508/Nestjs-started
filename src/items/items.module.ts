import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  ItemSchema } from './schemas/items.schema';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';
import { CustomerSchema, Customer } from 'src/customers/schemas/customer.schema';
import { CustomersModule } from 'src/customers/customers.module';

@Module({ 
  imports: [
    MongooseModule.forFeature([
      {name: 'Item', schema: ItemSchema}
    ]),
    CustomersModule,
  ],
  providers: [ItemsResolver, ItemsService],
})

export class ItemsModule {}