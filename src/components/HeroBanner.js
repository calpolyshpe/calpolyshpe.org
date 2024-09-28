import { useState } from "react";
import Image from "next/image";

export default function HeroBanner({ imgUrl, title, subtitle }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative bg-[#001F5B] w-full mx-auto border-white border-b border-opacity-50">
      <div
        className={`w-full h-[40vh] lg:h-[50vh] relative ${
          isLoading ? "" : ""
        }`}
      >
        <Image
          src={imgUrl}
          alt="Mainpage GroupPhoto"
          layout="fill"
          objectFit="cover"
          className="opacity-45"
          priority
          onLoadingComplete={handleImageLoad}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 lg:p-8 md:p-6 sm:p-4 overflow-hidden">
        <div className="flex flex-col justify-center items-center h-full w-full max-w-lg">
          <h1 className="text-white font-sans lg:text-5xl md:text-4xl sm:text-3xl text-xl font-extrabold leading-snug mb-2">
            {title}
          </h1>
          <h2 className="text-white font-['Road_Rage'] lg:text-xl md:text-lg sm:text-md text-xs leading-snug">
            {subtitle}
          </h2>
        </div>
      </div>
    </div>
  );
}
