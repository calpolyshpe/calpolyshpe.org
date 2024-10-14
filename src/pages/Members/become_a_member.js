import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";

export default function BecomeAMember() {
  return (
    <main>
      <HeroBanner title={"Become a Member"} imgUrl={"/Become.jpg"} />
      <WhatIs
        question={"Why become a member?"}
        response={
          "Stop by our meetings to find out more about how you can get involved with SHPE and grow with our familia! Cal Poly SHPE dues and SHPE National dues must be paid to become an official member!"
        }
      />
      <div className="bg-[#001F5B] flex flex-col items-center">
        <div className="lg:w-3/5 w-3/4 h-auto flex justify-center items-center">
          <button className="text-white bg-[#FD652F] rounded-xl lg:text-xl md:text-sm text-[9px] md:px-14 px-4 md:py-2 py-1 md:mr-14 mr-4">
            <a
              href="https://apps.asi.calpoly.edu/paypal274"
              target="_blank"
            >
              Cal Poly SHPE Dues
            </a>
          </button>
          <button className="text-white bg-[#FD652F] rounded-xl lg:text-xl md:text-sm text-[9px] md:px-14 px-4 md:py-2 py-1 md:ml-14 ml-4">
            <a href="https://www.shpeconnect.org/eweb/DynamicPage.aspx?WebCode=LoginRequired&expires=yes&Site=shpe">
              SHPE National Dues
            </a>
          </button>
        </div>
        <h1 className="text-white flex justify-center lg:w-3/5 w-3/4 h-auto lg:text-xl md:text-sm text-[9px] font-sans md:mt-6 mt-3 pb-10">
          Check out our calendar to see when our next meeting will occur and how
          you can get involved!
        </h1>
      </div>
    </main>
  );
}
