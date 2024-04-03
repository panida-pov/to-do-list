import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class DateTransformPipe implements PipeTransform {
  transform(value: CreateTaskDto | UpdateTaskDto) {
    if (!value.due_date) return value;

    const [date, time]: string[] = value.due_date.split(/T| /);
    const [
      year,
      month = '12',
      day = new Date(+year, +month, 0).getDate().toString(),
    ]: string[] = date.split('-');

    const [hour, minute, second]: string[] = time
      ? time.split(':')
      : ['23', '59', '59'];

    return {
      ...value,
      due_date: new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`),
    };
  }
}
