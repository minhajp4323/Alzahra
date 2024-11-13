import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Navbar";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import Hajj_Individual from "./Pages/Hajj/Hajj_Individual";
import Hajj_Group from "./Pages/Hajj/Hajj_Group";

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
            : "linear-gradient(to bottom, #FFDEA8, #FFF1DE, #FFDEA8)",
      }}
    >
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hajj-individual" element={<Hajj_Individual />} />
          <Route path="/Hajj-group" element={<Hajj_Group />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
