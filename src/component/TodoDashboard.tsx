import type { FC } from 'react';
import { useMemo, useState } from 'react';
import { useTodos } from '@hooks/useTodos';
import type { FilterCategory } from '@component/ui/TodoFilters';
import { TodoForm } from '@component/ui/TodoForm';
import { TodoFilters } from '@component/ui/TodoFilters';
import { TodoList } from '@component/ui/TodoList';
import { TodoProgress } from '@component/ui/TodoProgress';

export const TodoDashboard: FC = () => {
  const { todos, addTodo, toggleTodoCompleted, deleteTodo } = useTodos();
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');

  const filteredTodos = useMemo(
    () =>
      selectedCategory === 'all'
        ? todos
        : todos.filter((todo) => todo.category === selectedCategory),
    [todos, selectedCategory],
  );

  return (
    <section
      aria-label="Todo dashboard"
      className="mx-auto flex w-full max-w-2xl flex-col gap-4"
    >
      <header className="flex flex-col gap-1">
        <h1
          id="todo-dashboard-title"
          className="text-2xl font-semibold text-gray-900"
        >
          Todo Dashboard
        </h1>
        <p className="text-sm text-gray-600">
          Capture your tasks, organize them by category, and track completion.
        </p>
      </header>

      <TodoForm onAddTodo={addTodo} />

      <TodoProgress todos={todos} />

      <div className="space-y-2 rounded-lg bg-white p-4 shadow-sm">
        <TodoFilters
          selectedCategory={selectedCategory}
          onChangeCategory={setSelectedCategory}
        />
        <TodoList
          todos={filteredTodos}
          onToggleTodoCompleted={toggleTodoCompleted}
          onDeleteTodo={deleteTodo}
        />
      </div>
    </section>
  );
};

