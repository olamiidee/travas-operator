import React from "react";

function Step2() {
  return (
    <div className="pt-[100px] md:pt-[120px] w-[90%] px-1 mx-auto md:w-full md:mx-0 md:px-[80px] pb-20">
      <div className="flex items-center space-x-4">
        <img className="w-[16px]" src="/images/arrow.svg" alt="arrow" />
        <p>Step 1</p>
      </div>
      {/* progress ball 2 */}
      <div className="w-full flex justify-center">
        <img className="w-[20%]" src="images/Progress ball-1.svg" alt="" />
      </div>
      {/*  Get creative */}
      <div className="flex items-center space-x-5 pt-8">
        <div className="rounded-full border w-fit">
          <img
            className="w-[90%] mx-auto"
            src="/images/Bright Mind.svg"
            alt=""
          />
        </div>

        <div className="flex flex-col border rounded-3xl px-9 py-2">
          <p className="font-medium">Get creative!</p>
          <p className="font-light">
            Don’t just stick to the old ways. Try out new ways to satisfy your
            tourists to the fullest
          </p>
        </div>
      </div>
      {/* Get creative ends */}

      {/* Itineraery */}
      <div className="mt-12 space-y-2">
        <h3 className="font-medium">Itineraery</h3>
        <p className="font-light">
          Tour itinerary impacts the chances of tour package being booked by a
          large extent
        </p>
        <p className="font-light">
          Give a full interesting description of your tour package
        </p>
        <div className="pt-6">
          <textarea
            className="bg-[#F5F5F5] pl-3 pt-3 h-[150px] w-full focus:outline-none placeholder:text-sm resize-none md:w-[60%]"
            placeholder="Enter full description here"
          ></textarea>
        </div>
      </div>

      {/* What to expect */}
      <div className="mt-10 space-y-2">
        <h3 className="font-medium">What to expect</h3>
        <p className="font-light pb-6">
          Highlight the most interesting and juicy parts of your tour package,
          so tourists can easilt spot them
        </p>
        <div className="border-2 px-3 py-8 md:pr-9 md:w-[70%]">
          <p>Sample</p>
          <div className="flex justify-between font-light">
            <div>
              <p>Luxurious accomodation</p>
            </div>
            <div>
              <p>An amazing and caring tour guide</p>
            </div>
            <div>
              <p>Delicious local dishes</p>
            </div>
          </div>
        </div>

        {/* what to expect input */}
        {/* first row */}
        <div className="flex space-x-6 w-[100%] pt-9">
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="what to expect"
            />
          </div>
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="what to expect"
            />
          </div>
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="what to expect"
            />
          </div>
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="what to expect"
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex items-center w-[100%] pt-9">
          <div className=" w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="what to expect"
            />
          </div>
          <div className="flex items-center space-x-3 w-[25%]">
            <img src="/images/plus.svg" />
            <p className="text-[#1F66D0]"> Add more</p>
          </div>
        </div>
      </div>

      {/* Tour Photos */}
      <div className="space-y-2 pt-16">
        <h3 className="font-medium">Tour photos</h3>
        <p className="font-light pb-6">
          Upload amazing photos related to the tour package you are organizing
        </p>
        {/* images container */}
        <div></div>
        <p className="font-light">Upload a minimum of three photos</p>
        {/* buttons */}
        <div className="flex space-x-6 pt-8">
          <button className="border bg-[#1F66D0] flex items-center text-white px-9 py-2 rounded-full shadow-md">
            <span className="pr-4">
              <img className="w-[14px]" src="/images/plus2.svg" />
            </span>
            Upload
          </button>
          <button className="border border-black text-[#1F66D0] px-11 py-2 rounded-full shadow-md">
            Replace
          </button>
        </div>
      </div>
      {/* Back and next button */}

      <div className="flex justify-end mt-24 space-x-6">
        <button className="text-[#1F66D0] bg-white border border-[#1F66D0] font-semibold py-3 px-24">
          Back
        </button>
        <button className="bg-[#1F66D0] text-white font-semibold py-3 px-24">
          Next
        </button>
      </div>
    </div>
  );
}

export default Step2;
