import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CustomerInput {
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
  @Field()
  readonly email: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly address: string;
  @Field()
  readonly description: string;
  @Field()
  readonly organizations: string;
}