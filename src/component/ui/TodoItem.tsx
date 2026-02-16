import type { FC } from 'react';
import { memo } from 'react';
import type { Todo } from '@models/todo';

export interface TodoItemProps {
  todo: Todo;
  onToggleCompleted: (id: string) => void;
  onDelete: (id: string) => void;
}

const categoryLabelMap: Record<Todo['category'], string> = {
  work: 'Work',
  personal: 'Personal',
  urgent: 'Urgent',
  other: 'Other',
};

const categoryClassMap: Record<Todo['category'], string> = {
  work: 'bg-blue-100 text-blue-800',
  personal: 'bg-pink-100 text-pink-800',
  urgent: 'bg-red-100 text-red-800',
  other: 'bg-gray-100 text-gray-800',
};

const TodoItemComponent: FC<TodoItemProps> = ({
  todo,
  onToggleCompleted,
  onDelete,
}) => {
  const handleToggleChange = (): void => {
    onToggleCompleted(todo.id);
  };

  const handleDelete = (): void => {
    if (
      window.confirm(
        `Are you sure you want to delete "${todo.title}"? This action cannot be undone.`,
      )
    ) {
      onDelete(todo.id);
    }
  };

  return (
    <li className="flex items-start gap-3 px-4 py-3">
      <div className="flex items-start gap-2">
        <input
          id={`todo-checkbox-${todo.id}`}
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          aria-label={`Mark task "${todo.title}" as complete`}
        />
      </div>

      <label
        htmlFor={`todo-checkbox-${todo.id}`}
        className="flex flex-1 cursor-pointer flex-col gap-1"
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-sm font-medium ${
              todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'
            }`}
          >
            {todo.title}
          </span>

          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${categoryClassMap[todo.category]}`}
            aria-label={`Category: ${categoryLabelMap[todo.category]}`}
          >
            {categoryLabelMap[todo.category]}
          </span>
        </div>

        {todo.description ? (
          <span
            className={`text-xs ${
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-600'
            }`}
          >
            {todo.description}
          </span>
        ) : null}
      </label>

      <button
        type="button"
        onClick={handleDelete}
        className="ml-auto rounded-md px-2 py-1 text-sm text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        aria-label={`Delete task "${todo.title}"`}
      >
        Delete
      </button>
    </li>
  );
};

export const TodoItem = memo(
  TodoItemComponent,
  (previous, next) =>
    previous.todo.id === next.todo.id &&
    previous.todo.title === next.todo.title &&
    previous.todo.description === next.todo.description &&
    previous.todo.category === next.todo.category &&
    previous.todo.completed === next.todo.completed &&
    previous.onDelete === next.onDelete,
);

