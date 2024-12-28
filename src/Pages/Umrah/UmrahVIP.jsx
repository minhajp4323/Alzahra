import HajjGroup from "../../assets/Hajj/HajjGroup.png";
import Visa from "../../assets/Hajj/Visa.png";
import RoundTrip from "../../assets/Hajj/RoundTrip.png";
import Airport from "../../assets/Hajj/Airport.png";
import ScholarlyGuide from "../../assets/Hajj/ScholarlyGuide.png";
import Visits from "../../assets/Hajj/Visits.png";
import PersonalCare from "../../assets/Hajj/PersonalCare.png";
import FullSupport from "../../assets/Hajj/FullSupport.png";
import Footer from "../../Components/Footer";
import { Trans, useTranslation } from "react-i18next";

function Umrah_VIP() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className="flex flex-col">
      <div className="max-w-[1520px] w-full flex flex-col items-center justify-center mx-auto">
        <div
          className="flex flex-col text-center items-center mb-20 md:mb-28 lg:mb-[90px] px-4"
          dir={currentLang === "ar" ? "rtl" : "ltr"}
        >
          <div className="mb-16 lg:mb-[60px] -ml-2 md:-ml-4 lg:-ml-8">
            <div
              className={`text-start flex flex-col md:flex-row items-center text-[#C05D1B] font-bold xs:mb-1 md:mb-0`}
            >
              <img
                src={HajjGroup}
                alt="Individual Icon"
                className={`w-[200px] md:w-[280px] lg:w-[380px] -mb-14 md:mb-0 md:-mr-20 lg:-mr-28 z-10  ${
                  currentLang === "ar" ? " md:mr-0 lg:-ml-24 " : ""
                }`}
              />
              <div
                className={`text-[48px] md:text-[80px] lg:text-[124px] leading-tight flex flex-col justify-center mt-2 md:mt-0 ${
                  currentLang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <h1 className="m-0">
                  {" "}
                  <Trans ns="UmrahIndiVIP" i18nKey="Individual" />
                </h1>
                <h1 className="m-0 -mt-2 md:-mt-5 lg:-mt-10">
                  {" "}
                  <Trans ns="UmrahIndiVIP" i18nKey="VIP" />
                </h1>
                <h1 className="m-0 -mt-2 md:-mt-5 lg:-mt-10">
                  <Trans ns="UmrahIndiVIP" i18nKey="Package" />
                </h1>
              </div>
            </div>
          </div>

          <div className="text-[16px] md:text-[20px] lg:text-[24px] w-full md:w-[600px] lg:w-[859px] text-[#5D5D5D] mb-[100px]">
            <Trans ns="UmrahIndiVIP" i18nKey="description" />
          </div>
          <div className="">
            <p className="text-[30px] text-[#7D7D7D] font-bold">
              <Trans ns="UmrahIndiVIP" i18nKey="Included" />
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start text-lg px-4 md:px-12 lg:px-[153px] mb-12 md:mb-20 lg:mb-[50px]"
          dir={currentLang === "ar" ? "rtl" : "ltr"}
        >
          <div
            className={`grid grid-cols-4 gap-4 mb-10 ${
              currentLang === "ar" ? "text-right" : "text-left"
            } `}
          >
            <img
              src={Visa}
              alt="Visa Processing"
              className="col-span-1 w-full"
            />
            <div className={`col-span-3`}>
              <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-bold mb-2 md:mb-4 lg:mb-[22px]">
                01
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-bold">
                <Trans ns="UmrahIndiVIP" i18nKey="visa" />
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
                <Trans ns="UmrahIndiVIP" i18nKey="visaDes" />
              </p>
            </div>
          </div>

          <div
            className={`grid grid-cols-4 gap-4 mb-10 ${
              currentLang === "ar" ? "text-right" : "text-left"
            } `}
          >
            <img
              src={RoundTrip}
              alt="Round-trip"
              className="col-span-1 w-full"
            />
            <div className={`col-span-3`}>
              <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-bold mb-2 md:mb-4 lg:mb-[22px]">
                02
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-bold">
                <Trans ns="UmrahIndiVIP" i18nKey="roundTrip" />
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
                <Trans ns="UmrahIndiVIP" i18nKey="roundTripDes" />
              </p>
            </div>
          </div>
          <div
            className={`grid grid-cols-4 gap-4 mb-10 ${
              currentLang === "ar" ? "text-right" : "text-left"
            } `}
          >
            <img src={Airport} alt="Round-trip" className="col-span-1 w-full" />
            <div className={`col-span-3`}>
              <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-bold mb-2 md:mb-4 lg:mb-[22px]">
                03
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-bold">
                <Trans ns="UmrahIndiVIP" i18nKey="airport" />
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
                <Trans ns="UmrahIndiVIP" i18nKey="airportDes" />
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
            <div className={`col-span-3`}>
              <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-bold mb-2 md:mb-4 lg:mb-[22px]">
                04
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-bold">
                <Trans ns="UmrahIndiVIP" i18nKey="guide" />
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
                <Trans ns="UmrahIndiVIP" i18nKey="guideDes" />
              </p>
            </div>
          </div>
          <div
            className={`grid grid-cols-4 gap-4 mb-10 ${
              currentLang === "ar" ? "text-right" : "text-left"
            } `}
          >
            <img src={Visits} alt="Round-trip" className="col-span-1 w-full" />
            <div className={`col-span-3`}>
              <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-bold mb-2 md:mb-4 lg:mb-[22px]">
                05
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-bold">
                <Trans ns="UmrahIndiVIP" i18nKey="visits" />
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
                <Trans ns="UmrahIndiVIP" i18nKey="visitsDes" />
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
            <div className={`col-span-3`}>
              <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-bold mb-2 md:mb-4 lg:mb-[22px]">
                06
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-bold">
                <Trans ns="UmrahIndiVIP" i18nKey="personal" />
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
                <Trans ns="UmrahIndiVIP" i18nKey="personalDes" />
              </p>
            </div>
          </div>
          <div
            className={`grid grid-cols-4 gap-4 mb-10 ${
              currentLang === "ar" ? "text-right" : "text-left"
            } `}
          >
            <img
              src={FullSupport}
              alt="Round-trip"
              className="col-span-1 w-full"
            />
            <div className={`col-span-3`}>
              <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-bold mb-2 md:mb-4 lg:mb-[22px]">
                07
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-bold">
                <Trans ns="UmrahIndiVIP" i18nKey="fullSupport" />
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
                <Trans ns="UmrahIndiVIP" i18nKey="fullSupportDes" />
              </p>
            </div>
          </div>
        </div>

        <div className="text-center flex justify-center">
          <div className="text-[16px] md:text-[20px] lg:text-[24px] w-full md:w-[600px] lg:w-[859px] text-[#5D5D5D] mb-[100px] mx-auto">
            <Trans ns="UmrahIndiVIP" i18nKey="lastDes" />
          </div>
        </div>
        <div className="flex justify-center  h-[100%]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeVJUsJ4IU_-SG5_4g47HjQJuSedMonhmgfrVoEwb5fw6ydig/viewform?embedded=true"
            width="640"
            height="1200"
          >
            Loading…
          </iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Umrah_VIP;
