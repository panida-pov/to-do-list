import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Work',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
