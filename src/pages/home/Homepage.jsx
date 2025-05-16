import { useState } from "react";
import Card from "../../components/card/Card";
import ToggleButton from "../../components/button/Slider";

const Homepage = () => {
  const [problem, setProblem] = useState(true);
  return (
    <div className="w-full h-full py-3">
      {problem ? (
        <Card
          title={"Tried promoting your links across platforms?"}
          topic={"Got ban !"}
          explanation={
            "If you try to share your link, they ban you like you hacked their server with a toaster!"
          }
        />
      ) : (
        <Card
          title={"Give SkyMute Linkbox a try"}
          topic={"Skymute"}
          explanation={
            "With SkyMute Linkbox, you can easily promote all your links across platforms without the risk of getting banned"
          }
        />
      )}

      <div className="w-[360px]  text-2xl font-extrabold border-red-50 border rounded-[50px] bg-red-100 cursor-pointer flex justify-between mx-auto mt-10">
        <button
          onClick={() => setProblem(true)}
          className={` w-[70%] py-5 cursor-pointer  ${
            problem ? `bg-red-400` : `bg-transparent`
          } rounded-r-[50px] rounded-l-[50px]`}
        >
          problem
        </button>
        <button
          onClick={() => setProblem(false)}
          className={` w-[70%] py-5 cursor-pointer ${
            !problem ? `bg-green-400` : `bg-transparent`
          } rounded-r-[50px] rounded-l-[50px] `}
        >
          solution
        </button>
      </div>
    </div>
  );
};

export default Homepage;
