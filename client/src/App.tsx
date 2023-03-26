import Header from "./components/header/header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Admin-Dashboard/Dashboard";
import Student from "./pages/Student-Details/Student";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/Student/:id" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
