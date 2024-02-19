import { Controller, Get, Post, Put, Body, Param, Delete} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTask(): Promise<TaskEntity[]> {
    return await this.taskService.findAll();
  }

  @Post()
  async createTask(@Body() newTask: TaskEntity): Promise<TaskEntity> {
    return await this.taskService.create(newTask);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTask: TaskEntity): Promise<TaskEntity> {
    return await this.taskService.update(id, updateTask);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return await this.taskService.delete(id);
  }
}
