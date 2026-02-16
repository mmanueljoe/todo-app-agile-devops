import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '@/App';
describe('TodoDashboard add task', () => {
    it('allows user to type a title and click Add', () => {
        render(_jsx(App, {}));
        const titleInput = screen.getByLabelText(/task title/i);
        const addButton = screen.getByRole('button', { name: /add task/i });
        fireEvent.change(titleInput, { target: { value: 'Buy milk' } });
        fireEvent.click(addButton);
        expect(screen.getByText(/buy milk/i)).toBeInTheDocument();
    });
    it('shows new task immediately and clears the input', () => {
        render(_jsx(App, {}));
        const titleInput = screen.getByLabelText(/task title/i);
        const addButton = screen.getByRole('button', { name: /add task/i });
        fireEvent.change(titleInput, { target: { value: 'Walk dog' } });
        fireEvent.click(addButton);
        expect(titleInput).toHaveValue('');
        expect(screen.getByText(/walk dog/i)).toBeInTheDocument();
    });
    it('shows validation error when title is empty', () => {
        render(_jsx(App, {}));
        const addButton = screen.getByRole('button', { name: /add task/i });
        fireEvent.click(addButton);
        expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    });
});
