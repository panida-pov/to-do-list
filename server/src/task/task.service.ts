import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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

  async create(createTaskDto: CreateTaskDto) {
    return await this.tasksRepository.save(createTaskDto);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const existing = await this.findOne(id);
    return await this.tasksRepository.save({
      ...existing,
      ...updateTaskDto,
    });
  }

  async delete(id: number) {
    return await this.tasksRepository.delete({ id });
  }
}
