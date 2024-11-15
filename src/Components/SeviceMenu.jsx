import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ServicesMenu() {
  const nav = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close menu when clicking outside the component
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
      className="w-auto bg-white rounded-[20px] shadow-[0_4px_40px_#EDB480] mx-auto p-6 px-8 transition-all duration-300 ease-in-out text-[18px] z-50"
    >
      <div className="flex items-center justify-around space-x-6">
        <button
          onClick={() => toggleMenu("hajj")}
          className={`text-xs sm:text-sm md:text-lg flex md:pl-7 ${
            openMenu === "hajj" ? "text-[#B57439] font-bold" : ""
          }`}
        >
          HAJJ
          <MdKeyboardArrowDown className="mt-1 xs:mt-[2px] ml-2" />
        </button>
        <div className="border-l-2 border-gray-300 h-[20px] sm:h-[30px] mx-1 sm:mx-2"></div>

        <button
          onClick={() => toggleMenu("umrah")}
          className={`text-xs sm:text-sm md:text-lg flex ${
            openMenu === "umrah" ? "text-[#B57439] font-bold" : ""
          }`}
        >
          UMRAH
          <MdKeyboardArrowDown className="mt-1 xs:mt-[2px] ml-2" />
        </button>
        <div className="border-l-2 border-gray-300 h-[20px] sm:h-[30px] mx-1 sm:mx-2"></div>

        <button
          onClick={() => toggleMenu("services")}
          className={`text-xs sm:text-sm md:text-lg flex md:pr-7 ${
            openMenu === "services" ? "text-[#B57439] font-bold" : ""
          }`}
        >
          SERVICES
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
          <div className="">
            <hr className="border-t-[1px] border-gray-300 my-4 w-full md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto " />
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Hajj-Individual")}
            >
              Individual Package
            </div>
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Hajj-group")}
            >
              Group Package
            </div>
          </div>
        )}

        {openMenu === "umrah" && (
          <div className="">
            <hr className="border-t-[1px] border-gray-300 my-4 w-full md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto " />
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Umrah-standard")}
            >
              Standard Group Package
            </div>
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Umrah-ramzan-package")}
            >
              Ramzan Package
            </div>
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Umrah-family-package")}
            >
              Family Package
            </div>
            <div
              className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => nav("/Umrah-VIP-package")}
            >
              Individual & VIP Package
            </div>
          </div>
        )}
        {openMenu === "services" && (
          <div>
            <hr className="border-t-[1px] border-gray-300 my-4 w-full md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto " />
            <div className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded ">
              Other Services
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesMenu;
