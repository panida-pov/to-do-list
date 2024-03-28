import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateIf,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ValidateIf((object, value) => value !== undefined)
  name?: string;

  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  status?: number;

  @IsDateString()
  @ValidateIf((object, value) => value !== undefined)
  due_date?: Date;

  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  category_id?: number;

  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  priority?: number;
}
