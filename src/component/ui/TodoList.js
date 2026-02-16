import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { TodoItem } from '@component/ui/TodoItem';
const TodoListComponent = ({ todos, onToggleTodoCompleted }) => {
    const handleToggle = useCallback((id) => {
        onToggleTodoCompleted(id);
    }, [onToggleTodoCompleted]);
    if (todos.length === 0) {
        return (_jsx("p", { className: "text-sm text-gray-500", "aria-live": "polite", children: "No tasks yet. Add your first task to get started." }));
    }
    return (_jsx("ul", { className: "divide-y divide-gray-200 rounded-lg bg-white shadow-sm", children: todos.map((todo) => (_jsx(TodoItem, { todo: todo, onToggleCompleted: handleToggle }, todo.id))) }));
};
export const TodoList = memo(TodoListComponent);
