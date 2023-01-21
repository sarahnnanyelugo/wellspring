import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from './pages/Home/Home';
import NavBar from './components/Navbar/Navbar';
import { TopNav } from './components/Navbar/TopNav';
import "bootstrap/dist/css/bootstrap.min.css";
import useSticky from "./hooks/useSticky.js";
import ScrollToTop from "./components/scrollToTop";
import { Footer } from './components/Footer/Footer';
import { Welcome } from './pages/Welcome/Welcome';
import { Philosophy } from './pages/Philosophy/Philosophy';
import { Leadership } from './pages/Leadership/Leadership';
function App() {
   const { isSticky, element } = useSticky();
  return (
    <BrowserRouter>
      
      {/* <NavBar sticky={isSticky} /> */}
      {/* <NavBar  /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="leadership" element={<Leadership />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
