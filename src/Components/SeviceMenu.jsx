import { useState, useRef, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ServicesMenu() {
  const nav = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="w-auto bg-white rounded-[20px] shadow-[0_4px_40px_#EDB480] mx-auto p-6 px-8 transition-all duration-300 ease-in-out text-[18px]"
    >
      <div className="flex items-center justify-around space-x-6">
        <button
          onClick={() => toggleMenu("hajj")}
          className={`text-xs sm:text-sm md:text-lg flex md:pl-7 ${
            openMenu === "hajj" ? "text-[#B57439] font-bold" : ""
          }`}
        >
          <Trans ns="ServiceMenu" i18nKey="hajj" />
          <MdKeyboardArrowDown className="mt-1 xs:mt-[2px] ml-2" />
        </button>
        <div className="border-l-2 border-gray-300 h-[20px] sm:h-[30px] mx-1 sm:mx-2"></div>

        <button
          onClick={() => toggleMenu("umrah")}
          className={`text-xs sm:text-sm md:text-lg flex ${
            openMenu === "umrah" ? "text-[#B57439] font-bold" : ""
          }`}
        >
          <Trans ns="ServiceMenu" i18nKey="umrah" />
          <MdKeyboardArrowDown className="mt-1 xs:mt-[2px] ml-2" />
        </button>
        <div className="border-l-2 border-gray-300 h-[20px] sm:h-[30px] mx-1 sm:mx-2"></div>

        <button
          onClick={() => toggleMenu("services")}
          className={`text-xs sm:text-sm md:text-lg flex md:pr-7 ${
            openMenu === "services" ? "text-[#B57439] font-bold" : ""
          }`}
        >
          <Trans ns="ServiceMenu" i18nKey="services" />
          <MdKeyboardArrowDown className="mt-1 xs:mt-[2px] ml-2" />
        </button>
      </div>

      {/* Expandable Content Section */}
      <div
        className={`mt-4 transition-all duration-1000 ease-in-out ${
          openMenu ? "pb-4" : "-mb-5"
        }`}
      >
        {openMenu === "hajj" && (
          <div
            className={`${currentLang === "ar" ? "text-right" : "text-left"}`}
          >
            <hr className="border-t-[1px] border-gray-300 my-4 w-full md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto " />
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Hajj-Individual")}
            >
              <Trans ns="ServiceMenu" i18nKey="IndividualPackage" />
            </div>
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Hajj-group")}
            >
              <Trans ns="ServiceMenu" i18nKey="GroupPackage" />
            </div>
          </div>
        )}

        {openMenu === "umrah" && (
          <div
            className={`${currentLang === "ar" ? "text-right" : "text-left"}`}
          >
            <hr className="border-t-[1px] border-gray-300 my-4 w-full md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto " />
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Umrah-standard")}
            >
              <Trans ns="ServiceMenu" i18nKey="StdGroupPackage" />
            </div>
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Umrah-ramzan-package")}
            >
              <Trans ns="ServiceMenu" i18nKey="RamzanPackage" />
            </div>
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Umrah-family-package")}
            >
              <Trans ns="ServiceMenu" i18nKey="FamilyPackage" />
            </div>
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Umrah-VIP-package")}
            >
              <Trans ns="ServiceMenu" i18nKey="IndiVIPPackage" />
            </div>
          </div>
        )}
        {openMenu === "services" && (
          <div
            className={`${currentLang === "ar" ? "text-right" : "text-left"}`}
          >
            <hr className="border-t-[1px] border-gray-300 my-4 w-full md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto " />
            <div className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded ">
              <Trans ns="ServiceMenu" i18nKey="OtherServices" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesMenu;
