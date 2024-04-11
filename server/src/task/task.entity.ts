import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from '../category/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('tasks')
export class TaskEntity {
  @ApiProperty({
    description: 'Task ID (primary key)',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Task name',
    example: 'Do laundry',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Task status (0: incomplete, 1: complete)',
    example: 0,
  })
  @Column({ default: 0 })
  status: number;

  @ApiProperty({
    description: 'Task due date in ISO8601 format (UTC time)',
    example: '2024-04-08T18:00:00Z',
  })
  @Column({ default: null })
  due_date: Date;

  @ApiProperty({
    description: 'Category id to which task belongs',
    example: 1,
  })
  @Column({ default: null })
  category_id: number;

  @ApiProperty({
    description: 'Task priority level (1: low, 2: medium, 3: high)',
    example: 1,
  })
  @Column({ default: 1 })
  priority: number;

  @ApiProperty({
    type: CategoryEntity,
  })
  @ManyToOne(() => CategoryEntity, (category) => category.tasks)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
