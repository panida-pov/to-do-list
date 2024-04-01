import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  status?: number;

  @IsDateString()
  @IsOptional()
  due_date?: Date;

  @IsNumber()
  @IsOptional()
  category_id?: number;

  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  priority?: number;
}
