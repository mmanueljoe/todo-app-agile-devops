
import type { FC } from 'react';
import { TodoDashboard } from '@component/TodoDashboard';

export const App: FC = () => {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <TodoDashboard />
    </main>
  );
};

export default App;



