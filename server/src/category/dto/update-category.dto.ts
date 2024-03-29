import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ValidateIf((object, value) => value !== undefined)
  name?: string;
}
