import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from './pages/Home/Home';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    
    <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
