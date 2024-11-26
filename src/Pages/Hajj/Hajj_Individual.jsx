import HajjIndividual from "../../assets/Hajj/HajjIcon.png";
import Visa from "../../assets/Hajj/Visa.png";
import RoundTrip from "../../assets/Hajj/RoundTrip.png";
import Airport from "../../assets/Hajj/Airport.png";
import ScholarlyGuide from "../../assets/Hajj/ScholarlyGuide.png";
import Visits from "../../assets/Hajj/Visits.png";
import Footer from "../../Components/Footer";
import { Trans, useTranslation } from "react-i18next";

function Hajj_Individual() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col text-center items-center mb-20 md:mb-28 lg:mb-[90px] px-4"
        dir={currentLang === "ar" ? "rtl" : "ltr"}
      >
        <div className="mb-16 lg:mb-[60px] -ml-2 md:-ml-4 lg:-ml-8">
          <div
            className={`text-start flex flex-col md:flex-row items-center justify-center text-[#C05D1B] font-bold xs:mb-1 md:mb-0 `}
          >
            <img
              src={HajjIndividual}
              alt="Individual Icon"
              className={`w-[200px] md:w-[280px] lg:w-[380px] -mb-14 md:mb-0 md:-mr-20 lg:-mr-28 z-10  ${
                currentLang === "ar" ? " md:mr-0 lg:-ml-24 " : ""
              }`}
            />
            <div
              className={`text-[48px] md:text-[80px] lg:text-[124px] leading-tight flex flex-col justify-center mt-2 md:mt-0  ${
                currentLang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h1 className="m-0">
                <Trans ns="HajjIndividual" i18nKey="Individual" />
              </h1>
              <h1 className="m-0 -mt-2 md:-mt-5 lg:-mt-10">
                <Trans ns="HajjIndividual" i18nKey="Package" />
              </h1>
            </div>
          </div>

          <div className="md:text-start sm:text-center text-[#7D7D7D] text-[20px] md:text-[24px] lg:text-[30px] mt-4 md:-mt-8 lg:-mt-12 ml-0 md:ml-24 lg:ml-[272px] font-bold">
            <Trans ns="HajjIndividual" i18nKey="Experience" />
          </div>
        </div>

        <div className="text-[16px] md:text-[20px] lg:text-[24px] w-full md:w-[600px] lg:w-[859px] text-[#5D5D5D] mb-[100px]">
          <Trans ns="HajjIndividual" i18nKey="description" />
        </div>
        <div className="">
          <p className="text-[30px] text-[#7D7D7D] font-bold">
            <Trans ns="HajjIndividual" i18nKey="Included" />
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start text-lg px-4 md:px-12 lg:px-[153px] mb-12 md:mb-20 lg:mb-[132px]"
        dir={currentLang === "ar" ? "rtl" : "ltr"}
      >
        <div
          className={`grid grid-cols-4 gap-4 mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          } `}
        >
          <img src={Visa} alt="Visa Processing" className="col-span-1 w-full" />
          <div className={`col-span-3`}>
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              01
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="HajjIndividual" i18nKey="Visa" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="HajjIndividual" i18nKey="VisaDes" />
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-4 gap-4 mb-10 ${
            currentLang === "ar" ? "text-right" : "text-left"
          } `}
        >
          <img src={RoundTrip} alt="Round-trip" className="col-span-1 w-full" />
          <div className={`col-span-3`}>
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              02
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="HajjIndividual" i18nKey="RoundTrip" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="HajjIndividual" i18nKey="RoundTripDes" />
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
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              03
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="HajjIndividual" i18nKey="Airport" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="HajjIndividual" i18nKey="AirportDes" />
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
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              04
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="HajjIndividual" i18nKey="Guide" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="HajjIndividual" i18nKey="GuideDes" />
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
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              05
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              <Trans ns="HajjIndividual" i18nKey="Visits" />
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              <Trans ns="HajjIndividual" i18nKey="VisitsDes" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center  h-[100%]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSei4SV2eA9B35TKt58qyXuIqbz2JDgBniv2W8VBmdconem6RQ/viewform?embedded=true"
          width="640"
          height="1150"
        >
          Loading…
        </iframe>
      </div>

      <Footer />
    </div>
  );
}

export default Hajj_Individual;
