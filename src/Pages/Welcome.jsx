import Logo from "../assets/Main Logo.svg";
import Desert from "../assets/DesertWelcome.svg";

function Welcome({onClose}) {
  return (
    <div
      className="relative h-[100vh] flex flex-col justify-center items-center"
      style={{ fontFamily: "Jeko, sans-serif" }}
    >
      <div className="Logo mb-4">
        <img src={Logo} alt="Logo" className="h-20" />
      </div>

      <div>
        <div className="flex flex-col sm:flex-row mb-6 text-[20px] text-[#C05D1B] space-y-4 sm:space-y-0 sm:space-x-52 sm:text-left text-left  text-center">
          <div className="w-full sm:w-56">
            <b>Welcome to Alzahra Hajj & Umrah Services</b>
          </div>
          <div className="w-full sm:w-56 sm:text-right text-center">
            <b>مرحبا بكم في خدمات الزهراء للحج والعمرة</b>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-12 px-4 sm:px-10 text-[20px]">
        <div className="text-center sm:text-left">
          <h1 className="text-[20px] font-jeko-medium">Select Your Language</h1>
          <div className="border-2 border-black rounded-[20px] w-full sm:w-[309px] h-[65px] flex items-center justify-center mt-2 text-[20px]">
            English
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h1 className="text-[20px] font-jeko-medium sm:text-right">اخترك اللغة</h1>
          <div onClick={onClose} className="border-2 border-black rounded-[20px] w-full sm:w-[309px] h-[65px] flex items-center justify-center mt-2 text-[20px]">
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
