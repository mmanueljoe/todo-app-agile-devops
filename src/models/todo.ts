export type TodoCategory = 'work' | 'personal' | 'urgent' | 'other';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  category: TodoCategory;
  completed: boolean;
  createdAt: string;
}

export interface AddTodoPayload {
  title: string;
  description?: string;
  category: TodoCategory;
}

