import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { NorthWindResolver } from './northwind.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatProduct } from './entities/categories.entity';
import { NorthWindService } from './northwind.service';

@Module({
    imports: [SequelizeModule.forFeature([CatProduct])],
    exports: [SequelizeModule],
    providers: [NorthWindResolver, NorthWindService],
})
export class NorthWindModule { }
