import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes> <Route path="/" element={<Home />} />
    </BrowserRouter>
  );
}

export default App;
