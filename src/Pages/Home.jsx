import kaba from "../assets/K'aba.png";
import banner from "../assets/Desert BG.svg";
import bannerMobile from "../assets/MobileBanner.svg";
import BG from "../assets/Part 2 BG.svg";
import Corner from "../assets/Corner Vector.svg";
import prayer from "../assets/Praying.svg";
import Pilgrims from "../assets/Pilgrims.svg";
// import { Dropdown } from "flowbite-react";
import Footer from "../Components/Footer";
import Features from "../Components/Features";

function Home() {
  return (
    <div
      className="Home"
      style={{ fontFamily: "Jeko, sans-serif", zIndex: 9999 }}
    >
      <div className="First xs:mb-[18%] lg:mb-[18%] md:mb-[19%] sm:mb-[29%] mt-5">
        <div className="flex flex-col text-center gap-4 md:-mb-10 md:mt-20 xs:mt-40 xs:-mb-40">
          <h1 className="font-bold text-[#C05D1B] text-4xl md:text-5xl lg:text-5xl">
            <span className="block md:inline">Your Journey,</span> Our Honor
          </h1>

          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl">
            <span className="block md:inline">
              Embrace a seamless Hajj Umrah
            </span>{" "}
            Experience
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-between min-h-[60vh] px-[50px]">
          <img
            src={banner}
            alt="Desert Banner"
            className="absolute bottom-0 z-0 hidden sm:block w-[92%] max-w-[1412px]"
            style={{ height: "auto" }}
          />
          <img
            src={bannerMobile}
            alt="Desert Banner Mobile"
            className="absolute bottom-0 z-0 sm:hidden w-[92%] max-w-[700px]"
            style={{ height: "auto" }}
          />
          {/* <img
            src={kaba}
            alt="Kaaba"
            className="absolute bottom-0 z-10 max-w-[35%] sm:max-w-[35%] md:max-w-[35%] -ml-2"
          /> */}

          <div className="mt-auto absolute md:-bottom-9 sm:-bottom-9 xs:-bottom-6  left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-8 md:gap-14 bg-white rounded-2xl p-3 sm:p-5 md:p-6 shadow-[0_4px_40px_#EDB480] justify-center items-center z-50 w-auto max-w-full ">
            <div className="text-xs sm:text-sm md:text-lg">HAJJ</div>
            <div className="border-l-2 border-gray-300 h-[20px] sm:h-[30px] mx-1 sm:mx-2"></div>
            <div className="text-xs sm:text-sm md:text-lg">UMRAH</div>
            <div className="border-l-2 border-gray-300 h-[20px] sm:h-[30px] mx-1 sm:mx-2"></div>
            <div className="text-xs sm:text-sm md:text-lg">SERVICES</div>
            {/* <Dropdown label="HAJJ" size="xl">
              <Dropdown.Item className="text-[16px] sm:text-[20px] md:text-[24px] flex items-center">
                Option 1
              </Dropdown.Item>
            </Dropdown>
            <div className="border-l-2 border-gray-300 h-[30px] mx-2"></div>
            <Dropdown label="UMRAH" size="xl">
              <Dropdown.Item className="text-[16px] sm:text-[20px] md:text-[24px] flex items-center">
                Option 2
              </Dropdown.Item>
            </Dropdown>
            <div className="border-l-2 border-gray-300 h-[30px] mx-2"></div>
            <Dropdown label="SERVICES" size="xl">
              <Dropdown.Item className="text-[16px] sm:text-[20px] md:text-[24px] flex items-center">
                Option 3
              </Dropdown.Item>
            </Dropdown> */}
          </div>
        </div>
      </div>

      <div className="Second mb-6">
        <div
          className="relative mt-30 bg-no-repeat bg-cover rounded-tr-[70px] h-[450px] xl:mr-[10%] lg:mr-[10%] md:mr-[10%] xs:mr-0 mb-0 "
          style={{
            backgroundImage: `url(${BG})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: 10,
          }}
        >
          <div
            className="absolute -top-8 -right-8 hidden lg:block xl:block"
            style={{ zIndex: -20 }}
          >
            <img src={Corner} alt="Corner Decoration" />
          </div>

          <img
            src={prayer}
            alt="prayer"
            className="absolute xs:bottom-0 sm:bottom-0 md:bottom-0 lg:bottom-0 xl:bottom-0 right-0 h-[530px] sm:h-[400px] xs:h-[350px] md:h-[450px] lg:h-[600px]"
          />

          <div className="xs:w-screen md:w-[400px] sm:w-[400px] relative h-[100%] xl:ml-28 lg:ml-20 md:ml-16 bg-slate-100 backdrop-blur-md opacity-70 p-12 text-xl sm:ml-0 sm:text-base md:text-lg lg:text-xl z-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-4">
              Why Choose <b>Alzahra Hajj and Umrah</b> Services..?
            </h3>
            <p className="text-gray-700">
              Alzahra is dedicated to making your pilgrimage a seamless and
              deeply spiritual experience. Here&lsquo;s why we&rsquo;re trusted
              by pilgrims worldwide:
            </p>

            <div className="bg-white p-2 rounded-md inline-flex items-center gap-2 mt-8 opacity-100">
              <img src={Pilgrims} alt="Happy Pilgrims" className="w-6 h-6" />
              <div>1000+ happy pilgrims</div>
            </div>
          </div>

          <div className="absolute h-[110%] xs:w-[calc(100vw-12%)] md:w-[350px] sm:w-[350px] xl:ml-28 lg:ml-20 md:ml-16 border-[2.5px] -mt-5 border-[#894a1b] top-0 left-6 pointer-events-none"></div>
        </div>
      </div>

      <Features />

      <div className="flex justify-center items-center text-center mt-20 w-full h-auto md:h-[250px] px-4 md:px-0">
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%]">
          <p className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed">
            At <br />
            <b>Alzahra Hajj and Umrah Services</b>, <br />
            we are committed to helping you create lasting memories of faith and
            spirituality. With years of experience and expertise in the
            pilgrimage field, our team combines professional service with deep
            respect for Islamic values, making your journey one of comfort,
            ease, and devotion.
          </p>
          <div className="border-2 border-black rounded-[20px] p-2 sm:p-3 md:p-3 text-sm sm:text-base md:text-[18px] inline-block mt-6 md:mt-10">
            Choose Alzahra as your partner in faith
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
