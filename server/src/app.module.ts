import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbDataSource } from './data.source';

@Module({
  imports: [TypeOrmModule.forRoot(dbDataSource), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
