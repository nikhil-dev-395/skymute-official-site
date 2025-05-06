import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../utils/canstants";

const Android = () => {
  return (
    <div className="py-4 px-8 bg-indigo-300/20 text-white font-semibold  inline-block rounded-3xl ">
      <Link
        to={CONSTANTS?.links?.app_link}
        className="flex items-center text-xl gap-4"
      >
        <img src="/images/play.svg" className="w-6" alt="play" />
        <span>Download the Application</span>
      </Link>
    </div>
  );
};

export default Android;
