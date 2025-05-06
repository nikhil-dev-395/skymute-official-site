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
    <section className="mx-auto max-w-[1100px] ">
      {/* title ,  images - default , topic , explanation */}
      <div className="md:w-[380px] md:h-[550px] bg-white mx-auto  rounded-[60px] py-8 px-4 bg-linear-to-b from-[#1a2959] to-[#10192d] border border-slate-700">
        <h3
          className={`text-xl font-[700] text-white mx-auto text-center w-[65%]`}
        >
          {title}
        </h3>
        {/* images */}
        <div className="mx-auto">
          <CircularImagesLayout />
        </div>
        <h4
          style={topicStyle}
          className="text-[26px] font-bold text-center py-2"
        >
          {" "}
          {topic}
        </h4>
        <p className="text-center font-[700] w-[90%] mx-auto text-[20px] text-white px-3">
          {" "}
          {explanation}
        </p>
      </div>
      <Android />
    </section>
  );
};

export default Card;
