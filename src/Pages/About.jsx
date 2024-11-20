import { useNavigate } from "react-router-dom";
import MasjidBG from "../assets/About Us/Masjid.png";
// import Stars from "../assets/About Us/Stars.svg";
import Stars from "../assets/About Us/Stars.png";
import Footer from "../Components/Footer";
import { Trans, useTranslation } from "react-i18next";

function About() {
  const nav = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className="text-white md:mt-[0px] sm:mt-[100px] xs:mt-[0px] xs:pt">
      <div className="items-center flex justify-center flex-col">
        <div
          className="relative w-[100%] bg-cover bg-center  text-center "
          style={{
            backgroundImage: `url(${Stars})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center px-4 sm:px-8 md:px-16 lg:px-36 xs:pt-[100px] md:pt-[100px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight sm:leading-snug md:leading-normal lg:leading-tight xl:leading-snug">
              <Trans ns="aboutUs" i18nKey="yourTrusted" />
            </h1>

            <p
              className={`mt-4 text-lg sm:text-xl md:text-2xl lg:text-[24px] font-light leading-relaxed sm:px-4 md:px-12 lg:px-24 xl:px-36  `}
            >
              <Trans ns="aboutUs" i18nKey="description" />
            </p>
          </div>

          <div
            className="flex justify-center items-center relative md:pt-20 sm:pt-5 mx-0 md:mx-[150px] bg-cover bg-center bg-no-repeat rounded-[20px] w-full md:w-[calc(100%-300px)]"
            style={{
              backgroundImage: `url(${MasjidBG})`,
              height: "110vh",
            }}
          >
            {/* Black background div */}
            <div className="absolute bg-transparent border-[3px] border-white md:p-[59px] xs:p-[20px] sm:ml-[5%]  lg:ml-[13%] md:ml-[70px] -mb-7 xs:ml-[8%] shadow-md xs:h-[74.5%] sm:h-[74.5%]  md:h-[74.5%] lg:h-[74.5%] md:w-[350px] sm:w-[90%] xs:w-[85%] text-center flex items-center justify-center bottom-0 left-0"></div>
            <div className="absolute bg-[#171717] bg-opacity-70 md:p-[59px] xs:p-[20px] lg:ml-[10%] md:ml-[110px] shadow-md xs:h-[67.4%] sm:h-[66.9%]  md:h-[66.9%] lg:h-[67.3%] md:w-[420px] xs:w-screen text-center backdrop-blur-[10px] flex items-center justify-center bottom-0 left-0">
              <p
                className={`text-white text-[24px] text-left leading-relaxed ${
                  currentLang === "ar" ? "text-right" : "text-left"
                } `}
              >
                <Trans ns="aboutUs" i18nKey="ourCommitments" />
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[38%] text-lg sm:text-xl md:text-2xl lg:text-[24px] text-center mt-8 xs:mt-16 sm:mt-12 md:mt-16 lg:mt-[100px] px-4 sm:px-8">
          <p>
            <Trans ns="aboutUs" i18nKey="certifiedProfessionals" />
          </p>
          <div
            className="border rounded-lg sm:rounded-xl lg:rounded-[20px] inline-block px-6 py-3 sm:px-8 sm:py-4 lg:px-[15px] lg:py-[15px] mt-8 sm:mt-10 lg:mt-[50px] text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
            onClick={() => nav("/contact")}
          >
            <Trans ns="aboutUs" i18nKey="getIn" />
          </div>
        </div>
      </div>
      <div className="sm:mt-32 ">
        <Footer />
      </div>
    </div>
  );
}

export default About;
