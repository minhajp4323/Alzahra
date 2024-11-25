import { useNavigate } from "react-router-dom";
import Logo from "../assets/Main Logo.svg";
import Desert from "../assets/DesertWelcome.svg";

function Welcome({ onClose, setCurrentLanguage }) {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    localStorage.setItem("language", language);
    setCurrentLanguage(language);
    onClose();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="relative h-[100vh] flex flex-col justify-center items-center gap-10">
      <div className="Logo mb-4">
        <img src={Logo} alt="Logo" className="h-20" />
      </div>

      <div>
        <div className="flex flex-col sm:flex-row mb-6 text-[20px] text-[#C05D1B] space-y-4 sm:space-y-0 sm:space-x-52 sm:text-left text-center">
          <div className="w-full sm:w-56 mr-16">
            <b>Welcome to Alzahra Hajj & Umrah Services</b>
          </div>
          <div
            className="w-full sm:w-56 sm:text-right text-center font-[Tajawal]"
            // style={{ fontFamily: "Tajawal, sans-serif" }}
          >
            <span className="font-bold">
              مرحبا بكم في خدمات الزهراء للحج والعمرة
            </span>
          </div>
        </div>
        <hr className="w-full md:w-full border-t-2 border-[#E0C293] xs:w-[80%] mx-auto" />
      </div>

      <div className="flex flex-col sm:flex-row justify-start gap-6 sm:gap-[200px] md:gap-[110px] px-4 sm:px-10 text-[20px]">
        <div className="text-center sm:text-left relative">
          <h1 className="text-[20px]">Select Your Language</h1>
          <div
            className="border-2 border-black rounded-[20px] w-full sm:w-[309px] h-[65px] flex items-center justify-center mt-2 text-[20px] cursor-pointer 
                hover:scale-105 transition-all duration-300 z-10 relative"
            role="button"
            tabIndex={0}
            onClick={() => handleLanguageSelect("en")}
          >
            English
          </div>
        </div>

        <div className="text-center sm:text-left relative">
          <h1
            className="text-[20px] sm:text-right font-[Tajawal]"
            // style={{ fontFamily: "Tajawal, sans-serif" }}
          >
            اخترك اللغة
          </h1>
          <div
            onClick={() => handleLanguageSelect("ar")}
            className="border-2 border-black rounded-[20px] w-full sm:w-[309px] h-[65px] flex items-center justify-center mt-2 text-[20px] cursor-pointer 
                  hover:scale-105 transition-all duration-300 z-10 relative font-[Tajawal]"
            role="button"
            tabIndex={0}
            // style={{ fontFamily: "Tajawal, sans-serif" }}
          >
            عربي
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <img src={Desert} alt="Desert" className="w-full" />
      </div>
    </div>
  );
}

export default Welcome;
