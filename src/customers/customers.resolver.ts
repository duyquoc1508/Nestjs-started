import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { CustomerTypeDto } from './dto/create-customer.dto';
import { CustomerInput } from './input-customer.input';

@Resolver()
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Query(() => [CustomerTypeDto])
  async customers(): Promise<CustomerTypeDto[]> {
    return this.customersService.findAll()
  }

  @Query(() => CustomerTypeDto)
  async customer(@Args('id') id: string): Promise<CustomerTypeDto> {
    return this.customersService.findOne(id)
  }

  @Mutation(() => CustomerTypeDto)
  async createCustomer(@Args('input') input: CustomerInput): Promise<CustomerTypeDto> {
    return this.customersService.create(input);
  }
}