import { Resolver, Query, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { CatProduct } from '../../db/entity/categories.entity';
import { NorthWindService } from "./northwind.service";
import { CategoryProduct } from "./models/category.model";

@Resolver()
export class NorthWindResolver {
    constructor(
        private northWindService: NorthWindService
    ) { }

    @Query(() => String)
    async hello() {
        return 'hello world';
    }
    @Query(returns => [CategoryProduct], { name: 'categories' })
    async getCategories() {
        return this.northWindService.findAllViewCatProduct();
    }
    // @Query()
    // async author(@Args('id', { type: () => Int }) id: number) {
    //     return this.authorsService.findOneById(id);
    // }

    // @ResolveField()
    // async posts(@Parent() author: Author) {
    //     const { id } = author;
    //     return this.postsService.findAll({ authorId: id });
    // }
}