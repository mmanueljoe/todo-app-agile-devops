import { render, screen } from '@testing-library/react';
import { App } from '@/App';

describe('App rendering', () => {
  it('renders without crashing and shows dashboard heading', () => {
    render(<App />);

    expect(screen.getByText(/todo dashboard/i)).toBeInTheDocument();
  });

  it('renders core UI elements', () => {
    render(<App />);

    expect(screen.getByLabelText(/task title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add task/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });
});


