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
    const entities = await this.categoryService.findAllByName(
      createCategoryDto.name,
    );
    if (entities.length)
      throw new HttpException(
        'Category with same name already exists',
        HttpStatus.CONFLICT,
      );
    return await this.categoryService.create(createCategoryDto);
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const entity = await this.categoryService.findOneById(id);
    if (!entity)
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const entity = await this.categoryService.findOneById(id);
    if (!entity)
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    await this.categoryService.delete(id);
  }
}
