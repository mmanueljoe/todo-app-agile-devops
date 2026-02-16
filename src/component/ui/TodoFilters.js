import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'work', label: 'Work' },
    { value: 'personal', label: 'Personal' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'other', label: 'Other' },
];
const TodoFiltersComponent = ({ selectedCategory, onChangeCategory, }) => {
    return (_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx("h2", { id: "todo-list-heading", className: "text-sm font-semibold text-gray-700", children: "Tasks" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("label", { htmlFor: "todo-filter-category", className: "text-xs font-medium text-gray-600", children: "Filter by" }), _jsx("select", { id: "todo-filter-category", value: selectedCategory, onChange: (event) => onChangeCategory(event.target.value), className: "rounded-md border border-gray-300 px-2 py-1 text-xs shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500", children: filterOptions.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] })] }));
};
export const TodoFilters = memo(TodoFiltersComponent);
