import type { Todo } from '@models/todo';
export interface TodoListProps {
    todos: Todo[];
    onToggleTodoCompleted: (id: string) => void;
}
export declare const TodoList: import("react").NamedExoticComponent<TodoListProps>;
