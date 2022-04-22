import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Index from "./pages/index";
import Footer from "./components/footer/Footer";
import Proyects from "./pages/proyects/Proyects";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path="/proyects/:proyectName" element={<Proyects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
