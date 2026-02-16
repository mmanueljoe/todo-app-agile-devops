import { jsx as _jsx } from "react/jsx-runtime";
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoForm } from '@component/ui/TodoForm';
describe('TodoForm', () => {
    it('calls onAddTodo with correct payload when submitted with a title', () => {
        const handleAddTodo = vi.fn();
        render(_jsx(TodoForm, { onAddTodo: handleAddTodo, defaultCategory: "work" }));
        const titleInput = screen.getByLabelText(/task title/i);
        const descriptionInput = screen.getByLabelText(/description/i);
        const submitButton = screen.getByRole('button', { name: /add task/i });
        fireEvent.change(titleInput, { target: { value: 'Test task' } });
        fireEvent.change(descriptionInput, { target: { value: 'Some details' } });
        fireEvent.click(submitButton);
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({
            title: 'Test task',
            description: 'Some details',
            category: 'work',
        });
    });
    it('shows validation error when title is empty', () => {
        const handleAddTodo = vi.fn();
        render(_jsx(TodoForm, { onAddTodo: handleAddTodo }));
        const submitButton = screen.getByRole('button', { name: /add task/i });
        fireEvent.click(submitButton);
        expect(handleAddTodo).not.toHaveBeenCalled();
        expect(screen.getByText(/title is required/i)).toBeDefined();
    });
});
