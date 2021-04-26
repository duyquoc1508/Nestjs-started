import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';
export class CreateCustomerDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @MaxLength(40)
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @MaxLength(50)
  readonly description: string;

  @IsString()
  readonly organizations: string
}

@ObjectType()
export class CustomerTypeDto{
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