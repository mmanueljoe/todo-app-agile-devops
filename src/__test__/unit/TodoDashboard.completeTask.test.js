import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '@/App';
describe('TodoDashboard complete task', () => {
    const addSimpleTask = (title) => {
        const titleInput = screen.getByLabelText(/task title/i);
        const addButton = screen.getByRole('button', { name: /add task/i });
        fireEvent.change(titleInput, { target: { value: title } });
        fireEvent.click(addButton);
    };
    it('checkbox toggles task to completed state', () => {
        render(_jsx(App, {}));
        addSimpleTask('Finish report');
        const checkbox = screen.getByRole('checkbox', {
            name: /mark task "finish report" as complete/i,
        });
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(screen.getByText(/finish report/i)).toHaveClass('line-through');
    });
    it('checkbox toggles task back to incomplete state', () => {
        render(_jsx(App, {}));
        addSimpleTask('Clean room');
        const checkbox = screen.getByRole('checkbox', {
            name: /mark task "clean room" as complete/i,
        });
        fireEvent.click(checkbox);
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
        expect(screen.getByText(/clean room/i)).not.toHaveClass('line-through');
    });
});
