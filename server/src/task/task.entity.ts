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
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: number;

  @Column()
  due_date: Date;

  @Column()
  category_id: number;

  @Column()
  priority: number;

  @ManyToOne(() => CategoryEntity, (category) => category.tasks)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
