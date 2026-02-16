import { jsx as _jsx } from "react/jsx-runtime";
import { TodoDashboard } from '@component/TodoDashboard';
export const App = () => {
    return (_jsx("main", { className: "min-h-screen px-4 py-8 sm:px-6 lg:px-8", children: _jsx(TodoDashboard, {}) }));
};
export default App;
