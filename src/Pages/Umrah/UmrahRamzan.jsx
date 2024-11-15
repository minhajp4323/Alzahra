import HajjGroup from "../../assets/Hajj/HajjGroup.png";
import Visa from "../../assets/Hajj/Visa.png";
import RoundTrip from "../../assets/Hajj/RoundTrip.png";
import Airport from "../../assets/Hajj/Airport.png";
import ScholarlyGuide from "../../assets/Hajj/ScholarlyGuide.png";
import PersonalCare from "../../assets/Hajj/PersonalCare.png";
import Calender from "../../assets/Hajj/Calender.png";
import Contact from "../../Components/ContactForm";
import Footer from "../../Components/Footer";

function Umrah_Ramzan() {
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
            <div className="text-[48px] md:text-[80px] lg:text-[124px] leading-tight flex flex-col justify-center mt-2 md:mt-0">
              <h1 className="m-0">Ramzan</h1>
              <h1 className="m-0 -mt-2 md:-mt-5 lg:-mt-10">Package</h1>
            </div>
          </div>

          <div className="text-[16px] md:text-[20px] lg:text-[24px] w-full md:w-[600px] lg:w-[859px] text-[#5D5D5D] mb-[100px]">
            Experience the blessings of Ramazan in Makkah <br /> and Madinah
            with our special packages:
          </div>
          <div className="flex gap-4 justify-center items-center px-4">
            <div className="flex items-center justify-center w-full sm:w-1/3 md:w-auto flex-wrap-reverse">
              <p className="text-center text-[16px] sm:text-[20px] md:text-[30px] mr-[14px]">
                First <br /> 10 Days
              </p>
              <img
                src={Calender}
                alt="Sample Image"
                className="w-[40px] sm:w-[50px] md:w-[85px]"
              />
            </div>
            <div className="flex items-center justify-center w-full sm:w-1/3 md:w-auto flex-wrap-reverse">
              <p className="text-center text-[16px] sm:text-[20px] md:text-[30px] mr-[14px]">
                Second <br /> 10 Days
              </p>
              <img
                src={Calender}
                alt="Sample Image"
                className="w-[40px] sm:w-[50px] md:w-[85px]"
              />
            </div>
            <div className="flex items-center justify-center w-full sm:w-1/3 md:w-auto flex-wrap-reverse">
              <p className="text-center text-[16px] sm:text-[20px] md:text-[30px] mr-[14px]">
                Last <br /> 10 Days
              </p>
              <img
                src={Calender}
                alt="Sample Image"
                className="w-[40px] sm:w-[50px] md:w-[85px]"
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-[30px] text-[#7D7D7D] font-bold">
            What’s Included in Our Standard Group Package..?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start text-lg px-4 md:px-12 lg:px-[153px] mb-12 md:mb-20 lg:mb-[132px]">
        <div className="grid grid-cols-4 gap-4 mb-10">
          <img src={Visa} alt="Visa Processing" className="col-span-1 w-full" />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              01
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              Visa Processing
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              We handle the visa process so each group member can focus on their
              journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-10">
          <img src={RoundTrip} alt="Round-trip" className="col-span-1 w-full" />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              02
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              Round-Trip Airfare
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              Travel easily with round-trip tickets included in the package for
              a worry-free experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-10">
          <img src={Airport} alt="Round-trip" className="col-span-1 w-full" />
          <div className="col-span-3">
            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-[#B57439] font-extrabold mb-2 md:mb-4 lg:mb-[22px]">
              03
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-2 md:mb-4 text-[#5D5D5D] font-extrabold">
              Airport Pickup & Drop-Off
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              Arrive and depart with ease through our reliable airport
              transfers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-10">
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
              Dedicated Scholarly Guide
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              A knowledgeable guide will accompany your group, offering
              spiritual support and insights.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-10 ">
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
              Personal Care and Support
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#5D5D5D]">
              We provide personalized assistance to ensure each group member’s
              comfort.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex justify-center">
        <div className="text-[16px] md:text-[20px] lg:text-[24px] w-full md:w-[600px] lg:w-[859px] text-[#5D5D5D] mb-[100px] mx-auto">
          & smart facilities for a peaceful stay during this holy month.
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default Umrah_Ramzan;
