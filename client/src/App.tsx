import Header from './components/header/header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './pages/Admin-Dashboard/Dashboard';
import Student from './pages/Student-Details/Student';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pricing from './pages/pricing/Pricing';
function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard/Student/:id" element={<Student />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
