import { describe, expect, it, beforeEach, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { App } from '@/App';

describe('TodoDashboard delete task', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const addTask = (title: string) => {
    const titleInput = screen.getByLabelText(/task title/i);
    const addButton = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(titleInput, { target: { value: title } });
    fireEvent.click(addButton);
  };

  it('displays delete button on each task', () => {
    render(<App />);
    addTask('Task to delete');

    const deleteButton = screen.getByRole('button', {
      name: /delete task/i,
    });

    expect(deleteButton).toBeInTheDocument();
  });

  it('shows confirmation dialog when delete is clicked', () => {
    render(<App />);
    addTask('Task to delete');

    const deleteButton = screen.getByRole('button', {
      name: /delete task/i,
    });

    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);

    fireEvent.click(deleteButton);

    expect(confirmSpy).toHaveBeenCalledWith(
      expect.stringContaining('delete'),
    );

    confirmSpy.mockRestore();
  });

  it('removes task from list when deletion is confirmed', () => {
    render(<App />);
    addTask('Task to delete');

    const deleteButton = screen.getByRole('button', {
      name: /delete task/i,
    });

    vi.spyOn(window, 'confirm').mockReturnValue(true);

    fireEvent.click(deleteButton);

    expect(screen.queryByText(/task to delete/i)).not.toBeInTheDocument();
  });

  it('keeps task in list when deletion is cancelled', () => {
    render(<App />);
    addTask('Task to keep');

    const deleteButton = screen.getByRole('button', {
      name: /delete task/i,
    });

    vi.spyOn(window, 'confirm').mockReturnValue(false);

    fireEvent.click(deleteButton);

    expect(screen.getByText(/task to keep/i)).toBeInTheDocument();
  });

  it('persists deletion to localStorage', async () => {
    render(<App />);
    addTask('Task to delete');

    const deleteButton = screen.getByRole('button', {
      name: /delete task/i,
    });

    vi.spyOn(window, 'confirm').mockReturnValue(true);

    fireEvent.click(deleteButton);

    await waitFor(() => {
      const saved = localStorage.getItem('todo-dashboard-tasks');
      const parsed = saved ? JSON.parse(saved) : [];
      expect(parsed).toHaveLength(0);
    });
  });

  it('deletes correct task when multiple tasks exist', () => {
    render(<App />);
    addTask('Task 1');
    addTask('Task 2');
    addTask('Task 3');

    const deleteButtons = screen.getAllByRole('button', {
      name: /delete task/i,
    });

    vi.spyOn(window, 'confirm').mockReturnValue(true);

    fireEvent.click(deleteButtons[1]);

    expect(screen.queryByText(/task 2/i)).not.toBeInTheDocument();
    expect(screen.getByText(/task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/task 3/i)).toBeInTheDocument();
  });
});
