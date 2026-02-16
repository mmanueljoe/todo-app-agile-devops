import type { FC } from 'react';
import { memo, useMemo } from 'react';
import type { Todo } from '@models/todo';

export interface TodoProgressProps {
  todos: Todo[];
}

const TodoProgressComponent: FC<TodoProgressProps> = ({ todos }) => {
  const { total, completed, percentage } = useMemo(() => {
    const totalCount = todos.length;
    const completedCount = todos.filter((todo) => todo.completed).length;
    const percentageValue =
      totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return {
      total: totalCount,
      completed: completedCount,
      percentage: percentageValue,
    };
  }, [todos]);

  return (
    <div
      className="rounded-lg bg-white p-4 shadow-sm"
      aria-label="Task progress statistics"
    >
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700">
          Progress: {completed} of {total} completed
        </span>
        <span className="font-semibold text-gray-900">{percentage}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${percentage}% of tasks completed`}
        />
      </div>
    </div>
  );
};

export const TodoProgress = memo(TodoProgressComponent);
