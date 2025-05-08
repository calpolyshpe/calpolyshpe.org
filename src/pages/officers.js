import { useState } from "react";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import Dropdown from "@/components/Dropdown";
import { SHPEboard23_24, SHPEboard24_25 } from "@/data/AboutOfficers";

export default function Officers() {
  const [selectedYear, setSelectedYear] = useState('2024-25');
  const officersToDisplay = selectedYear === '2024-25' ? SHPEboard24_25 : SHPEboard23_24;
  const heroImage = selectedYear === '2024-25' 
    ? "/officer_pics/2024-25/GroupOfficers.jpg" 
    : "/HomeImgs/Mainpage_GroupPhoto.jpeg";

  return (
    <main className="overflow-x-hidden"> {/* Prevent horizontal scrolling */}
      <HeroBanner
        imgUrl={heroImage}
        title={"Cal Poly SHPE Officers"}
        subtitle={selectedYear}
      />
      <div className="bg-[#001F5B] flex justify-end px-4 py-2">
        <Dropdown selectedYear={selectedYear} onYearChange={setSelectedYear} />
      </div>
      
      <div className="bg-[#001F5B] flex flex-col items-center pb-8">
        {officersToDisplay.map((officer, index) => (
          <div 
            key={index} 
            className="flex flex-col lg:flex-row items-center w-full max-w-4xl px-4 py-8 border-b border-white border-opacity-15"
          >
            {/* Image - responsive sizing */}
            <div className="w-64 h-80 lg:w-72 lg:h-96 mb-6 lg:mb-0 lg:mr-8 shrink-0">
              <Image
                src={officer.picture}
                alt={officer.name}
                width={288}
                height={384}
                className="w-full h-full object-cover aspect-[3/4]"
                priority
              />
            </div>
            
            {/* Content - responsive text and spacing */}
            <div className="w-full lg:max-w-[800px]">
              <h1 className="text-white font-bold text-xl lg:text-2xl font-sans mb-2">{officer.role}</h1>
              <h2 className="text-white text-base lg:text-lg mb-1">{officer.name}</h2>
              <h3 className="text-white text-base lg:text-lg mb-1">{officer.major}</h3>
              <h4 className="text-white text-base lg:text-lg mb-3">{officer.email}</h4>
              <p className="text-white text-sm lg:text-base whitespace-pre-wrap">{officer.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}