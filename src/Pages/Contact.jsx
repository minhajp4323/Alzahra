// import ContactForm from "../Components/ContactForm";
import { useEffect, useState } from "react";
import GetInTouch from "../assets/Get in Touch/GetInTouch.png";
import GetInTouchMob from "../assets/Get in Touch/GetInTouchMob.png";
import Mail from "../assets/Get in Touch/Mail.svg";
import Phone from "../assets/Get in Touch/Phone.svg";
import Footer from "../Components/Footer";
import { Trans, useTranslation } from "react-i18next";
// import TestForm from "../Components/TestForm";

function Contact() {
  const [backgroundImage, setBackgroundImage] = useState(GetInTouch);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    const updateBackground = () => {
      setBackgroundImage(window.innerWidth < 768 ? GetInTouchMob : GetInTouch);
    };

    updateBackground(); 
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);
  return (
    <div className="flex flex-col  ">
      <header className="mb-4 md:mb-8 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-[#C05D1B] text-[32px] md:text-[54px] font-bold">
          <Trans ns="Contact" i18nKey="getin" />
        </h1>
        <h2 className="text-[#5D5D5D] text-[18px] md:text-[24px] font-bold">
        
          <Trans ns="Contact" i18nKey="yourJourney" />
        </h2>
      </header>

      <section
        className="relative w-full flex justify-center  items-center"
        aria-labelledby="contact-info"
      >
        <div
          className="flex justify-center items-center ml-0 xs:ml-0 relative md:pt-20 sm:pt-5 mx-0 md:mx-[150px] bg-cover bg-center bg-no-repeat rounded-[20px] w-full md:w-[calc(100%-300px)] h-[737px]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute bg-transparent border-[3px] border-[#B0876B] md:p-[59px] xs:p-[20px] sm:ml-[5%]  lg:ml-[13%] md:ml-[70px] -mb-7 xs:ml-[8%] shadow-md xs:h-[80.2%] sm:h-[80.8%]  md:h-[80.2%] lg:h-[80.2%] md:w-[350px] sm:w-[90%] xs:w-[85%] text-center flex items-center justify-center bottom-0 left-0"></div>
          <div className="absolute bg-[#171717] md:bg-opacity-70 xs:bg-opacity-50 md:p-[59px] xs:p-[20px] lg:ml-[10%] md:ml-[35px] xs:ml-0 shadow-md xs:h-[72.8%] sm:h-[72.8%]  md:h-[72.1%] lg:h-[72.2%] md:w-[420px] xs:w-screen text-center backdrop-blur-[10px] flex items-center justify-center bottom-0 left-0">
            <p
              className={`text-white text-[24px] text-left leading-relaxed ${
                currentLang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <Trans ns="Contact" i18nKey="ourCommitments" />
            </p>
          </div>
        </div>
      </section>

      <section
        className="text-center mt-4 md:mt-8 w-full mb-14"
        aria-labelledby="spiritual-adventure"
      >
        <p className="text-[16px] md:text-[24px] mt-[50px] text-[#5D5D5D] px-4">
          <Trans ns="Contact" i18nKey="yourSpiritual" />
        </p>
      </section>

     
      <div className="flex gap-10 flex-wrap justify-center text-[#5D5D5D] text-[20px] mt-5">
        <div className="flex  items-center ">
          <img src={Phone} alt="Phone Icon" className="mr-2" />
          <div>+966594995016</div>
        </div>

        <div className="flex items-center ">
          <img src={Phone} alt="Phone Icon" className="mr-2" />
          <div>+966566087162</div>
        </div>

        <div className="flex items-center gap-3">
          <img src={Mail} alt="" />
          <p>info@alzahrahajj.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
