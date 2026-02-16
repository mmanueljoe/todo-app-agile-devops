import { useCallback, useState } from 'react';
export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = useCallback((payload) => {
        const trimmedTitle = payload.title.trim();
        if (!trimmedTitle) {
            return;
        }
        const newTodo = {
            id: crypto.randomUUID(),
            title: trimmedTitle,
            description: payload.description?.trim() || undefined,
            category: payload.category ?? 'other',
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos((previous) => [newTodo, ...previous]);
    }, []);
    const toggleTodoCompleted = useCallback((id) => {
        setTodos((previous) => previous.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }, []);
    return {
        todos,
        addTodo,
        toggleTodoCompleted,
    };
};
