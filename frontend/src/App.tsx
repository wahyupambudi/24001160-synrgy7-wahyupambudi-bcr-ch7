// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from './pages/Home'
import FilterCar from './pages/FilterCar'
import AuthLogin from "./components/admin/LoginAdmin";
import AuthRegister from "./components/user/Register";
import Dashboard from "./components/admin/Dashboard";
import LoginUser from "./components/user/Login";

function App() {
  return (
    <>
    <AuthProvider >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<FilterCar />} />
          <Route path="/admin/login" element={<AuthLogin />} />
          <Route path="/register" element={<AuthRegister />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider >
    </>
  )
}

export default App
