import React from "react";

const CircularImagesLayout = () => {
  // Example image - replace with your actual images

  // You can use different images by replacing these URLs
  const images = {
    reddit: "/images/reddit.svg",
    instagram: "/images/instagram.svg",
    tiktok: "/images/tiktok.svg",
    x: "/images/x.svg",
    facebook: "/images/facebook.svg",
    pinterest: "/images/pinterest.svg",
  };

  return (
    <div className="relative w-full h-64 mx-auto mt-4">
      {/* Top  image */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <img
          src={images?.reddit}
          alt="Top"
          className="w-16 h-16 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>
  );
};

export default CircularImagesLayout;
