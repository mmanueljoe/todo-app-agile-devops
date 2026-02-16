import { useCallback, useState } from 'react';
import type { AddTodoPayload, Todo } from '@models/todo';

export interface UseTodosResult {
  todos: Todo[];
  addTodo: (payload: AddTodoPayload) => void;
  toggleTodoCompleted: (id: string) => void;
}

export const useTodos = (): UseTodosResult => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((payload: AddTodoPayload) => {
    const trimmedTitle = payload.title.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      description: payload.description?.trim() || undefined,
      category: payload.category ?? 'other',
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((previous) => [newTodo, ...previous]);
  }, []);

  const toggleTodoCompleted = useCallback((id: string) => {
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  return {
    todos,
    addTodo,
    toggleTodoCompleted,
  };
};

