import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { useTodos } from '@hooks/useTodos';
import { TodoForm } from '@component/ui/TodoForm';
import { TodoFilters } from '@component/ui/TodoFilters';
import { TodoList } from '@component/ui/TodoList';
export const TodoDashboard = () => {
    const { todos, addTodo, toggleTodoCompleted } = useTodos();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filteredTodos = useMemo(() => selectedCategory === 'all'
        ? todos
        : todos.filter((todo) => todo.category === selectedCategory), [todos, selectedCategory]);
    return (_jsxs("section", { "aria-label": "Todo dashboard", className: "mx-auto flex w-full max-w-2xl flex-col gap-4", children: [_jsxs("header", { className: "flex flex-col gap-1", children: [_jsx("h1", { id: "todo-dashboard-title", className: "text-2xl font-semibold text-gray-900", children: "Todo Dashboard" }), _jsx("p", { className: "text-sm text-gray-600", children: "Capture your tasks, organize them by category, and track completion." })] }), _jsx(TodoForm, { onAddTodo: addTodo }), _jsxs("div", { className: "space-y-2 rounded-lg bg-white p-4 shadow-sm", children: [_jsx(TodoFilters, { selectedCategory: selectedCategory, onChangeCategory: setSelectedCategory }), _jsx(TodoList, { todos: filteredTodos, onToggleTodoCompleted: toggleTodoCompleted })] })] }));
};
