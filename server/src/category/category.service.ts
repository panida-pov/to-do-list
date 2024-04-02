import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAll() {
    return this.categoryRepository.find();
  }

  async create(categoryDto: CategoryDto) {
    try {
      return await this.categoryRepository.save(categoryDto);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
    }
  }

  async update(id: number, categoryDto: CategoryDto) {
    const entity = await this.categoryRepository.findOneBy({ id });
    if (!entity) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.categoryRepository.save({
        ...entity,
        ...categoryDto,
      });
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
    }
  }

  async delete(id: number) {
    const { affected } = await this.categoryRepository.delete({ id });
    if (!affected)
      throw new HttpException('No category to remove', HttpStatus.NOT_FOUND);
  }
}
