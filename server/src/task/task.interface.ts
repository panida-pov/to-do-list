export interface CreateTaskParams {
  name: string;
  status: number;
  due_date: Date;
  category_id: number;
  priority: number;
}

export interface UpdateTaskParams {
  name?: string;
  status?: number;
  due_date?: Date;
  category_id?: number;
  priority?: number;
}
