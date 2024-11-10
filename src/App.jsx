import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Navbar";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

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
        backgroundImage: `
        repeating-linear-gradient(
          to top,
          #FFDEA8, #FFF1DE, #FFDEA8,
          #FFDEA8, #FFF1DE, #FFDEA8,
        
          #FFDEA8, #FFF1DE, #FFDEA8
        )
      `,
      }}
    >
      {/* {showWelcome ? (
        <Welcome onClose={handleWelcomeClose} />
      ) : ( */}
      <>
        {/* <Welcome /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
      {/* )} */}
    </div>
  );
}

export default App;
