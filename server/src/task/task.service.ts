import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTask(): string {
    return 'This is your task!';
  }
}
