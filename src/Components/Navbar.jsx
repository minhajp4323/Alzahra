import { useState, useEffect } from "react";
import Logo from "../assets/Arabic Logo.svg";

function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  
  const [isScrolled, setIsScrolled] = useState(false);

  
  const handleScroll = () => {
    if (window.scrollY > 50) { 
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`p-6 flex justify-between items-center relative transition-all duration-300 ${
          isScrolled ? "bg-white bg-opacity-20 backdrop-blur-md" : ""
        }`}
      >
        <img src={Logo} alt="Logo" className="h-12" />

        {/* <ul
          className={`list-none md:flex gap-10 pr-10 transition-all duration-300 ${
            isOpen
              ? "flex-col absolute top-[60px] left-0 w-full z-50 rounded-lg"
              : "hidden md:flex"
          }`}
        >
          <li className="p-2">HOME</li>
          <li className="p-2">ABOUT US</li>
          <li className="p-2">HAJJ</li>
          <li className="p-2">UMRAH</li>
          <li className="p-2">OTHER SERVICES</li>
          <li className="p-2">CONTACT US</li>
        </ul> */}

        {/* <div
          className="md:hidden flex items-center z-50"
          onClick={() => setIsOpen(!isOpen)} 
        >
          <button className="text-2xl">
            {isOpen ? (
              <span>&#10005;</span> 
            ) : (
              <span>&#9776;</span> 
            )}
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
