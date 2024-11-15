import Licensed from "../assets/Lisenced.png";
import Accommodation from "../assets/Accomedation.png";
import Room from "../assets/Room.png";
import Transparent from "../assets/Transparent.png";
import Arrangement from "../assets/Arrangements.png";
import CustomerSupport from "../assets/CustomerSupport.png";
import Guidance from "../assets/Guidance.png";
import Packages from "../assets/Packages.png";
import Services from "../assets/Services.png";
import Airport from "../assets/Airport.png";
import Crowd from "../assets/Crowd.svg";

function Features() {
  return (
    <div className="w-[90%] sm:w-[85%] md:w-[80%] flex mx-auto ">
      <div className="feature mx-[5%] sm:mx-[10%] md:mt-0 xs:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-l-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pr-10 md:pt-20">
          <div className="flex justify-center md:justify-end w-full">
            <img
              srcSet={`${Licensed} 320w, ${Licensed} 480w, ${Licensed} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Licensed}
              alt="Licensed"
              className="md:w-[220px] lg:w-[300px] object-cover mt-4 md:mt-0 lg:mt-0 md:absolute md:bottom-0 md:left-28"
            />
          </div>
          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              01
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Licensed and Certified
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              Our authorized team streamlines visa processing and ensures all
              travel documentation meets official requirements, so you can focus
              on your spiritual journey with complete peace of mind.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 h-[20%] border-l-2 border-[#894A1B]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-r-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pt-28">
          <div className="absolute left-0 top-0 h-1/5 border-l-2 border-[#894A1B]"></div>
          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6 md:ml-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              02
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Prime Accommodations Near the Harams
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              Experience the convenience of staying near the Holy Harams in
              Makkah and Madinah. Our accommodations come in various options to
              suit groups, families, and individuals, each designed to provide
              comfort and accessibility.
            </p>
          </div>
          <div className="flex justify-center md:justify-start md:mt-10 w-full">
            <img
              srcSet={`${Accommodation} 320w, ${Accommodation} 480w, ${Accommodation} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Accommodation}
              alt="Accommodation"
              className="hidden sm:block w-[100px] sm:w-[150px] md:w-[220px] lg:w-[300px] object-cover mt-4 md:mt-0 lg:mt-0 md:absolute md:bottom-0 md:right-20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-l-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pr-10 md:pt-28">
          <div className="flex justify-center md:justify-end w-full">
            <img
              srcSet={`${Room} 320w, ${Room} 480w, ${Room} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Room}
              alt="Flexible Room Types"
              className="w-[200px] sm:w-[150px] md:w-[220px] lg:w-[300px] object-cover mt-4 md:mt-9 md:absolute md:bottom-0 md:left-[5%]"
            />
          </div>
          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              03
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Flexible Room Types
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              <p>
                Quint: <i> Ideal for larger groups</i>
              </p>
              <p>
                Quad: <i> Suited for families </i>
              </p>
              <p>
                Triple: <i> A balance of community and privacy </i>
              </p>
              <p>
                Double: <i> Perfect for couples or pairs </i>
              </p>
            </p>
          </div>
          <div className="absolute right-0 bottom-0 h-[20%] border-l-2 border-[#894A1B]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-r-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pt-24">
          <div className="absolute left-0 top-0 h-1/5 border-l-2 border-[#894A1B]"></div>
          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6 md:ml-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              04
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Transparent, <br /> All-Inclusive Pricing
            </h3>
            <p className="text-gray-700 text-sm sm:text-xl md:text-xl">
              Our comprehensive packages include visa processing,
              accommodations, and transportation, eliminating the need for
              hidden fees.
            </p>
          </div>
          <div className="flex justify-center md:justify-start w-full">
            <img
              srcSet={`${Transparent} 320w, ${Transparent} 480w, ${Transparent} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Transparent}
              alt="Transparent"
              className="hidden sm:block w-[220px] sm:w-[270px] md:w-[330px] lg:w-[400px] object-cover mt-4 md:mt-9 md:absolute md:bottom-0 md:right-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-l-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pr-10 md:pt-20">
          <div className="flex justify-center md:justify-end w-full">
            <img
              srcSet={`${Arrangement} 320w, ${Arrangement} 480w, ${Arrangement} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Arrangement}
              alt="Licensed"
              className="w-[250px] sm:w-[240px] md:w-[350px] lg:w-[450px] object-cover mt-4 md:mt-0 lg:mt-0 md:absolute md:bottom-0 md:left-0"
            />
          </div>

          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              05
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Accommodation Arrangements
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              <p>
                {" "}
                <i> Makkah: 5 Nights</i>
              </p>
              <p>
                {" "}
                <i> Madinah: 7 Nights</i>{" "}
              </p>
              Each stay offers Comfort, Proximity, & Tranquility in sacred
              surroundings.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 h-[20%] border-l-2 border-[#894A1B]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-r-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pt-24">
          <div className="absolute left-0 top-0 h-1/5 border-l-2 border-[#894A1B]"></div>
          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6 md:ml-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              06
            </h1>
            <h3 className="text-lg sm:text-xl md:text-4xl font-semibold">
              24/7 Customer Support
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              Our dedicated support team is on standby to assist you at any hour
              throughout your pilgrimage, ensuring a smooth and fulfilling
              journey.
            </p>
          </div>
          <div className="flex justify-center md:justify-end w-full">
            <img
              srcSet={`${CustomerSupport} 320w, ${CustomerSupport} 480w, ${CustomerSupport} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={CustomerSupport}
              alt="Accommodation"
              className="hidden sm:block w-[100px] sm:w-[150px] md:w-[220px] lg:w-[300px] object-cover mt-4 md:mt-0 lg:mt-0 md:absolute md:bottom-0 md:right-20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-l-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pr-10 md:pt-24">
          <div className="flex justify-center md:justify-end w-full">
            <img
              srcSet={`${Guidance} 320w, ${Guidance} 480w, ${Guidance} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Guidance}
              alt="Flexible Room Types"
              className="w-[150px] sm:w-[120px] md:w-[180px] lg:w-[240px] object-cover mt-4 md:mt-9 md:absolute md:bottom-0 md:left-[5%]"
            />
          </div>

          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              07
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Comprehensive Guidance & Assistance
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              From pre-departure advice to post-return support, our team
              provides continuous assistance to make every phase of your
              pilgrimage meaningful and worry-free.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 h-[20%] border-l-2 border-[#894A1B]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-r-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pt-24">
          <div className="absolute left-0 top-0 h-1/5 border-l-2 border-[#894A1B]"></div>
          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6 md:ml-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              08
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Tailored Packages
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              Choose from our selection of standard, family, and VIP packages.
              We also offer customizable options to cater to unique needs and
              preferences.
            </p>
          </div>
          <div className="flex justify-center md:justify-start w-full">
            <img
              srcSet={`${Packages} 320w, ${Packages} 480w, ${Packages} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Packages}
              alt="Transparent"
              className="hidden sm:block w-[220px] sm:w-[270px] md:w-[330px] lg:w-[400px] object-cover mt-4 md:mt-9 md:absolute md:bottom-0 md:right-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-l-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pr-10 md:pt-24">
          <div className="flex justify-center md:justify-end w-full">
            <img
              srcSet={`${Services} 320w, ${Services} 480w, ${Services} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Services}
              alt="Flexible Room Types"
              className="w-[220px] sm:w-[150px] md:w-[220px] lg:w-[300px] object-cover mt-4 md:mt-9 md:absolute md:bottom-0 md:left-[5%]"
            />
          </div>
          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              09
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Additional Services
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              Enhance your pilgrimage with optional services, including guided
              tours to historical sites, specialized transportation, and
              personal assistance for elderly and disabled guests.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 h-[20%] border-l-2 border-[#894A1B]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-r-2 border-[#894A1B] p-4 sm:p-6 md:p-8 w-full md:max-w-screen-xl mx-auto relative md:pt-24">
          <div className="absolute left-0 top-0 h-1/5 border-l-2 border-[#894A1B]"></div>
          <div className="text-left space-y-2 md:space-y-4 p-4 sm:p-6 md:ml-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-[#B57439]">
              10
            </h1>
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
              Convenient Airport Transfers
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              Enjoy hassle-free airport pickup and drop-off services, ensuring a
              smooth start and end to your journey.
            </p>
          </div>
          <div className="flex justify-center md:justify-start w-full">
            <img
              srcSet={`${Airport} 320w, ${Airport} 480w, ${Airport} 800w`}
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, 800px"
              src={Airport}
              alt="Transparent"
              className="hidden sm:block w-[220px] sm:w-[270px] md:w-[330px] lg:w-[400px] object-cover mt-4 md:mt-9 md:absolute md:bottom-0 md:right-0"
            />
          </div>
        </div>
        <div className="flex items-center justify-center border-l-2 border-[#894A1B] w-auto relative h-[150px] sm:h-[120px] md:h-[200px]">
          <div className="absolute bottom-0 left-0 w-1/2 border-b-2 border-[#894A1B]"></div>
          <div className="absolute lg:bottom-0 xl:bottom-0 xs:bottom-0 md:bottom-0 sm:bottom-0 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ">
            <img
              src={Crowd}
              alt="footer"
              className="absolute w-5/6 max-w-full h-auto object-cover mx-auto mb-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
