import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './components/Register';
import HomePage from './components/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
