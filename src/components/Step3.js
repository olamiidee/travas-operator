import React from "react";

function Step3() {
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

      {/* Guidelines */}
      <div className="mt-10 space-y-2">
        <h3>Guidelines</h3>
        <p className="font-light">
          Give your clients some important rules they will need to adhere to
          better their safety, comfort and overall experience
        </p>
        <p className="font-medium">Give a minimum of 2, maximum of 6</p>

        {/* Guideline input */}
        {/* first row */}
        <div className="flex space-x-6 w-[100%] pt-9">
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="Guideline 1"
            />
          </div>
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="Guideline 2"
            />
          </div>
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="Guideline 3"
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex space-x-6 w-[100%] pt-9">
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="Guideline 4"
            />
          </div>
          <div className="w-[25%]">
            <input
              className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
              placeholder="Guideline 5"
            />
          </div>
        </div>
      </div>
      {/* Assign a tour guide */}
      <div>
        <h3>Assign a tour guide</h3>
        <p className="font-light">And lastly assign a tour to your package</p>
        <p className="font-medium">
          A tour guide impacts the overall experience of tourists during the
          tour <br> by a lot. So get the best!</br>
        </p>
      </div>
      {/* Back and submit button */}

      <div className="flex justify-end mt-24 space-x-6">
        <button className="text-[#1F66D0] bg-white border border-[#1F66D0] font-semibold py-3 px-24">
          Back
        </button>
        <button className="bg-[#1F66D0] text-white font-semibold py-3 px-24">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step3;
