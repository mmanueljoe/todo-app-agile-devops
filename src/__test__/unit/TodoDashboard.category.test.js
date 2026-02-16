import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '@/App';
describe('TodoDashboard categories', () => {
    it('assigns selected category to new task', () => {
        render(_jsx(App, {}));
        const titleInput = screen.getByLabelText(/task title/i);
        const categorySelect = screen.getByLabelText(/category/i);
        const addButton = screen.getByRole('button', { name: /add task/i });
        fireEvent.change(titleInput, { target: { value: 'Project work' } });
        fireEvent.change(categorySelect, { target: { value: 'work' } });
        fireEvent.click(addButton);
        expect(screen.getByText(/project work/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/category: work/i)).toBeInTheDocument();
    });
    it('filter shows only tasks from selected category', () => {
        render(_jsx(App, {}));
        const titleInput = screen.getByLabelText(/task title/i);
        const categorySelect = screen.getByLabelText(/category/i);
        const addButton = screen.getByRole('button', { name: /add task/i });
        // Work task
        fireEvent.change(titleInput, { target: { value: 'Work task' } });
        fireEvent.change(categorySelect, { target: { value: 'work' } });
        fireEvent.click(addButton);
        // Personal task
        fireEvent.change(titleInput, { target: { value: 'Personal task' } });
        fireEvent.change(categorySelect, { target: { value: 'personal' } });
        fireEvent.click(addButton);
        const filterSelect = screen.getByLabelText(/filter by/i);
        fireEvent.change(filterSelect, { target: { value: 'work' } });
        expect(screen.getByText(/work task/i)).toBeInTheDocument();
        expect(screen.queryByText(/personal task/i)).not.toBeInTheDocument();
    });
    it('filter All shows all tasks again', () => {
        render(_jsx(App, {}));
        const titleInput = screen.getByLabelText(/task title/i);
        const categorySelect = screen.getByLabelText(/category/i);
        const addButton = screen.getByRole('button', { name: /add task/i });
        fireEvent.change(titleInput, { target: { value: 'Task A' } });
        fireEvent.change(categorySelect, { target: { value: 'work' } });
        fireEvent.click(addButton);
        fireEvent.change(titleInput, { target: { value: 'Task B' } });
        fireEvent.change(categorySelect, { target: { value: 'personal' } });
        fireEvent.click(addButton);
        const filterSelect = screen.getByLabelText(/filter by/i);
        fireEvent.change(filterSelect, { target: { value: 'work' } });
        fireEvent.change(filterSelect, { target: { value: 'all' } });
        expect(screen.getByText(/task a/i)).toBeInTheDocument();
        expect(screen.getByText(/task b/i)).toBeInTheDocument();
    });
});
