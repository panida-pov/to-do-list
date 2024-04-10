import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryEntity } from './category.entity';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: CategoryEntity, isArray: true })
  @ApiBadRequestResponse({ description: 'Cannot retrieve categories' })
  async findAll() {
    return await this.categoryService.findAll();
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  @ApiCreatedResponse({
    description: 'Category has been successfully created',
    type: CategoryEntity,
  })
  @ApiBadRequestResponse({ description: 'Cannot create a new category' })
  @ApiResponse({ status: 409, description: 'Category already exists' })
  async create(@Body() categoryDto: CategoryDto) {
    return await this.categoryService.create(categoryDto);
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Patch(':id')
  @ApiOkResponse({
    description: 'Category has been successfully updated',
    type: CategoryEntity,
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiResponse({
    status: 404,
    description: 'Category with specified ID not found',
  })
  @ApiResponse({ status: 409, description: 'Category already exists' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryDto: CategoryDto,
  ) {
    return await this.categoryService.update(id, categoryDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Category has been successfully deleted' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiResponse({
    status: 404,
    description: 'Category with specified ID not found',
  })
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.categoryService.delete(id);
  }
}
