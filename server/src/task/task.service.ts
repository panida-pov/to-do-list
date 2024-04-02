import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
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
    const entity = await this.tasksRepository.findOneBy({ id });
    if (!entity)
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    return entity;
  }

  async create(createTaskDto: CreateTaskDto) {
    try {
      return await this.tasksRepository.save(createTaskDto);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    if (!Object.keys(updateTaskDto).length)
      throw new HttpException(
        'Request body cannot be empty',
        HttpStatus.BAD_REQUEST,
      );

    const entity = await this.findOne(id);

    try {
      return await this.tasksRepository.save({
        ...entity,
        ...updateTaskDto,
      });
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
    }
  }

  async delete(id: number) {
    const { affected } = await this.tasksRepository.delete({ id });
    if (!affected)
      throw new HttpException('No task to remove', HttpStatus.NOT_FOUND);
  }
}
