import HeroBanner from "@/components/HeroBanner";
import RegularText from "@/components/RegularText";
import WhatIs from "@/components/WhatIs";

export default function BecomeAMember() {
  return (
    <main>
      <HeroBanner title={"Become a Member"} imgUrl={"/MemberImg.jpg"} />
      <WhatIs
        question={"Why become a member?"}
        response={
          "Joining SHPE has multiple benefits for your professional, academic, and social life! For our general meetings we often bring a speaker from a big or small company to talk about what they do in their day to day work which allows for our members to ask questions and network. Paying the national dues as well as the Cal Poly SHPE dues is required to attend the SHPE national conference where they bring multiple companies for you to network with which can be helpful for acquiring your future career! When it comes to academics, our officers are passionate about what they do and study so they are always a good resources to ask about classes! SHPE also has many social events where you’re able to meet other students and build a community!"
        }
      />
      <div className="bg-[#001F5B] flex flex-col items-center">
        <div className="md:w-3/5 w-3/4 h-auto flex md:flex-row flex-col justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="https://apps.asi.calpoly.edu/paypal274" target="_blank">
            <button className="text-white bg-[#FD652F] rounded-xl md:text-xl text-lg md:px-20 px-12 md:py-4 py-2 whitespace-nowrap w-full md:w-auto">
              Cal Poly SHPE Dues
            </button>
          </a>
          <a href="https://www.shpeconnect.org/eweb/DynamicPage.aspx?WebCode=LoginRequired&expires=yes&Site=shpe" target="_blank">
            <button className="text-white bg-[#FD652F] rounded-xl md:text-xl text-lg md:px-20 px-12 md:py-4 py-2 whitespace-nowrap w-full md:w-auto">
              SHPE National Dues
            </button>
          </a>
        </div>
      </div>
      <RegularText text={"Check out our calendar to see when our next meeting will occur and how you can get involved!"} />
      {/* <WhatIs
        response={
          "Check out our calendar to see when our next meeting will occur and how you can get involved!"
        }
      /> */}
    </main>
  );
}
