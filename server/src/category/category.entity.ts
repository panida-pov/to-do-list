import { ApiProperty } from '@nestjs/swagger';
import { TaskEntity } from '../task/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoryEntity {
  @ApiProperty({
    description: 'Category ID (primary key)',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Category name',
    example: 'Work',
  })
  @Column({ unique: true })
  name: string;

  @OneToMany(() => TaskEntity, (task) => task.category)
  tasks: TaskEntity[];
}
