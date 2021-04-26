import { Resolver, Query, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemTypeDto } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';
import { Customer } from 'src/customers/schemas/customer.schema';
import { Item } from './schemas/items.schema';
import { CustomersService } from 'src/customers/customers.service';

@Resolver()
export class ItemsResolver {
  constructor(
    private readonly itemsService: ItemsService,
    private readonly customersService: CustomersService
  ) {}

  @Query(() => [ItemTypeDto])
  async items(): Promise<ItemTypeDto[]> {
    return this.itemsService.findAll();
  }
  
  @Query(() => ItemTypeDto)
  async item(@Args('id') id: string): Promise<ItemTypeDto> {
    return this.itemsService.findOne(id);
  }

  @Mutation(() => ItemTypeDto)
  async createItem(@Args('input') input: ItemInput): Promise<ItemTypeDto> {
    return this.itemsService.create(input);
  }

  @Mutation(() => ItemTypeDto)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: ItemInput,
  ): Promise<ItemTypeDto> {
    return this.itemsService.update(id, input);
  }

  @Mutation(() => ItemTypeDto)
  async deleteItem(@Args('id') id: string): Promise<ItemTypeDto> {
    return this.itemsService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  // @ResolveField('customerId', () => Customer)
  // async customer(@Parent() item: Item) {
  //   const {customerId} = item;
  //   return this.customersService.findOne(customerId);
  // }
}