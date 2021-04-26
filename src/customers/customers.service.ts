import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICustomer } from './interfaces/customer.interface';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { Customer } from './schemas/customer.schema';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<ICustomer>,
  ) {}

  public async findAll(
    paginationQuery?: PaginationQueryDto,
  ): Promise<Customer[]> {
    const { limit = 10, offset = 0} = paginationQuery || {}

    return await this.customerModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
  }

  public async findOne(customerId: string): Promise<Customer> {
    const customer = await this.customerModel
      .findById({ _id: customerId })
      .exec();

    if (!customer) {
      throw new NotFoundException(`Customer #${customerId} not found`);
    }

    return customer;
  }

  public async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const newCustomer = await new this.customerModel(createCustomerDto);
    return newCustomer.save();
  }

  public async update(
    customerId: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const existingCustomer = await this.customerModel.findByIdAndUpdate(
      { _id: customerId },
      updateCustomerDto,
    );

    if (!existingCustomer) {
      throw new NotFoundException(`Customer #${customerId} not found`);
    }

    return existingCustomer;
  }

  public async remove(customerId: string): Promise<any> {
    const deletedCustomer = await this.customerModel.findByIdAndRemove(
      customerId,
    );
    return deletedCustomer;
  }
}