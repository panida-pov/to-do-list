import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TaskEntity } from './task.entity';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: TaskEntity, isArray: true })
  @ApiBadRequestResponse({ description: 'Cannot retrieve tasks' })
  async findAll() {
    return await this.taskService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'OK', type: TaskEntity })
  @ApiBadRequestResponse({ description: 'Invalid task id' })
  @ApiResponse({ status: 404, description: 'Task with specified ID not found' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  @ApiCreatedResponse({
    description: 'Task has been successfully created',
    type: TaskEntity,
  })
  @ApiBadRequestResponse({ description: 'Cannot create a new task' })
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto);
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Patch(':id')
  @ApiOkResponse({
    description: 'Task has been successfully updated',
    type: TaskEntity,
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Task with specified ID not found' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return await this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Task has been successfully deleted' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Task with specified ID not found' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.taskService.delete(id);
  }
}
