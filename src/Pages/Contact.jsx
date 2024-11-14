import React from "react";
import ContactForm from "../Components/ContactForm";
import GetInTouch from "../assets/Get in Touch/GetInTouch.png";
import Mail from "../assets/Get in Touch/Mail.svg";
import Phone from "../assets/Get in Touch/Phone.svg";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <main className="flex flex-col p-4 md:p-8 max-w-[1440px] mx-auto items-center">
      <header className="mb-4 md:mb-8 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-[#C05D1B] text-[32px] md:text-[54px] font-extrabold">
          Get in Touch:
        </h1>
        <h2 className="text-[#5D5D5D] text-[18px] md:text-[24px] font-bold">
          Your Journey Awaits
        </h2>
      </header>

      <section className="relative w-full flex justify-center m-[100px]" aria-labelledby="contact-info">
        <div className="relative w-full md:w-[1208px] overflow-hidden">
          <img
            src={GetInTouch}
            alt="Get in touch with our team for assistance with your journey"
            className="w-full md:w-[1208px] h-[400px] md:h-auto object-cover md:object-contain rounded-lg"
            style={{ objectPosition: "50% 35%" }}
          />

          <div className="absolute bottom-0 left-0 md:left-[60px] w-full md:w-auto">
            <div className="hidden md:block absolute top-[-16px] left-[20px] border-[3px] border-[#B0876B] w-[calc(100%-45px)] h-[calc(100%+84px)]"></div>

            <div
              className="relative bg-[#171717] backdrop-blur-[21px] bg-opacity-[70%] text-white 
                          p-4 md:p-[60px] 
                          h-auto md:h-[531px] 
                          w-full md:w-[420px] 
                          text-[16px] md:text-[24px]"
            >
              <p>
                We're here to help! Reach out for inquiries or assistance
                regarding your Hajj or Umrah journey, as well as our other
                services, including Business Consultancy, Education Services,
                Tourism Services, Medical Services, and Visa & Government
                Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-4 md:mt-8 w-full mb-14" aria-labelledby="spiritual-adventure">
        <p className="text-[16px] md:text-[24px] text-[#5D5D5D] px-4">
          Your spiritual adventure and more start with just a message!
        </p>
      </section>

      <section aria-labelledby="contact-form">
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}

export default Contact;
