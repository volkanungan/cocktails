import './App.css';
import Search from './Search';
import Details from './Details';
import Landing from './Landing';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/cocktail/:id" element={<Details />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
