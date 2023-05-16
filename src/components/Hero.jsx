import React from "react";

const Hero = ({ selectedImage }) => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold">
            The <span className="text-orange-500">BEST</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold">
            <span className="text-orange-500">SINGER</span> of 2023
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={
            selectedImage ||
            "https://danviet.mediacdn.vn/296231569849192448/2023/5/4/b37d01cb-361d-4e1b-93a4-d9328bc0d521-16832436511831466241416.jpeg"
          }
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
