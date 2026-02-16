import { useCallback, useEffect, useState } from 'react';
import type { AddTodoPayload, Todo } from '@models/todo';

const STORAGE_KEY = 'todo-dashboard-tasks';

const loadTodosFromStorage = (): Todo[] => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return [];
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored) as Todo[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveTodosToStorage = (todos: Todo[]): void => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {
    // Silently handle storage errors (quota exceeded, etc.)
  }
};

export interface UseTodosResult {
  todos: Todo[];
  addTodo: (payload: AddTodoPayload) => void;
  toggleTodoCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const useTodos = (): UseTodosResult => {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodosFromStorage());

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

  const deleteTodo = useCallback((id: string) => {
    setTodos((previous) => previous.filter((todo) => todo.id !== id));
  }, []);

  useEffect(() => {
    saveTodosToStorage(todos);
  }, [todos]);

  return {
    todos,
    addTodo,
    toggleTodoCompleted,
    deleteTodo,
  };
};

