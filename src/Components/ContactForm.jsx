import { useState } from "react";

function Contact() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz9sojySgm-2MnNNyQTZT88wczoAAV2i9JkMtT1QH4c4Ja3B-xIfm7oL9vcaOKAp9g/exec";
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    countryCode: "",
    number: "",
    email: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(() => {
        setStatus("Thank you! Your form was submitted successfully.");
        setFormData({
          name: "",
          nationality: "",
          countryCode: "",
          number: "",
          email: "",
        });
        console.log(formData);
      })
      .catch((error) => {
        setStatus(`Error: ${error.message}`);
      });
  };

  return (
    <div
      className="w-full flex justify-center flex-col items-center"
      style={{ fontFamily: "Jeko, sans-serif" }}
    >
      <form
        className="form flex flex-col gap-5 sm:gap-6 max-w-[800px]"
        name="contact-form "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="NAME">NAME</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-[15px] w-full max-w-[800px] h-[50px] sm:h-[62px] bg-[#E2BC7E] placeholder:text-black p-4 sm:p-5"
            placeholder="Type your Name"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-full">
          <div className="flex flex-col w-full sm:w-1/3">
            <label htmlFor="NATIONALITY">NATIONALITY</label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
              className="rounded-[15px] w-full h-[50px] sm:h-[62px] bg-[#E2BC7E] placeholder:text-black p-4 sm:p-5"
              placeholder="Type your Nationality"
            />
          </div>
          <div className="flex flex-col w-full sm:w-2/3">
            <label htmlFor="number">PHONE</label>
            <div className="flex gap-2 sm:gap-3">
              <select
                type="countryCode"
                name="countryCode"
                id="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="rounded-[15px] w-[90px] sm:w-[112px] h-[50px] sm:h-[62px] bg-[#E2BC7E] placeholder:text-black p-4 sm:p-5 text-md"
              >
                <option value="+91">INDIA</option>
                <option value="+1">USA</option>
                <option value="+44">UK</option>
              </select>
              <input
                type="tel"
                id="number"
                name="number"
                placeholder="number"
                className="rounded-[15px] w-full h-[50px] sm:h-[62px] bg-[#E2BC7E] placeholder:text-black p-4 sm:p-5"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">EMAIL</label>
          <input
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-[15px] w-full max-w-[800px] h-[50px] sm:h-[62px] bg-[#E2BC7E] placeholder:text-black p-4 sm:p-5"
            placeholder="Email"
          />
        </div>

        <button
          className="rounded-[20px] w-full max-w-[800px] h-[50px] sm:h-[65px] border border-black placeholder:text-black p-4 sm:p-5 text-[20px]"
          type="submit"
        >
          Enquire
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
}

export default Contact;
