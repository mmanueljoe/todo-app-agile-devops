import { describe, expect, it, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTodos } from '@hooks/useTodos';
import type { Todo } from '@models/todo';

const STORAGE_KEY = 'todo-dashboard-tasks';

describe('useTodos persistence', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('loads todos from localStorage on mount', () => {
    const savedTodos: Todo[] = [
      {
        id: '1',
        title: 'Saved task',
        category: 'work',
        completed: false,
        createdAt: '2024-01-01T00:00:00.000Z',
      },
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTodos));

    const { result } = renderHook(() => useTodos());

    expect(result.current.todos).toEqual(savedTodos);
  });

  it('saves todos to localStorage when a task is added', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo({
        title: 'New task',
        category: 'work',
      });
    });

    const saved = localStorage.getItem(STORAGE_KEY);
    expect(saved).not.toBeNull();

    const parsed = JSON.parse(saved as string);
    expect(parsed).toHaveLength(1);
    expect(parsed[0].title).toBe('New task');
  });

  it('saves todos to localStorage when a task is toggled complete', () => {
    const initialTodo: Todo = {
      id: '1',
      title: 'Task to complete',
      category: 'work',
      completed: false,
      createdAt: '2024-01-01T00:00:00.000Z',
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([initialTodo]));

    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.toggleTodoCompleted('1');
    });

    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(saved as string);
    expect(parsed[0].completed).toBe(true);
  });

  it('handles empty localStorage gracefully', () => {
    localStorage.removeItem(STORAGE_KEY);

    const { result } = renderHook(() => useTodos());

    expect(result.current.todos).toEqual([]);
  });

  it('handles corrupted localStorage data gracefully', () => {
    localStorage.setItem(STORAGE_KEY, 'invalid json');

    const { result } = renderHook(() => useTodos());

    expect(result.current.todos).toEqual([]);
  });

  it('handles localStorage errors gracefully', () => {
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = vi.fn(() => {
      throw new Error('Storage quota exceeded');
    });

    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo({
        title: 'Task that fails to save',
        category: 'work',
      });
    });

    expect(result.current.todos).toHaveLength(1);

    Storage.prototype.setItem = originalSetItem;
  });
});
