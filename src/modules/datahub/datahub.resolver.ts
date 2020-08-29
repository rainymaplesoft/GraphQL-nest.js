import { Resolver, Query, Args, Int, ResolveField, Parent } from "@nestjs/graphql";

@Resolver()
export class DataHubResolver {
    // constructor(
    //     private authorsService: AuthorsService,
    //     private postsService: PostsService,
    // ) { }

    // @Query(() => String)
    // async hello() {
    //     return 'hello world';
    // }
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