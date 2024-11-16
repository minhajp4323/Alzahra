function Contact() {
  function Submit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
  
    fetch(
      "https://script.google.com/macros/s/AKfycbyMO_OlZagrdaWKdypphoXYdYEOkMMFEEYzy81m7kGjHaQa9Vf37gokxmA_Zo99jTzm/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  }
  

  return (
    <div
      className="w-full flex justify-center"
      style={{ fontFamily: "Jeko, sans-serif" }}
    >
      <form
        className="form flex flex-col gap-5 sm:gap-6 max-w-[800px]"
        onSubmit={(e) => Submit(e)}
      >
        <div className="flex flex-col">
          <label htmlFor="NAME">NAME</label>
          <input
            type="text"
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
              className="rounded-[15px] w-full h-[50px] sm:h-[62px] bg-[#E2BC7E] placeholder:text-black p-4 sm:p-5"
              placeholder="Type your Nationality"
            />
          </div>
          <div className="flex flex-col w-full sm:w-2/3">
            <label htmlFor="phoneNumber">PHONE</label>
            <div className="flex gap-2 sm:gap-3">
              <select
                id="countryCode"
                name="countryCode"
                className="rounded-[15px] w-[90px] sm:w-[112px] h-[50px] sm:h-[62px] bg-[#E2BC7E] placeholder:text-black p-4 sm:p-5 text-md"
              >
                <option value="+91">INDIA</option>
                <option value="+1">USA</option>
                <option value="+44">UK</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone number"
                className="rounded-[15px] w-full h-[50px] sm:h-[62px] bg-[#E2BC7E] placeholder:text-black p-4 sm:p-5"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            name="email"
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
    </div>
  );
}

export default Contact;
