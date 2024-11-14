import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Navbar";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import Hajj_Individual from "./Pages/Hajj/Hajj_Individual";
import Hajj_Group from "./Pages/Hajj/Hajj_Group";
import About from "./Pages/About";
import Umrah_Standard from "./Pages/Umrah/UmrahStandard";
import Umrah_Ramzan from "./Pages/Umrah/UmrahRamzan";
import Umrah_Family from "./Pages/Umrah/UmrahFamily";
import Umrah_VIP from "./Pages/Umrah/UmrahVIP";
import Contact from "./Pages/Contact";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const location = useLocation(); // Get the current path

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowWelcome(false);
    }
  }, []);

  const handleWelcomeClose = () => {
    localStorage.setItem("hasVisited", "true");
    setShowWelcome(false);
  };

  return (
    <div
      style={{
        background:
          location.pathname === "/"
            ? "repeating-linear-gradient(to bottom, #FFDEA8, #FFF1DE, #FFDEA8 33%)"
            : location.pathname === "/About"
            ? "linear-gradient(to bottom, #1D408A, #576D9C, #1D408A)"
            : "linear-gradient(to bottom, #FFDEA8, #FFF1DE, #FFDEA8)",
      }}
    >
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Hajj-individual" element={<Hajj_Individual />} />
          <Route path="/Hajj-group" element={<Hajj_Group />} />
          <Route path="/Umrah-standard" element={<Umrah_Standard />} />
          <Route path="/Umrah-ramzan-package" element={<Umrah_Ramzan />} />
          <Route path="/Umrah-family-package" element={<Umrah_Family />} />
          <Route path="/Umrah-VIP-package" element={<Umrah_VIP />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
