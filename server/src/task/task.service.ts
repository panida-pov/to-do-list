import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly tasksRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return this.tasksRepository.find();
  }

  async create(newTask: TaskEntity): Promise<TaskEntity> {
    return await this.tasksRepository.save(newTask);
  }

  async update(id: number, updateTask: TaskEntity): Promise<TaskEntity> {
    let toUpdate = await this.tasksRepository.findOneBy({ id: id });
    let updated = Object.assign(toUpdate, updateTask);
    return await this.tasksRepository.save(updated);
  }
 
  async delete(id: number): Promise<DeleteResult> {
    return await this.tasksRepository.delete({ id: id });
  }
}
