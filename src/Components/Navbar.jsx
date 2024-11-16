import { useState, useEffect, useRef } from "react";
import Logo from "../assets/Arabic Logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const nav = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname.includes("/About");
  const dropdownRef = useRef(null);
  const hajjDropdownRef = useRef(null);
  const umrahDropdownRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const closeDropdown = () => setDropdown(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdown === "hajj" &&
        hajjDropdownRef.current &&
        !hajjDropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      } else if (
        dropdown === "umrah" &&
        umrahDropdownRef.current &&
        !umrahDropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.includes(path);
  };

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

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full shadow-lg z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } ${isAboutPage ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <ul className="list-none flex flex-col p-6 gap-4 text-center">
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/") ? "font-extrabold" : ""
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
                isActive("/About") ? "font-extrabold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                nav("/About");
              }}
            >
              ABOUT US
            </li>

            {/* Hajj Dropdown */}
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/Hajj") ? "font-extrabold" : ""
              }`}
              onClick={() => setDropdown(dropdown === "hajj" ? null : "hajj")}
            >
              HAJJ
            </li>
            {dropdown === "hajj" && (
              <ul
                className="list-none pl-6 text-center bg-gray-100"
                ref={dropdownRef}
              >
                <li
                  className="p-2 text-md cursor-pointer hover:font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    nav("/Hajj-Individual");
                  }}
                >
                  Individual Package
                </li>
                <li
                  className="p-2 text-md cursor-pointer hover:font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    nav("/Hajj-group");
                  }}
                >
                  Group Package
                </li>
              </ul>
            )}

            {/* Umrah Dropdown */}
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/Umrah") ? "font-extrabold" : ""
              }`}
              onClick={() => setDropdown(dropdown === "umrah" ? null : "umrah")}
            >
              UMRAH
            </li>
            {dropdown === "umrah" && (
              <ul
                className="list-none pl-6 text-center bg-gray-100 rounded-md"
                ref={dropdownRef}
              >
                <li
                  className="p-2 text-md cursor-pointer hover:font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    nav("/Umrah-standard");
                  }}
                >
                  Standard Group Package
                </li>
                <li
                  className="p-2 text-md cursor-pointer hover:font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    nav("/Umrah-ramzan-package");
                  }}
                >
                  Ramzan Package
                </li>
                <li
                  className="p-2 text-md cursor-pointer hover:font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    nav("/Umrah-family-package");
                  }}
                >
                  Family Package
                </li>
                <li
                  className="p-2 text-md cursor-pointer hover:font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    nav("/Umrah-VIP-package");
                  }}
                >
                  Individual & VIP Package
                </li>
              </ul>
            )}
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/contact") ? "font-extrabold" : ""
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 pr-10 items-center">
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/") ? "font-extrabold" : ""
            }`}
            onClick={() => nav("/")}
          >
            HOME
          </li>
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/About") ? "font-extrabold" : ""
            }`}
            onClick={() => nav("/About")}
          >
            ABOUT US
          </li>

          {/* Hajj Dropdown */}
          <div className="relative" ref={hajjDropdownRef}>
            <li
              className={`p-2 cursor-pointer hover:font-bold ${
                isActive("/Hajj") ? "font-extrabold" : ""
              }`}
              onClick={() => setDropdown(dropdown === "hajj" ? null : "hajj")}
            >
              HAJJ
            </li>
            {dropdown === "hajj" && (
              <ul className={`absolute shadow-md mt-2 py-2 w-36 rounded-md   ${isAboutPage ? "bg-white text-black" : "bg-white text-black"}  `}>
                <li
                  className={`p-2 text-sm cursor-pointer hover:bg-gray-200 `}
                  onClick={() => {
                    setDropdown(null);
                    nav("/Hajj-group");
                  }}
                >
                  Group Package
                </li>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setDropdown(null);
                    nav("/Hajj-Individual");
                  }}
                >
                  Individual Package
                </li>
              </ul>
            )}
          </div>

          {/* Umrah Dropdown */}
          <div className="relative" ref={umrahDropdownRef}>
            <li
              className={`p-2 cursor-pointer hover:font-bold ${
                isActive("/Umrah") ? "font-extrabold" : ""
              }`}
              onClick={() => setDropdown(dropdown === "umrah" ? null : "umrah")}
            >
              UMRAH
            </li>
            {dropdown === "umrah" && (
              <ul className={`absolute shadow-md mt-2 py-2 w-36 rounded-md  ${isAboutPage ? "bg-white text-black" : "bg-white text-black"} `}>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setDropdown(null);
                    nav("/Umrah-standard");
                  }}
                >
                  Standard Group Package
                </li>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setDropdown(null);
                    nav("/Umrah-ramzan-package");
                  }}
                >
                  Ramzan Package
                </li>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setDropdown(null);
                    nav("/Umrah-family-package");
                  }}
                >
                  Family Package
                </li>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setDropdown(null);
                    nav("/Umrah-VIP-package");
                  }}
                >
                  Individual & VIP Package
                </li>
              </ul>
            )}
          </div>

          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/contact") ? "font-extrabold" : ""
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
