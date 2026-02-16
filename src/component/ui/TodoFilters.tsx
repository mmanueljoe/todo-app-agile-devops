import type { FC } from 'react';
import { memo } from 'react';
import type { TodoCategory } from '@models/todo';

export type FilterCategory = TodoCategory | 'all';

export interface TodoFiltersProps {
  selectedCategory: FilterCategory;
  onChangeCategory: (category: FilterCategory) => void;
}

const filterOptions: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'work', label: 'Work' },
  { value: 'personal', label: 'Personal' },
  { value: 'urgent', label: 'Urgent' },
  { value: 'other', label: 'Other' },
];

const TodoFiltersComponent: FC<TodoFiltersProps> = ({
  selectedCategory,
  onChangeCategory,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2
        id="todo-list-heading"
        className="text-sm font-semibold text-gray-700"
      >
        Tasks
      </h2>
      <div className="flex items-center gap-2">
        <label
          htmlFor="todo-filter-category"
          className="text-xs font-medium text-gray-600"
        >
          Filter by
        </label>
        <select
          id="todo-filter-category"
          value={selectedCategory}
          onChange={(event) => onChangeCategory(event.target.value as FilterCategory)}
          className="rounded-md border border-gray-300 px-2 py-1 text-xs shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const TodoFilters = memo(TodoFiltersComponent);

