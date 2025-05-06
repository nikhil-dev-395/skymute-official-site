import React, { useState } from "react";
import { theme } from "../../utils/colors";
import CircularImagesLayout from "../circular/CircularImagesLayout";

const Card = ({ title, topic, explanation }) => {
  const bgColor = {
    background: theme?.colors?.ternary,
  };
  const [topicColor, settopicColor] = useState("#db3b56");

  const topicStyle = {
    color: topicColor,
  };
  return (
    <>
      {/* title ,  images - default , topic , explanation */}
      <div
        className="md:w-[380px] md:h-[500px] bg-white mx-auto mt-4 rounded-[100px] py-8 px-4"
        style={bgColor}
      >
        <h3
          className={`text-xl font-[700] text-white mx-auto text-center w-[65%]`}
        >
          {title}
        </h3>
        {/* images */}
        <div className="mx-auto">
          <CircularImagesLayout />
        </div>
        <h4 style={topicStyle} className="text-xl font-bold text-center">
          {" "}
          {topic}
        </h4>
        <p className="text-center font-[700] w-[90%] mx-auto text-[20px] text-white px-3">
          {" "}
          {explanation}
        </p>
      </div>
    </>
  );
};

export default Card;
