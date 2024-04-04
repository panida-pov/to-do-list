import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  Validate,
  ValidateIf,
} from 'class-validator';
import { CustomUtcDateValidator } from 'src/helpers/CustomUtcDateFormatValidator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  status?: number;

  @IsDateString({ strict: true })
  @Validate(CustomUtcDateValidator)
  @IsOptional()
  due_date?: string;

  @IsNumber()
  @IsOptional()
  category_id?: number;

  @IsNumber()
  @Min(1)
  @Max(3)
  @ValidateIf((object, value) => value !== undefined)
  priority?: number; // 1:LOW, 2:MEDIUM, 3:HIGH
}
