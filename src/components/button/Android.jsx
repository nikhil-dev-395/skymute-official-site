import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../utils/canstants";

const Android = () => {
  return (
    <div className="py-6 mb-2 sm:px-8 px-5 bg-indigo-300/20 text-white font-semibold  inline-block rounded-3xl mx-auto ">
      <a
        href={CONSTANTS?.links?.app_link}
        className="flex md:items-center  sm:text-xl sm:gap-4 gap-3"
      reo
      >
        <img src="/images/play.svg" className="w-6" alt="play" />
        <span>Download the Application</span>
      </a>
    </div>
  );
};

export default Android;
