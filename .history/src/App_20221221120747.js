import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
