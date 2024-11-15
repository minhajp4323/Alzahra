import MasjidBG from "../assets/About Us/Masjid.png";
import Stars from "../assets/About Us/Stars.svg";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="text-white md:mt-[150px] sm:mt-[100px] xs:mt-[100px]">
      <div className="items-center flex justify-center flex-col">
        <div
          className="relative w-[100%] bg-cover bg-center  text-center "
          style={{
            backgroundImage: `url(${Stars})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center px-4 sm:px-8 md:px-16 lg:px-36">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight sm:leading-snug md:leading-normal lg:leading-tight xl:leading-snug">
              Your Trusted Partner <br /> for a Blessed Journey
            </h1>

            <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-[24px] font-light leading-relaxed sm:px-4 md:px-12 lg:px-24 xl:px-36">
              Alzahra Hajj and Umrah Services, part of the renowned Alzahra
              Group, is dedicated to providing exceptional, spiritually
              enriching pilgrimage experiences for Muslims around the world.
            </p>
          </div>

          <div
            className="flex justify-center items-center relative md:pt-20 sm:pt-5 mx-0 md:mx-[150px] bg-cover bg-center bg-no-repeat rounded-[20px] w-full md:w-[calc(100%-300px)]"
            style={{
              backgroundImage: `url(${MasjidBG})`,
              height: "110vh", // Adjust height as necessary
            }}
          >
            {/* Black background div */}
            <div className="absolute border-2 border-white bg-transparent shadow-md md:p-[55px] xs:p-[15px] xs:ml-[320px] h-[75%] md:w-[380px] xs:w-[320px] flex items-center justify-center -bottom-[32px] lg:-ml-[14%] md:ml-[340px]  transform -translate-x-1/2"></div>
            <div className="absolute bg-[#171717] bg-opacity-70 md:p-[59px] xs:p-[20px] lg:ml-[10%] md:ml-[110px] shadow-md xs:h-[66.8%] sm:h-[66.8%] avg:h-[66.8%] md:h-[50.3%] lg:h-[67.3%] md:w-[420px] xs:w-screen text-center backdrop-blur-[10px] flex items-center justify-center bottom-0 left-0">
              <p className="text-white text-[24px] text-left leading-relaxed">
                Our commitment goes beyond just travel; we aim to make your
                journey to Makkah and Madinah a seamless, comfortable, &
                memorable experience.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[38%] text-lg sm:text-xl md:text-2xl lg:text-[24px] text-center mt-8  sm:mt-12 md:mt-16 lg:mt-[100px] px-4 sm:px-8">
          <p>
            With a team of certified professionals and scholars well-versed in
            Islamic teachings, we’re honored to support you every step of the
            way, from visa processing to guided religious insights.
          </p>
          <div className="border rounded-lg sm:rounded-xl lg:rounded-[20px] inline-block px-6 py-3 sm:px-8 sm:py-4 lg:px-[15px] lg:py-[15px] mt-8 sm:mt-10 lg:mt-[50px] text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
            Get in touch
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
