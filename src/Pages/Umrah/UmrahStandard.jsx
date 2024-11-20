import HajjGroup from "../../assets/Hajj/HajjGroup.png";
import Visa from "../../assets/Hajj/Visa.png";
import RoundTrip from "../../assets/Hajj/RoundTrip.png";
import Airport from "../../assets/Hajj/Airport.png";
import ScholarlyGuide from "../../assets/Hajj/ScholarlyGuide.png";
import Visits from "../../assets/Hajj/Visits.png";
import PersonalCare from "../../assets/Hajj/PersonalCare.png";
// import Contact from "../../Components/ContactForm";
import Footer from "../../Components/Footer";
import { Trans, useTranslation } from "react-i18next";

function Umrah_Standard() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-center items-center mb-20 md:mb-28 lg:mb-[90px] px-4">
        <div className="mb-16 lg:mb-[60px] -ml-2 md:-ml-4 lg:-ml-8">
          <div
            className="text-start flex flex-col md:flex-row items-center text-[#C05D1B] font-bold xs:mb-10 md:mb-0 "
            style={{ fontFamily: "Jeko, sans-serif" }}
          >
            <img
              src={HajjGroup}
              alt="Individual Icon"
              className="w-[200px] md:w-[280px] lg:w-[380px] -mb-20 md:mb-0 md:-mr-20 lg:-mr-28 z-10"
            />
            <div
              className={`text-[48px] md:text-[80px] lg:text-[124px] leading-tight flex flex-col justify-center mt-2 md:mt-0 ${
                currentLang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h1 className="m-0">
                <Trans ns="STDGroupUmrah" i18nKey="Standard" />
              </h1>

              <h1 className="m-0 mt-2 md:-mt-5 lg:-mt-10">
                <Trans ns="STDGroupUmrah" i18nKey="Group" />
              </h1>
              <h1 className="m-0 mt-2 md:-mt-5 lg:-mt-10">
                <Trans ns="STDGroupUmrah" i18nKey="Package" />
              </h1>
            </div>
          </div>
        </div>

        <div className="text-[16px] md:text-[20px] lg:text-[24px] w-full md:w-[600px] lg:w-[859px] text-[#5D5D5D] mb-[100px]">
          <Trans ns="STDGroupUmrah" i18nKey="ourStandard" />
        </div>
        <div className="">
          <p className="text-[30px] text-[#7D7D7D] font-bold">
            <Trans ns="STDGroupUmrah" i18nKey="Inculudes" />
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start text-lg px-4 md:px-12 lg:px-[153px] mb-12 md:mb-20 lg:mb-[132px]">
        <div
          className={`grid grid-cols-4 gap-4 mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          } `}
        >
          <img src={Visa} alt="Visa Processing" className="col-span-1 w-full" />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              01
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="STDGroupUmrah" i18nKey="visa" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="STDGroupUmrah" i18nKey="visaDes" />
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-4 gap-4 mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          } `}
        >
          <img src={RoundTrip} alt="Round-trip" className="col-span-1 w-full" />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              02
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="STDGroupUmrah" i18nKey="roundTrip" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="STDGroupUmrah" i18nKey="roundTripDes" />
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-4 gap-4 mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          } `}
        >
          <img src={Airport} alt="Round-trip" className="col-span-1 w-full" />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              03
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="STDGroupUmrah" i18nKey="airport" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="STDGroupUmrah" i18nKey="airportDes" />
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-4 gap-4 mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          } `}
        >
          <img
            src={ScholarlyGuide}
            alt="Round-trip"
            className="col-span-1 w-full"
          />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              04
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="STDGroupUmrah" i18nKey="guide" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="STDGroupUmrah" i18nKey="guideDes" />
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-4 gap-4 mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          } `}
        >
          <img
            src={PersonalCare}
            alt="Round-trip"
            className="col-span-1 w-full"
          />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              05
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="STDGroupUmrah" i18nKey="personal" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="STDGroupUmrah" i18nKey="personalDes" />
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-4 gap-4 mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          } `}
        >
          <img src={Visits} alt="Round-trip" className="col-span-1 w-full" />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              06
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="STDGroupUmrah" i18nKey="visits" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="STDGroupUmrah" i18nKey="visitsDes" />
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex justify-center">
        <div className="text-[16px] md:text-[20px] lg:text-[24px] w-full md:w-[600px] lg:w-[859px] text-[#5D5D5D] mb-[100px] mx-auto">
          <Trans ns="STDGroupUmrah" i18nKey="enjoy" />
        </div>
      </div>
      <div className="flex justify-center  h-[100%]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSefoESkL9nSq8SrJ_FqKWCFCEKm1r55VwT1LhIcfd1FhCMEBQ/viewform?embedded=true"
          width="640"
          height="1150"
        >
          Loading…
        </iframe>
      </div>

      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Umrah_Standard;
