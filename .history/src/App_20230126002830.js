import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import { TopNav } from "./components/Navbar/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import useSticky from "./hooks/useSticky.js";
import ScrollToTop from "./components/scrollToTop";
import { Footer } from "./components/Footer/Footer";
import { Welcome } from "./pages/Welcome/Welcome";
import { Philosophy } from "./pages/Philosophy/Philosophy";
import { Leadership } from "./pages/Leadership/Leadership";
import { Directory } from "./pages/DIrectory/Directory";
import { Calendar } from "./pages/Calendar/Calendar.js";
import { Faith } from "./pages/Faith/Faith";
import { Contact } from "./pages/Contact/Contact";
import { Diversity } from "./pages/Diversity/Diversity";
import { HealthSafety } from "./pages/Health-Safety/Health-Safety";
import { Media } from "./pages/Media/Media";
import { Careers } from "./pages/Careers/Careers";
import { WhyWellspring } from "./pages/WhyWellspring/WhyWellspring";
import { HowToApply } from "./pages/HowToApply/HowToApply";
import { Tuition } from "./pages/Tuition/Tuition";
// import { HowToApply, Tuition } from "./pages/Tuition/Tuition";
function App() {
  const { isSticky, element } = useSticky();
  return (
    <BrowserRouter>
      {/* <NavBar sticky={isSticky} /> */}
      <NavBar pathname />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="directory" element={<Directory />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="faith" element={<Faith />} />
        <Route path="contact" element={<Contact />} />
        <Route path="diversity" element={<Diversity />} />
        <Route path="health-safety" element={<HealthSafety />} />
        <Route path="media" element={<Media />} />
        <Route path="careers" element={<Careers />} />
        <Route path="why-ws" element={<WhyWellspring />} />
        <Route path="how-to-apply" element={<HowToApply />} />
        <Route path="tuition" element={<Tuition />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
