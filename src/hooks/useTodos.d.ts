import type { AddTodoPayload, Todo } from '@models/todo';
export interface UseTodosResult {
    todos: Todo[];
    addTodo: (payload: AddTodoPayload) => void;
    toggleTodoCompleted: (id: string) => void;
}
export declare const useTodos: () => UseTodosResult;
