import Logo from "../assets/Arabic Logo.svg";
// import Facebook from "../assets/Social Icons/facebook.svg";
// import Instagram from "../assets/Social Icons/instagram.svg";
// import Snapchat from "../assets/Social Icons/snapchat.svg";
// import TikTok from "../assets/Social Icons/tik-tok.svg";
// import X from "../assets/Social Icons/X.svg";
// import Youtube from "../assets/Social Icons/youtube.svg";

function Footer() {
  return (
    <div
      className="flex flex-col md:flex-row gap-8 justify-between p-16 xs:gap-2 text-center md:text-left bg-gradient-to-t from-[#edc077] to-transparent px-[10%] md:mt-36 xs:mt-10 pb-36 "
      style={{
        position: "relative",
        zIndex: 9999,
      }}
    >
      <div className="flex flex-col items-center gap-4 w-full md:w-1/4 mx-auto md:items-start mb-0  ">
        <img
          src={Logo}
          alt="Logo"
          // className="w-[260px] md:w[240px]  mx-auto md:mx-0 xs:w-[160px]"
          className="w-auto ml-0 xs:w-40"
        />
        {/* <div className="flex gap-6 justify-center mt-16 items-center mx-auto md:mx-0  ">
          <img src={Facebook} alt="Facebook" className="w-6 h-6" />
          <img src={Instagram} alt="Instagram" className="w-6 h-6" />
          <img src={Snapchat} alt="Snapchat" className="w-6 h-6" />
          <img src={TikTok} alt="TikTok" className="w-6 h-6" />
          <img src={X} alt="X" className="w-6 h-6" />
          <img src={Youtube} alt="Youtube" className="w-6 h-6" />
        </div> */}
      </div>

      {/* <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/4">
        <p className="text-2xl font-gilroy-light md:text-left text-center">
          Quick Links
        </p>
        <hr className="border-t-2 border-[#757575] my-4 w-full mx-auto opacity-20" />

        <div className="flex flex-wrap justify-center gap-8">
          <ul className="list-none flex flex-col items-center md:items-start font-extrabold">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul className="list-none flex flex-col items-center md:items-start font-extrabold">
            <li>Hajj</li>
            <li>Umrah</li>
            <li>Other Services</li>
          </ul>
        </div>
      </div> */}

      {/* <div className="flex flex-col items-center md:items-start md:gap-4 xs:gap-0 md:mt-0 xs:mt-10 w-full md:w-1/4"> */}
      <div className="flex flex-col items-center md:items-start md:gap-2 xs:gap-0 md:mt-0 xs:mt-10 w-full md:w-1/3">
        <p className="text-lg font-gilroy-light md:text-left text-center">
          Location
        </p>
        <hr className="border-t-[1px] border-[#757575] my-4 w-[80%] md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto" />

        <div className="flex flex-wrap justify-center gap-8">
          <ul className="list-none flex flex-col gap-2 items-center md:items-start font-extrabold">
            <li>7385 Al Aasha Al Mazeni,</li>
            <li> 3262, Jeddah 23454,</li>
            <li> Saudi Arabia</li>
            {/* <li>Address here adder</li>
              <li>Address here,</li> */}
          </ul>
        </div>
      </div>

      {/* <div className="flex flex-col items-center md:items-start md:gap-4 xs:gap-0 md:mt-0 xs:mt-10  w-full md:w-1/4"> */}
      <div className="flex flex-col items-center md:items-start md:gap-2 xs:gap-0 md:mt-0 xs:mt-10  w-full md:w-1/3">
        <p className="text-lg font-gilroy-light md:text-left text-center">
          Contact Info
        </p>
        <hr className="border-t-[1px] border-[#757575] my-4 w-[80%] md:ml-0 mt-0 mb-2 xs:mx-auto md:mx-auto " />
        <div className="window  flex-wrap justify-center gap-8 md:block hidden">
          <ul className="list-none flex flex-col items-center md:items-start space-y-2 font-extrabold">
            <li className="flex flex-col md:flex-row justify-center md:justify-start w-full">
              <span className="w-[70px] block xs:text-center sm:text-center md:text-left">
                Phone:
              </span>
              <span className="text-center md:text-left xs:text-center">
                +96659 499 5016
              </span>
            </li>
            <li className="flex flex-col md:flex-row justify-center md:justify-start w-full">
              <span className="w-[70px] block text-center md:text-left"></span>
              <span className="text-center md:text-left">+96656 608 7162</span>
            </li>
            <li className="flex flex-col md:flex-row justify-center md:justify-start w-full">
              <span className="w-[70px] block text-center md:text-left">
                Email:
              </span>
              <span className="text-center md:text-left">
                info@alzahrahajj.com
              </span>
            </li>
          </ul>
        </div>

        <div className="small text-center block md:hidden">
          <ul className="list-none font-extrabold">
            <li>Phone:</li>
            <li>+96659 499 5016</li>
            <li>+96656 608 7162</li>
            <li>Email:</li>
            <li className="">info@alzahrahajj.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
