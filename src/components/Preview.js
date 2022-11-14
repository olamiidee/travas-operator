import React from "react";

export default function Preview() {
  return (
    <div className="pt-[100px] md:pt-[120px] w-[90%] px-1 mx-auto md:w-full md:mx-0 md:px-[80px] pb-20">
      <div className="flex items-center space-x-4">
        <img className="w-[16px]" src="/images/arrow.svg" alt="arrow" />
        <p>Preview</p>
      </div>
    </div>
  );
}
