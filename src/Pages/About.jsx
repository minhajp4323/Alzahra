import { useNavigate } from "react-router-dom";
import MasjidBG from "../assets/About Us/Masjid.png";
import Stars from "../assets/About Us/Stars.png";
import Footer from "../Components/Footer";
import { Trans, useTranslation } from "react-i18next";

function About() {
  const nav = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="text-white flex flex-col items-center md:mt-[20px] sm:mt-[50px] xs:mt-[20px]">
      <div className="max-w-[1520px]  ">
        <div className="items-center flex flex-col mb-12">
          <div
            className="relative w-full bg-cover bg-center text-center mb-12"
            style={{
              backgroundImage: `url(${Stars})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center px-4 sm:px-8 md:px-16 lg:px-36 xs:pt-[80px] md:pt-[80px]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight sm:leading-snug md:leading-normal lg:leading-tight xl:leading-snug">
                <Trans ns="aboutUs" i18nKey="yourTrusted" />
              </h1>

              <p
                className={`mt-4 text-lg sm:text-xl md:text-2xl lg:text-[24px] font-light leading-relaxed mb-8`}
              >
                <Trans ns="aboutUs" i18nKey="description" />
              </p>
            </div>

            <div
              className="flex justify-center items-center relative mx-auto md:pt-20 sm:pt-5 bg-cover bg-center bg-no-repeat rounded-[20px] w-full md:w-[calc(100%-300px)]"
              style={{
                backgroundImage: `url(${MasjidBG})`,
                height: "800px",
              }}
            >
              {/* Black background div */}
              <div className="absolute bg-transparent border-[3px] border-white xs:ml-[8%]   md:p-[59px] xs:p-[20px] sm:ml-[5%] lg:ml-[13%] md:ml-[15%] mb-[-30px] mx-auto shadow-md xs:h-[74.5%] sm:h-[74.5%] md:h-[74.5%] lg:h-[74.5%] md:w-[350px] sm:w-[90%] xs:w-[85%] text-center flex items-center justify-center bottom-0 left-0"></div>
              <div className="absolute bg-[#171717] bg-opacity-70 md:p-[59px] xs:p-[20px] ml-[10%] xs:ml-[0%] md:ml-[10%]  mx-auto shadow-md xs:h-[67.4%] lg:h-[66.8%] md:w-[420px] xs:w-screen text-center backdrop-blur-[10px] flex items-center justify-center bottom-0 left-0">
                <p
                  className={`text-white text-[24px] leading-relaxed ${
                    currentLang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  <Trans ns="aboutUs" i18nKey="ourCommitments" />
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[38%] text-lg sm:text-xl md:text-2xl lg:text-[24px] text-center mt-16 mb-16 px-4 sm:px-8">
            <p className="mb-8">
              <Trans ns="aboutUs" i18nKey="certifiedProfessionals" />
            </p>
            <div
              className="border rounded-lg sm:rounded-xl lg:rounded-[20px] inline-block px-6 py-3 sm:px-8 sm:py-4 lg:px-[15px] lg:py-[15px] mt-8 sm:mt-10 lg:mt-[50px] text-base sm:text-lg md:text-xl lg:text-2xl font-medium cursor-pointer"
              onClick={() => nav("/contact")}
            >
              <Trans ns="aboutUs" i18nKey="getIn" />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}

export default About;
