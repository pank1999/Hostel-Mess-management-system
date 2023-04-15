import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/Admin-Dashboard/AdminDashboard';
import UserDashboard from './pages/Dashboard/UserDashboard';
import Student from './pages/Student-Details/Student';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pricing from './pages/pricing/Pricing';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import { createContext } from 'react';
import { IUser } from './interfaces/user.interface';
import { LocalStorageLoggedInUserKey } from './constants/constants';

export const UserContext = createContext<Partial<IUser>>({
  name: '',
  mobileNumber: 0,
  role: '',
});

function App() {
  const client = new QueryClient();
  const user = localStorage.getItem(LocalStorageLoggedInUserKey);
  return (
    <QueryClientProvider client={client}>
      <UserContext.Provider value={JSON.parse(user ?? '{}')}>
        <Router>
          <Header />
          <Routes>
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/Dashboard/Student/:id" element={<Student />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/User/Dashboard" element={<UserDashboard />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
