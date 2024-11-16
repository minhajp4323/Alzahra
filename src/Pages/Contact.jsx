import React from "react";
import ContactForm from "../Components/ContactForm";
import GetInTouch from "../assets/Get in Touch/GetInTouch.png";
import Mail from "../assets/Get in Touch/Mail.svg";
import Phone from "../assets/Get in Touch/Phone.svg";
import GoogleForm from "../Components/GoogleFrom";
import Footer from "../Components/Footer";
import TestForm from "../Components/TestForm";

function Contact() {
  return (
    <div className="flex flex-col  ">
      <header className="mb-4 md:mb-8 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-[#C05D1B] text-[32px] md:text-[54px] font-extrabold">
          Get in Touch:
        </h1>
        <h2 className="text-[#5D5D5D] text-[18px] md:text-[24px] font-bold">
          Your Journey Awaits
        </h2>
      </header>

      <section
        className="relative w-full flex justify-center  items-center"
        aria-labelledby="contact-info"
      >
        <div
          className="flex justify-center items-center ml-0 xs:ml-0 relative md:pt-20 sm:pt-5 mx-0 md:mx-[150px] bg-cover bg-center bg-no-repeat rounded-[20px] w-full md:w-[calc(100%-300px)]"
          style={{
            backgroundImage: `url(${GetInTouch})`,
            height: "737px",
          }}
        >
          {/* Black background div */}
          <div className="absolute bg-transparent border-[3px] border-[#B0876B] md:p-[59px] xs:p-[20px] sm:ml-[5%]  lg:ml-[13%] md:ml-[70px] -mb-7 xs:ml-[8%] shadow-md xs:h-[80.2%] sm:h-[80.8%]  md:h-[80.2%] lg:h-[80.2%] md:w-[350px] sm:w-[90%] xs:w-[85%] text-center flex items-center justify-center bottom-0 left-0"></div>
          <div className="absolute bg-[#171717] bg-opacity-70 md:p-[59px] xs:p-[20px] lg:ml-[10%] md:ml-[35px] xs:ml-0 shadow-md xs:h-[72.8%] sm:h-[72.8%]  md:h-[72.1%] lg:h-[72.2%] md:w-[420px] xs:w-screen text-center backdrop-blur-[10px] flex items-center justify-center bottom-0 left-0">
            <p className="text-white text-[24px] text-left leading-relaxed">
              Our commitment goes beyond just travel; we aim to make your
              journey to Makkah and Madinah a seamless, comfortable, & memorable
              experience.
            </p>
          </div>
        </div>
      </section>

      <section
        className="text-center mt-4 md:mt-8 w-full mb-14"
        aria-labelledby="spiritual-adventure"
      >
        <p className="text-[16px] md:text-[24px] mt-[50px] text-[#5D5D5D] px-4">
          Your spiritual adventure and more start with just a message!
        </p>
      </section>

      <section aria-labelledby="contact-form">
        {/* <ContactForm /> */}
        {/* <GoogleForm /> */}
        <TestForm/>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
