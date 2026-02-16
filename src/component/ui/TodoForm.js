import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState } from 'react';
const categoryOptions = [
    { value: 'work', label: 'Work' },
    { value: 'personal', label: 'Personal' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'other', label: 'Other' },
];
const TodoFormComponent = ({ onAddTodo, defaultCategory }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(defaultCategory ?? 'other');
    const [error, setError] = useState(null);
    const handleSubmit = (event) => {
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
    return (_jsxs("form", { onSubmit: handleSubmit, "aria-labelledby": "todo-form-title", className: "space-y-4 rounded-lg bg-white p-4 shadow-sm", children: [_jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-end", children: [_jsxs("div", { className: "flex-1", children: [_jsx("label", { htmlFor: "todo-title", className: "block text-sm font-medium text-gray-700", children: "Task title" }), _jsx("input", { id: "todo-title", type: "text", value: title, onChange: (event) => setTitle(event.target.value), placeholder: "Add a new task", "aria-invalid": error ? 'true' : 'false', "aria-describedby": error ? 'todo-title-error' : undefined, className: "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" })] }), _jsxs("div", { className: "w-full sm:w-48", children: [_jsx("label", { htmlFor: "todo-category", className: "block text-sm font-medium text-gray-700", children: "Category" }), _jsx("select", { id: "todo-category", value: category, onChange: (event) => setCategory(event.target.value), className: "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500", children: categoryOptions.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] }), _jsx("button", { type: "submit", className: "mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0", children: "Add task" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "todo-description", className: "block text-sm font-medium text-gray-700", children: "Description (optional)" }), _jsx("textarea", { id: "todo-description", value: description, onChange: (event) => setDescription(event.target.value), rows: 2, className: "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" })] }), error ? (_jsx("p", { id: "todo-title-error", role: "alert", className: "text-sm text-red-600", children: error })) : null] }));
};
export const TodoForm = memo(TodoFormComponent);
