import type { AddTodoPayload, TodoCategory } from '@models/todo';
export interface TodoFormProps {
    onAddTodo: (payload: AddTodoPayload) => void;
    defaultCategory?: TodoCategory;
}
export declare const TodoForm: import("react").NamedExoticComponent<TodoFormProps>;
