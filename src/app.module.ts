import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { NorthWindModule } from './modules/northwind/northwind.module';

@Module({
  imports: [GraphQLModule.forRoot({
    debug: true,
    playground: true,
    sortSchema: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'ec2-54-159-138-67.compute-1.amazonaws.com',
    port: 5432,
    username: 'yfognsnrzufrhf',
    password: '02b9a6129b00616019dbbd16220759ebc32b7aaf433b3cbdbd6a4401ecee504c',
    database: 'd3din807ghrhns',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
    autoLoadModels: true,
    synchronize: true,
  }),
    NorthWindModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
