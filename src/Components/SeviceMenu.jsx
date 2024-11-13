import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ServicesMenu() {
  const nav= useNavigate()
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-auto bg-white rounded-[25px] shadow-[0_4px_40px_#EDB480] mx-auto p-6 transition-all duration-300 ease-in-out text-[18px] z-50 ">
      <div className="flex items-center justify-around space-x-6">
        <button
          onClick={() => toggleMenu("hajj")}
          className="text-xs sm:text-sm md:text-lg flex "
        >
          HAJJ
          <MdKeyboardArrowDown className="mt-1 xs:mt-[2px] ml-2" />
        </button>
        <div className="border-l-2 border-gray-300 h-[20px] sm:h-[30px] mx-1 sm:mx-2"></div>

        <button
          onClick={() => toggleMenu("umrah")}
          className="text-xs sm:text-sm md:text-lg flex "
        >
          UMRAH
          <MdKeyboardArrowDown className="mt-1 xs:mt-[2px] ml-2" />
        </button>
        <div className="border-l-2 border-gray-300 h-[20px] sm:h-[30px] mx-1 sm:mx-2"></div>

        <button
          onClick={() => toggleMenu("services")}
          className="text-xs sm:text-sm md:text-lg flex "
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
            <div className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded" 
            onClick={()=>nav("/Hajj-Individual")}>
              Individual Package
            </div>
            <div className="text-md md:text-[18px] cursor-pointer hover:bg-gray-200 p-2 rounded">
              Group Package
            </div>
          </div>
        )}

        {openMenu === "umrah" && (
          <div className="">
            <hr className="border-t-[1px] border-gray-300 my-4 w-full md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto " />
            <div className="text-md md:text-[18px]cursor-pointer hover:bg-gray-200 p-2 rounded">
              Standard Group Package
            </div>
            <div className="text-md md:text-[18px]cursor-pointer hover:bg-gray-200 p-2 rounded">
              Ramzan Package
            </div>
            <div className="text-md md:text-[18px]cursor-pointer hover:bg-gray-200 p-2 rounded">
              Family Package
            </div>
            <div className="text-md md:text-[18px]cursor-pointer hover:bg-gray-200 p-2 rounded">
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
