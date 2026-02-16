import type { TodoCategory } from '@models/todo';
export type FilterCategory = TodoCategory | 'all';
export interface TodoFiltersProps {
    selectedCategory: FilterCategory;
    onChangeCategory: (category: FilterCategory) => void;
}
export declare const TodoFilters: import("react").NamedExoticComponent<TodoFiltersProps>;
