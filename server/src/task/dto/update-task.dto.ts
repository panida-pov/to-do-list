import { ApiPropertyOptional } from '@nestjs/swagger';
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

export class UpdateTaskDto {
  @ApiPropertyOptional({
    description: 'New task name',
    example: 'Do dishes',
  })
  @IsString()
  @IsNotEmpty()
  @ValidateIf((object, value) => value !== undefined)
  name?: string;

  @ApiPropertyOptional({
    description: 'New task status (0: incomplete, 1: complete)',
    example: 1,
  })
  @IsNumber()
  @IsIn([0, 1])
  @ValidateIf((object, value) => value !== undefined)
  status?: number;

  @ApiPropertyOptional({
    description: 'New task due date in ISO8601 format (UTC time)',
    example: '2024-05-08T20:00:00Z',
  })
  @IsDateString({ strict: true })
  @Validate(CustomUtcDateValidator)
  @IsOptional()
  due_date?: string;

  @ApiPropertyOptional({ description: 'New category id to which task belongs' })
  @IsNumber()
  @IsOptional()
  category_id?: number;

  @ApiPropertyOptional({
    description: 'New task priority level (1: low, 2: medium, 3: high)',
  })
  @IsNumber()
  @IsIn([1, 2, 3])
  @ValidateIf((object, value) => value !== undefined)
  priority?: number;
}
