import React from "react";
import ContactForm from "../Components/ContactForm";
import GetInTouch from '../assets/Get in Touch/GetInTouch.png'
import Mail from '../assets/Get in Touch/Mail.svg'
import Phone from '../assets/Get in Touch/Phone.svg'


function Contact() {
  return (
    <div>
      <div>
        <h1>Get in Touch:</h1>
        <h4>Your Journey Awaits</h4>
      </div>
      <div>
        <img src={GetInTouch} alt="Get In Touch" />
        <div>
          <p>
            We’re here to help! Reach out for inquiries or assistance regarding
            your Hajj or Umrah journey, as well as our other services, including
            Business Consultancy, Education Services, Tourism Services, Medical
            Services, and Visa & Government Services.
          </p>
        </div>
        <div>Border</div>
      </div>
      <div>
        <p>Your spiritual adventure and more start with just a message!</p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
