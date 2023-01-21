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
function App() {
   const { isSticky, element } = useSticky();
  return (
    <BrowserRouter>
      <TopNav element={element} />
      
      <NavBar sticky={isSticky} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
