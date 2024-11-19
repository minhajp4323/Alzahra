import React, { useState, useEffect, useRef } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);  // Change the language
    setIsOpen(false);  // Close the dropdown after selection
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
        className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
      >
        <FaGlobe className="mr-2" />
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
            Arabic
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
