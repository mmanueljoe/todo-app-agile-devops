import type { FC, FormEvent } from 'react';
import { memo, useState } from 'react';
import type { AddTodoPayload, TodoCategory } from '@types/todo';

export interface TodoFormProps {
  onAddTodo: (payload: AddTodoPayload) => void;
  defaultCategory?: TodoCategory;
}

const categoryOptions: { value: TodoCategory; label: string }[] = [
  { value: 'work', label: 'Work' },
  { value: 'personal', label: 'Personal' },
  { value: 'urgent', label: 'Urgent' },
  { value: 'other', label: 'Other' },
];

const TodoFormComponent: FC<TodoFormProps> = ({ onAddTodo, defaultCategory }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<TodoCategory>(defaultCategory ?? 'other');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('Title is required.');
      return;
    }

    onAddTodo({
      title: trimmedTitle,
      description: description.trim() || undefined,
      category,
    });

    setTitle('');
    setDescription('');
    setError(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="todo-form-title"
      className="space-y-4 rounded-lg bg-white p-4 shadow-sm"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="todo-title"
            className="block text-sm font-medium text-gray-700"
          >
            Task title
          </label>
          <input
            id="todo-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Add a new task"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'todo-title-error' : undefined}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="w-full sm:w-48">
          <label
            htmlFor="todo-category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="todo-category"
            value={category}
            onChange={(event) => setCategory(event.target.value as TodoCategory)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0"
        >
          Add task
        </button>
      </div>

      <div>
        <label
          htmlFor="todo-description"
          className="block text-sm font-medium text-gray-700"
        >
          Description (optional)
        </label>
        <textarea
          id="todo-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={2}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {error ? (
        <p
          id="todo-title-error"
          role="alert"
          className="text-sm text-red-600"
        >
          {error}
        </p>
      ) : null}
    </form>
  );
};

export const TodoForm = memo(TodoFormComponent);

