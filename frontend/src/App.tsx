// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import FilterCar from './pages/FilterCar'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<FilterCar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
