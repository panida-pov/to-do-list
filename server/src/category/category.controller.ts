import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { QueryFailedError } from 'typeorm';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoryService.create(createCategoryDto);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
    }
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      return await this.categoryService.update(id, updateCategoryDto);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const entity = await this.categoryService.findOneById(id);
    if (!entity)
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    await this.categoryService.delete(id);
  }
}
