import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  status: number = 0;

  @IsDateString()
  @IsOptional()
  due_date: Date;

  @IsNumber()
  category_id: number;

  @IsNumber()
  priority: number = 1;
}
