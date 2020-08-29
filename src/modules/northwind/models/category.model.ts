
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Category {
    @Field(type => Int)
    productId: number;

    @Field()
    categoryName: string;

    @Field()
    productName: string;

    @Field(type => Float)
    unitPrice: number;

    @Field()
    description: string;
}