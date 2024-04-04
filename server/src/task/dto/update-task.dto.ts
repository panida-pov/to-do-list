import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
  ValidateIf,
} from 'class-validator';
import { CustomUtcDateValidator } from 'src/helpers/CustomUtcDateFormatValidator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ValidateIf((object, value) => value !== undefined)
  name?: string;

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
  @ValidateIf((object, value) => value !== undefined)
  priority?: number;
}
