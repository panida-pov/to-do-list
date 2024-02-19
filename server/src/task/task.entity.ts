import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: number;

  @Column()
  due_date: string;

  @Column()
  category_id: number;

  @Column()
  priority: number;
}