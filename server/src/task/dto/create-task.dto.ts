import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
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
  @Min(1)
  @Max(3)
  @ValidateIf((object, value) => value !== undefined)
  priority?: number; // 1:LOW, 2:MEDIUM, 3:HIGH
}
