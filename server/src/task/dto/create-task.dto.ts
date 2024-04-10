import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
  ValidateIf,
} from 'class-validator';
import { CustomUtcDateValidator } from 'src/helpers/CustomUtcDateFormatValidator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Task name',
    example: 'Do laundry',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'Task status (0: incomplete, 1: complete)',
    default: 0,
  })
  @IsNumber()
  @IsIn([0, 1])
  @ValidateIf((object, value) => value !== undefined)
  status?: number;

  @ApiPropertyOptional({
    description: 'Task due date in ISO8601 format (UTC time)',
    example: '2024-04-08T18:00:00Z',
    default: null,
  })
  @IsDateString({ strict: true })
  @Validate(CustomUtcDateValidator)
  @IsOptional()
  due_date?: string;

  @ApiPropertyOptional({
    description: 'Category id to which task belongs',
    example: 1,
    default: null,
  })
  @IsNumber()
  @IsOptional()
  category_id?: number;

  @ApiPropertyOptional({
    description: 'Task priority level (1: low, 2: medium, 3: high)',
    default: 1,
  })
  @IsNumber()
  @IsIn([1, 2, 3])
  @ValidateIf((object, value) => value !== undefined)
  priority?: number; // 1:LOW, 2:MEDIUM, 3:HIGH
}
