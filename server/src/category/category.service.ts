import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';
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

  async findOneById(id: number) {
    return await this.categoryRepository.findOneBy({ id });
  }

  async findAllByName(name: string) {
    return await this.categoryRepository.findBy({ name });
  }

  async create(categoryDto: CategoryDto) {
    return await this.categoryRepository.save(categoryDto);
  }

  async update(id: number, categoryDto: CategoryDto) {
    const existing = await this.findOneById(id);
    return await this.categoryRepository.save({
      ...existing,
      ...categoryDto,
    });
  }

  async delete(id: number) {
    return await this.categoryRepository.delete({ id });
  }
}
