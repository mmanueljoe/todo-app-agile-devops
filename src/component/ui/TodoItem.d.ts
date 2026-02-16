import type { Todo } from '@models/todo';
export interface TodoItemProps {
    todo: Todo;
    onToggleCompleted: (id: string) => void;
}
export declare const TodoItem: import("react").NamedExoticComponent<TodoItemProps>;
