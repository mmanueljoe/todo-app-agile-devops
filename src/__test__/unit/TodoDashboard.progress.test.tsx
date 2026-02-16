import { describe, expect, it, beforeEach, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '@/App';

describe('TodoDashboard progress', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const addTask = (title: string) => {
    const titleInput = screen.getByLabelText(/task title/i);
    const addButton = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(titleInput, { target: { value: title } });
    fireEvent.click(addButton);
  };

  it('displays total task count', () => {
    render(<App />);
    addTask('Task 1');
    addTask('Task 2');

    expect(screen.getByText(/progress:.*2.*completed/i)).toBeInTheDocument();
  });

  it('displays completed task count', () => {
    render(<App />);
    addTask('Task 1');
    addTask('Task 2');

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    expect(screen.getByText(/progress:.*1.*of.*2.*completed/i)).toBeInTheDocument();
  });

  it('calculates and displays correct progress percentage', () => {
    render(<App />);
    addTask('Task 1');
    addTask('Task 2');
    addTask('Task 3');

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);

    expect(screen.getByText(/67%/i)).toBeInTheDocument();
  });

  it('shows 0% when there are no tasks', () => {
    render(<App />);

    expect(screen.getByText(/progress:.*0.*of.*0.*completed/i)).toBeInTheDocument();
    expect(screen.getByText(/0%/i)).toBeInTheDocument();
  });

  it('updates progress when a task is added', () => {
    render(<App />);

    expect(screen.getByText(/progress:.*0.*of.*0.*completed/i)).toBeInTheDocument();

    addTask('New task');

    expect(screen.getByText(/progress:.*0.*of.*1.*completed/i)).toBeInTheDocument();
  });

  it('updates progress when a task is completed', () => {
    render(<App />);
    addTask('Task to complete');

    expect(screen.getByText(/progress:.*0.*of.*1.*completed/i)).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox', {
      name: /mark task "task to complete" as complete/i,
    });
    fireEvent.click(checkbox);

    expect(screen.getByText(/progress:.*1.*of.*1.*completed/i)).toBeInTheDocument();
    expect(screen.getByText(/100%/i)).toBeInTheDocument();
  });

  it('updates progress when a task is deleted', () => {
    render(<App />);
    addTask('Task 1');
    addTask('Task 2');

    expect(screen.getByText(/progress:.*0.*of.*2.*completed/i)).toBeInTheDocument();

    const deleteButtons = screen.getAllByRole('button', {
      name: /delete task/i,
    });

    vi.spyOn(window, 'confirm').mockReturnValue(true);
    fireEvent.click(deleteButtons[0]);

    expect(screen.getByText(/progress:.*0.*of.*1.*completed/i)).toBeInTheDocument();
  });
});
