import { useState, useEffect } from "react";
import Logo from "../assets/Arabic Logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname.includes("/About");

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

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`top-0 z-50 ${isAboutPage ? "text-white" : ""}`}>
      <div
        className={`p-6 flex justify-between items-center relative transition-all duration-300 ${
          isScrolled ? "bg-white bg-opacity-20 backdrop-blur-md" : ""
        }`}
      >
        <img src={Logo} alt="Logo" className="h-12" onClick={() => nav("/")} />

        <div
          className="md:hidden flex items-center z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button className="text-2xl">
            {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 w-full shadow-lg z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } ${
            isAboutPage ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <ul className="list-none flex flex-col p-6 gap-4 text-center">
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/") ? "font-bold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                nav("/");
              }}
            >
              HOME
            </li>
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/About") ? "font-bold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                nav("/About");
              }}
            >
              ABOUT US
            </li>
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/Hajj") ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              HAJJ
            </li>
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/Umrah") ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              UMRAH
            </li>
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/contact") ? "font-bold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                nav("/contact");
              }}
            >
              OTHER SERVICES
            </li>
          </ul>
        </div>

        <ul className="hidden md:flex gap-10 pr-10">
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/") ? "font-bold" : ""
            }`}
            onClick={() => nav("/")}
          >
            HOME
          </li>
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/About") ? "font-bold" : ""
            }`}
            onClick={() => nav("/About")}
          >
            ABOUT US
          </li>
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/Hajj") ? "font-bold" : ""
            }`}
          >
            HAJJ
          </li>
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/Umrah") ? "font-bold" : ""
            }`}
          >
            UMRAH
          </li>
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/contact") ? "font-bold" : ""
            }`}
            onClick={() => nav("/contact")}
          >
            OTHER SERVICES
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Header;
