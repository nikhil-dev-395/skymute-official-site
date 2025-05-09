import React, { useState } from "react";
import { theme } from "../../utils/colors";
import CircularImagesLayout from "../circular/CircularImagesLayout";
import Android from "../button/Android";

const Card = ({ title, topic, explanation }) => {
  const bgColor = {
    background: theme?.colors?.ternary,
  };
  const [topicColor, settopicColor] = useState("#db3b56");

  const topicStyle = {
    color: topicColor,
  };
  return (
    <section className="mx-auto max-w-[1100px] px-1">
      {/* title ,  images - default , topic , explanation */}
      <div className="sm:max-w-[380px]  max-w-[340px] md:h-[550px] sm:h-[400px] bg-white mx-auto  rounded-[60px] md:py-8 py-5 px-4 bg-linear-to-b from-[#1a2959] to-[#10192d] border border-slate-700">
        <h3
          className={`md:text-xl sm:text-[17px] font-[700] text-white mx-auto text-center w-[65%]`}
        >
          {title}
        </h3>
        {/* images */}
        <div className="mx-auto ">
          <CircularImagesLayout />
        </div>
        <h4
          style={topicStyle}
          className="text-[26px] font-bold text-center py-2"
        >
          {" "}
          {topic}
        </h4>
        <p className="text-center font-[700] w-[90%] mx-auto sm:text-[20px] text-[16px] text-white sm:px-3">
          {" "}
          {explanation}
        </p>
      </div>
      <Android />
    </section>
  );
};

export default Card;
