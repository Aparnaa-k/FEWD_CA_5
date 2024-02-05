import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/homePage"
import Register from './components/Register';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
