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

  @Column({ default: 0 })
  status: number;

  @Column({ default: null })
  due_date: Date;

  @Column({ default: null })
  category_id: number;

  @Column({ default: 1 })
  priority: number;

  @ManyToOne(() => CategoryEntity, (category) => category.tasks)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
