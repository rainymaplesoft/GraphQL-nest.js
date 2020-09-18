import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TypeOrmModule, } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { TypeOrmConfigService } from './typeOrmConfig.service';
import { AppResolver } from './app.resolver';


@Module({
  imports: [GraphQLModule.forRoot({
    debug: true,
    playground: true,
    sortSchema: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
  })],
  // SequelizeModule.forRoot(getSequelizeConfig()),
  //   NorthWindModule
  // ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { }