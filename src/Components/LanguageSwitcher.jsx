import { useState, useEffect, useRef } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Track current language
  const dropdownRef = useRef(null);

  const location = useLocation();
  const isAboutPage = location.pathname.includes("About");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    setCurrentLanguage(savedLanguage);
  }, [i18n]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setCurrentLanguage(language);
    setIsOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={`flex items-center px-3 py-2 border rounded-lg border-white border-opacity-30 ${
          isAboutPage ? "text-white" : "text-gray-700 hover:text-gray-900"
        }`}
      >
        <FaGlobe className="mr-2" />
        <span>{currentLanguage === "en" ? "ENGLISH" : "عربي"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            عربي
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
