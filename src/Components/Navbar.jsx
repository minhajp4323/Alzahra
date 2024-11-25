import { useState, useEffect, useRef } from "react";
import EnglishLogo from "../assets/English Logo.svg";
import ArabicLogo from "../assets/Arabic Logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { Trans, useTranslation } from "react-i18next";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const nav = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname.includes("/About");
  const hajjDropdownRef = useRef(null);
  const umrahDropdownRef = useRef(null);
  const dropDownUmrahRef = useRef(null);

  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [dropdownMobHajj, setDropdownMobHajj] = useState(null);
  const [dropdownMobUmrah, setDropdownMobUmrah] = useState(null);
  const dropdownRefMobHajj = useRef(null);
  const dropdownRefMobUmrah = useRef(null);

  useEffect(() => {
    const handleClickOutsideHajj = (event) => {
      if (
        dropdownRefMobHajj.current &&
        !dropdownRefMobHajj.current.contains(event.target)
      ) {
        setDropdownMobHajj(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideHajj);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideHajj);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideUmrah = (event) => {
      if (
        dropdownRefMobUmrah.current &&
        !dropdownRefMobUmrah.current.contains(event.target)
      ) {
        setDropdownMobUmrah(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideUmrah);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideUmrah);
    };
  }, []);

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
    <div className={`sticky top-0 z-50 ${isAboutPage ? "text-white" : ""}`}>
      <div
        className={`p-6 flex justify-between items-center relative transition-all duration-300 ${
          isScrolled ? "bg-white bg-opacity-20 backdrop-blur-md" : ""
        }`}
      >
        <img
          src={currentLang === "ar" ? ArabicLogo : EnglishLogo}
          alt="Logo"
          className="h-12"
          onClick={() => nav("/")}
        />

        <div
          className="md:hidden flex items-center z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button
            className="text-2xl"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
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
                isActive("/") ? "font-bold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                nav("/");
                window.scrollTo(0, 0);
              }}
            >
              <Trans ns="Navbar" i18nKey="Home" />
            </li>
            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/About") ? "font-bold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                nav("/About");
                window.scrollTo(0, 0);
              }}
            >
              <Trans ns="Navbar" i18nKey="About" />
            </li>

            {/* Hajj Dropdown */}
            <div ref={dropdownRefMobHajj}>
              <li
                className={`p-2 text-lg cursor-pointer hover:font-bold ${
                  dropdownMobHajj === "hajj" ? "font-bold" : ""
                }`}
                onClick={() =>
                  setDropdownMobHajj(dropdownMobHajj === "hajj" ? null : "hajj")
                }
              >
                <Trans ns="Navbar" i18nKey="Hajj" />
              </li>
              {dropdownMobHajj === "hajj" && (
                <ul
                  className={`list-none pl-6 text-center bg-gray-100 rounded-md ${
                    isAboutPage ? "bg-white text-black" : "bg-white text-black"
                  }  `}
                >
                  <li
                    className="p-2 text-md cursor-pointer hover:font-semibold"
                    onClick={() => {
                      setDropdownMobHajj(null); // Updated to setDropdownMobHajj
                      nav("/Hajj-Individual");
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Trans ns="Navbar" i18nKey="IndividualPackage" />
                  </li>
                  <li
                    className="p-2 text-md cursor-pointer hover:font-semibold"
                    onClick={() => {
                      setDropdownMobHajj(null);
                      nav("/Hajj-group");
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Trans ns="Navbar" i18nKey="groupPackage" />
                  </li>
                </ul>
              )}
            </div>

            {/* Umrah Dropdown */}
            <div ref={dropDownUmrahRef}>
              <li
                className={`p-2 text-lg cursor-pointer hover:font-bold ${
                  isActive("/Umrah") ? "font-bold" : ""
                }`}
                onClick={() =>
                  setDropdownMobUmrah(
                    dropdownMobUmrah === "umrah" ? null : "umrah"
                  )
                }
              >
                <Trans ns="Navbar" i18nKey="Umrah" />
              </li>
              {dropdownMobUmrah === "umrah" && (
                <ul
                  className={`list-none pl-6 text-center bg-gray-100 rounded-md ${
                    isAboutPage ? "bg-white text-black" : "bg-white text-black"
                  }  `}
                >
                  <li
                    className="p-2 text-md cursor-pointer hover:font-semibold"
                    onClick={() => {
                      setDropdownMobUmrah(null);
                      nav("/Umrah-standard");
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Trans ns="Navbar" i18nKey="STDGroupPackage" />
                  </li>
                  <li
                    className="p-2 text-md cursor-pointer hover:font-semibold"
                    onClick={() => {
                      setDropdownMobUmrah(null);
                      nav("/Umrah-ramzan-package");
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Trans ns="Navbar" i18nKey="RamzanPackage" />
                  </li>
                  <li
                    className="p-2 text-md cursor-pointer hover:font-semibold"
                    onClick={() => {
                      setDropdownMobUmrah(null);
                      nav("/Umrah-family-package");
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Trans ns="Navbar" i18nKey="FamilyPackage" />
                  </li>
                  <li
                    className="p-2 text-md cursor-pointer hover:font-semibold"
                    onClick={() => {
                      setDropdownMobUmrah(null);
                      nav("/Umrah-VIP-package");
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Trans ns="Navbar" i18nKey="IndiVIPPackage" />
                  </li>
                </ul>
              )}
            </div>

            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold ${
                isActive("/contact") ? "font-bold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                nav("/contact");
                window.scrollTo(0, 0);
              }}
            >
              <Trans ns="Navbar" i18nKey="OtherServices" />
            </li>

            <li
              className={`p-2 text-lg cursor-pointer hover:font-bold `}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <LanguageSwitcher />
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 pr-10 items-center">
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/") ? "font-bold" : ""
            }`}
            onClick={() => {
              nav("/");
              window.scrollTo(0, 0);
            }}
          >
            <Trans ns="Navbar" i18nKey="Home" />
          </li>
          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/About") ? "font-bold" : ""
            }`}
            onClick={() => {
              nav("/About");
              window.scrollTo(0, 0);
            }}
          >
            <Trans ns="Navbar" i18nKey="About" />
          </li>

          {/* Hajj Dropdown */}
          <div className="relative" ref={hajjDropdownRef}>
            <li
              className={`p-2 cursor-pointer hover:font-bold ${
                isActive("/Hajj") ? "font-bold" : ""
              }`}
              onClick={() => setDropdown(dropdown === "hajj" ? null : "hajj")}
            >
              <Trans ns="Navbar" i18nKey="Hajj" />
            </li>
            {dropdown === "hajj" && (
              <ul
                className={`absolute shadow-md mt-2 py-2 w-36 rounded-md   ${
                  isAboutPage ? "bg-white text-black" : "bg-white text-black"
                }  `}
              >
                <li
                  className={`p-2 text-sm cursor-pointer hover:bg-gray-200 `}
                  onClick={() => {
                    nav("/Hajj-group");
                    window.scrollTo(0, 0);
                  }}
                >
                  <Trans ns="Navbar" i18nKey="groupPackage" />
                </li>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    nav("/Hajj-Individual");
                    window.scrollTo(0, 0);
                  }}
                >
                  <Trans ns="Navbar" i18nKey="IndividualPackage" />
                </li>
              </ul>
            )}
          </div>

          {/* Umrah Dropdown */}
          <div className="relative" ref={umrahDropdownRef}>
            <li
              className={`p-2 cursor-pointer hover:font-bold ${
                isActive("/Umrah") ? "font-bold" : ""
              }`}
              onClick={() => setDropdown(dropdown === "umrah" ? null : "umrah")}
            >
              <Trans ns="Navbar" i18nKey="Umrah" />
            </li>
            {dropdown === "umrah" && (
              <ul
                className={`absolute shadow-md mt-2 py-2 w-36 rounded-md ${
                  isAboutPage ? "bg-white text-black" : "bg-white text-black"
                }`}
              >
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    nav("/Umrah-standard");
                    window.scrollTo(0, 0);
                  }}
                >
                  <Trans ns="Navbar" i18nKey="STDGroupPackage" />
                </li>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    nav("/Umrah-ramzan-package");
                    window.scrollTo(0, 0);
                  }}
                >
                  <Trans ns="Navbar" i18nKey="RamzanPackage" />
                </li>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    nav("/Umrah-family-package");
                    window.scrollTo(0, 0);
                  }}
                >
                  <Trans ns="Navbar" i18nKey="FamilyPackage" />
                </li>
                <li
                  className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    nav("/Umrah-VIP-package");
                    window.scrollTo(0, 0);
                  }}
                >
                  <Trans ns="Navbar" i18nKey="IndiVIPPackage" />
                </li>
              </ul>
            )}
          </div>

          <li
            className={`p-2 cursor-pointer hover:font-bold ${
              isActive("/contact") ? "font-bold" : ""
            }`}
            onClick={() => {
              nav("/contact");
              window.scrollTo(0, 0);
            }}
          >
            <Trans ns="Navbar" i18nKey="OtherServices" />
          </li>
          <li>
            <LanguageSwitcher />
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
