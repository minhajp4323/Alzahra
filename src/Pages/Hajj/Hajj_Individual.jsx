import React from "react";

function Hajj_Individual() {
  return (
    <div className="w-[1512px]">
      <form action="" className="flex flex-col gap-[20px]">
        <div className="flex flex-col">
          <label htmlFor="NAME">NAME</label>
          <input
            type="text"
            className="rounded-[15px] w-[647px] h-[62px] bg-[#E2BC7E]"
          />
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label htmlFor="NATIONALITY">NATIONALITY</label>
            <input
              type="text"
              className="rounded-[15px] w-[322px] h-[62px] bg-[#E2BC7E]"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="">
              Phone Number
            </label>
            <div>
              <select
                id="countryCode"
                name="countryCode"
                className="rounded-[15px] w-[130px] h-[62px] bg-[#E2BC7E]"
              >
                <option value="+1">USA</option>
                <option value="+44">UK</option>
                <option value="+91">India</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter phone number"
                className="rounded-[15px] w-[182px] h-[62px] bg-[#E2BC7E] "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            className="rounded-[15px] w-[647px] h-[62px] bg-[#E2BC7E]"
          />
        </div>

        <button className="rounded-[20px] w-[647px] h-[65px] border-[1px] border-black">
          Enquire
        </button>
      </form>
    </div>
  );
}

export default Hajj_Individual;
