import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';
import {
  CreateCategoryParams,
  UpdateCategoryParams,
} from './category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneBy({ id });
  }

  async create(createCategoryParams: CreateCategoryParams) {
    return await this.categoryRepository.save(createCategoryParams);
  }

  async update(id: number, updateCategoryParams: UpdateCategoryParams) {
    const existing = await this.findOne(id);
    return await this.categoryRepository.save({
      ...existing,
      ...updateCategoryParams,
    });
  }

  async delete(id: number) {
    return await this.categoryRepository.delete({ id });
  }
}