import Logo from "../assets/Arabic Logo.svg";
import Facebook from "../assets/Social Icons/facebook.svg";
import Instagram from "../assets/Social Icons/instagram.svg";
import Snapchat from "../assets/Social Icons/snapchat.svg";
import TikTok from "../assets/Social Icons/tik-tok.svg";
import X from "../assets/Social Icons/X.svg";
import Youtube from "../assets/Social Icons/youtube.svg";

function Footer() {
  return (
    <div
      className="flex flex-col md:flex-row gap-8 justify-between p-16 text-center md:text-left bg-gradient-to-t from-[#eabb70] to-transparent "
      style={{
        position: "relative",
        zIndex: 9999,
      }}
    >
      <div className="flex flex-col items-start gap-4 w-full md:w-1/4 mx-auto md:items-start">
        <img src={Logo} alt="Logo" className="w-auto mx-auto" />
        <div className="flex gap-4 justify-center mt-4 items-center mx-auto md:mx-0">
          <img src={Facebook} alt="Facebook" className="w-6 h-6" />
          <img src={Instagram} alt="Instagram" className="w-6 h-6" />
          <img src={Snapchat} alt="Snapchat" className="w-6 h-6" />
          <img src={TikTok} alt="TikTok" className="w-6 h-6" />
          <img src={X} alt="X" className="w-6 h-6" />
          <img src={Youtube} alt="Youtube" className="w-6 h-6" />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/4">
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
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/4">
        <p className="text-2xl font-gilroy-light md:text-left text-center">
          Location
        </p>
        <hr className="border-t-2 border-[#757575] my-4 w-full mx-auto opacity-20" />

        <div className="flex flex-wrap justify-center gap-8">
          <ul className="list-none flex flex-col items-center md:items-start font-extrabold">
            <li>Address here,</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/4">
        <p className="text-2xl font-gilroy-light md:text-left text-center">
          Contact Info
        </p>
        <hr className="border-t-2 border-[#757575] my-4 w-full mx-auto opacity-20" />

        <div className="flex flex-wrap justify-center gap-8">
          <ul className="list-none flex flex-col items-center md:items-start space-y-2 font-extrabold">
            <li className="flex flex-col md:flex-row justify-center md:justify-start w-full">
              <span className="w-[70px]">Phone:</span>
              <span>+96659 499 5016</span>
            </li>
            <li className="flex flex-col md:flex-row justify-center md:justify-start w-full">
              <span className="w-[70px]"></span>
              <span>+96656 608 7162</span>
            </li>
            <li className="flex flex-col md:flex-row justify-center md:justify-start w-full">
              <span className="w-[70px]">Email:</span>
              <span>info@alzahrahajj.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
