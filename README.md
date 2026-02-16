# React Todo Dashboard

A simple, responsive React Todo Dashboard that helps users quickly capture, organize, and track their daily tasks in the browser, with clear visibility into progress.

## Features

- ✅ **Add Tasks**: Create new tasks with a title and optional description
- 🏷️ **Categorize Tasks**: Assign tasks to categories (Work, Personal, Urgent, Other) and filter by category
- ✓ **Mark Complete**: Toggle task completion status with visual feedback
- 🗑️ **Delete Tasks**: Remove tasks with confirmation dialog to prevent accidental deletion
- 💾 **Save to Browser**: Tasks persist in localStorage, so your data survives page refreshes
- 📊 **Show Progress**: Visual progress indicator showing completed vs total tasks

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Test runner
- **React Testing Library** - Component testing
- **GitHub Actions** - CI/CD pipeline

## Installation

```bash
yarn install
```

## Development

Start the development server:

```bash
yarn dev
```

The app will be available at `http://localhost:5173`

## Testing

Run the test suite:

```bash
yarn test
```

Run tests in watch mode:

```bash
yarn test --watch
```

Run tests with coverage:

```bash
yarn test --coverage
```

## Building

Build the project for production:

```bash
yarn run build
```

The production build will be in the `dist` directory.

## Type Checking

Run TypeScript type checking:

```bash
yarn type-check
```

## Linting and Formatting

Lint the codebase:

```bash
yarn lint
```

Format the codebase:

```bash
yarn format
```

## Folder Structure

```
src/
├── component/          # React components
│   ├── TodoDashboard.tsx    # Main dashboard component
│   └── ui/            # UI components
│       ├── TodoForm.tsx      # Task creation form
│       ├── TodoList.tsx      # Task list container
│       ├── TodoItem.tsx      # Individual task item
│       ├── TodoFilters.tsx   # Category filter component
│       └── TodoProgress.tsx  # Progress indicator
├── hooks/             # Custom React hooks
│   └── useTodos.ts    # Todo state management hook
├── models/            # TypeScript types and interfaces
│   └── todo.ts        # Todo-related types
└── __test__/          # Test files
    ├── unit/          # Unit tests
    └── TodoForm.test.tsx
```

## Key Components

### TodoDashboard
Main container component that orchestrates all features and manages the overall state.

### TodoForm
Form component for adding new tasks with title, description, and category selection.

### TodoList
Renders a list of TodoItem components with filtering support.

### TodoItem
Individual task item with completion toggle, category badge, and delete button.

### TodoFilters
Category filter dropdown for filtering tasks by category.

### TodoProgress
Progress indicator component showing total tasks, completed tasks, and percentage.

### useTodos Hook
Custom hook managing todo state, localStorage persistence, and CRUD operations.

## Project Structure

This project follows Agile development practices with:
- Product backlog with user stories
- Sprint planning and execution
- Definition of Done
- Sprint reviews and retrospectives
- CI/CD pipeline with automated testing

See `docs/` folder for detailed documentation including backlog, sprint plans, reviews, and retrospectives.

## License

MIT License
