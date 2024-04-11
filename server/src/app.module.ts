import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbDataSource } from './data.source';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbDataSource), TaskModule, CategoryModule],
})
export class AppModule {}
