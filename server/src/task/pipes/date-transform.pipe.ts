import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  PipeTransform,
  Scope,
} from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import * as moment from 'moment-timezone';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class DateTransformPipe implements PipeTransform {
  constructor(@Inject(REQUEST) protected readonly request: Request) {}

  transform(value: CreateTaskDto | UpdateTaskDto) {
    if (!value.due_date) return value;

    const timezone: string =
      (this.request.headers.timezone as string) ?? 'Asia/Tokyo';

    const [date, time]: string[] = value.due_date.split(/T| /);
    const [
      year,
      month = '12',
      day = new Date(+year, +month, 0).getDate().toString(),
    ]: string[] = date.split('-');

    const [hour, minute, second]: string[] = time
      ? time.split(':')
      : ['23', '59', '59'];

    try {
      const timeMoment = moment
        .tz(`${year}-${month}-${day} ${hour}:${minute}:${second}`, timezone)
        .toDate();

      return {
        ...value,
        due_date: timeMoment,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
