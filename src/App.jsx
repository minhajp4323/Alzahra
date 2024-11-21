import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("language") || "en");
  const [isFirstVisit, setIsFirstVisit] = useState(localStorage.getItem("visited") ? false : true);

  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem("visited", true);  
      navigate("/welcome");  
    } else {
      i18n.changeLanguage(currentLanguage);  
    }
  }, [i18n, currentLanguage, isFirstVisit, navigate]);

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
        {/* Conditionally render Header only if not on the Welcome page */}
        {location.pathname !== "/welcome" && <Header />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome onClose={() => setIsFirstVisit(false)} setCurrentLanguage={setCurrentLanguage} />} />
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
