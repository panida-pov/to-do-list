import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { CreateTaskParams, UpdateTaskParams } from './task.interface';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly tasksRepository: Repository<TaskEntity>,
  ) {}

  async findAll() {
    return this.tasksRepository.find({ relations: ['category'] });
  }

  async findOne(id: number) {
    return await this.tasksRepository.findOneBy({ id });
  }

  async create(createTaskParams: CreateTaskParams) {
    return await this.tasksRepository.save(createTaskParams);
  }

  async update(id: number, updateTaskParams: UpdateTaskParams) {
    const existing = await this.findOne(id);
    return await this.tasksRepository.save({
      ...existing,
      ...updateTaskParams,
    });
  }

  async delete(id: number) {
    return await this.tasksRepository.delete({ id });
  }
}
