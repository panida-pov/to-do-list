import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
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

  @IsDateString({ strict: true })
  @IsOptional()
  due_date?: string;

  @IsNumber()
  @IsOptional()
  category_id?: number;

  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  priority?: number;
}
