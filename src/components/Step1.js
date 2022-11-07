import React from "react";

function Step1() {
  return (
    <div className="pt-[100px] md:pt-[150px] w-[90%] mx-auto md:w-full md:mx-0 md:pl-[80px] pb-48">
      <div className="flex items-center space-x-4">
        <img src="/images/arrow.svg" alt="arrow" />
        <p>Step 1</p>
      </div>
      {/* progress ball 1 */}
      <div className="w-full flex justify-center">
        <img src="images/Progress ball-1.svg" alt="" />
      </div>

      <div className="">
        <img src="/images/user-groups.svg" alt=""></img>
      </div>
    </div>
  );
}

export default Step1;
