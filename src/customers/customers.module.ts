import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema, Customer } from './schemas/customer.schema';
import { CustomersResolver } from './customers.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  providers: [CustomersService,CustomersResolver],
  controllers: [CustomersController],
  exports: [CustomersService],
})
export class CustomersModule {}