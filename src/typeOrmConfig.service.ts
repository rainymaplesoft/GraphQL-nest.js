import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { VCategoryProduct } from './db/entity/vCatProduct';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'ec2-54-159-138-67.compute-1.amazonaws.com',
      port: 5432,
      username: 'yfognsnrzufrhf',
      password: '02b9a6129b00616019dbbd16220759ebc32b7aaf433b3cbdbd6a4401ecee504c',
      database: 'd3din807ghrhns',
      entities: [__dirname + '/**/*.entity{.ts,.js}', VCategoryProduct],
      synchronize: true,
      // ssl: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    };
  }
}

/*
function getSequelizeConfig() {
  return {
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
  }
}*/