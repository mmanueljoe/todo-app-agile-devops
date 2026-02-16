import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
const categoryLabelMap = {
    work: 'Work',
    personal: 'Personal',
    urgent: 'Urgent',
    other: 'Other',
};
const categoryClassMap = {
    work: 'bg-blue-100 text-blue-800',
    personal: 'bg-pink-100 text-pink-800',
    urgent: 'bg-red-100 text-red-800',
    other: 'bg-gray-100 text-gray-800',
};
const TodoItemComponent = ({ todo, onToggleCompleted }) => {
    const handleToggleChange = () => {
        onToggleCompleted(todo.id);
    };
    return (_jsxs("li", { className: "flex items-start gap-3 px-4 py-3", children: [_jsx("div", { className: "flex items-start gap-2", children: _jsx("input", { id: `todo-checkbox-${todo.id}`, type: "checkbox", checked: todo.completed, onChange: handleToggleChange, className: "mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500", "aria-label": `Mark task "${todo.title}" as complete` }) }), _jsxs("label", { htmlFor: `todo-checkbox-${todo.id}`, className: "flex w-full cursor-pointer flex-col gap-1", children: [_jsxs("div", { className: "flex items-center justify-between gap-2", children: [_jsx("span", { className: `text-sm font-medium ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`, children: todo.title }), _jsx("span", { className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${categoryClassMap[todo.category]}`, "aria-label": `Category: ${categoryLabelMap[todo.category]}`, children: categoryLabelMap[todo.category] })] }), todo.description ? (_jsx("span", { className: `text-xs ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-600'}`, children: todo.description })) : null] })] }));
};
export const TodoItem = memo(TodoItemComponent, (previous, next) => previous.todo.id === next.todo.id &&
    previous.todo.title === next.todo.title &&
    previous.todo.description === next.todo.description &&
    previous.todo.category === next.todo.category &&
    previous.todo.completed === next.todo.completed);
