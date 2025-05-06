import React from "react";
import Card from "../../components/card/Card";

const Homepage = () => {
  return (
    <div className="w-full h-full py-3">
      {" "}
      <Card
        title={"Tried promoting your links across platforms?"}
        topic={"Got ban !"}
        explanation={
          "If you try to share your link, they ban you like you hacked their server with a toaster!"
        }
      />
    </div>
  );
};

export default Homepage;
