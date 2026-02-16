import type { FC } from 'react';
import { memo, useCallback } from 'react';
import type { Todo } from '@models/todo';
import { TodoItem } from '@component/ui/TodoItem';

export interface TodoListProps {
  todos: Todo[];
  onToggleTodoCompleted: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoListComponent: FC<TodoListProps> = ({
  todos,
  onToggleTodoCompleted,
  onDeleteTodo,
}) => {
  const handleToggle = useCallback(
    (id: string) => {
      onToggleTodoCompleted(id);
    },
    [onToggleTodoCompleted],
  );

  const handleDelete = useCallback(
    (id: string) => {
      onDeleteTodo(id);
    },
    [onDeleteTodo],
  );

  if (todos.length === 0) {
    return (
      <p className="text-sm text-gray-500" aria-live="polite">
        No tasks yet. Add your first task to get started.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow-sm">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCompleted={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export const TodoList = memo(TodoListComponent);

