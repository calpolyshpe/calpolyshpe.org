import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import LightBlueWPic from "@/components/LightBlueWPic";
import RegularText from "@/components/RegularText";

export default function Sponsor() {
  return (
    <main>
      <HeroBanner imgUrl={"/SHPE_Banquet_Table.jpg"} title={"Sponsors"} />
      <WhatIs
        question={"Why become a sponsor?"}
        response={
          "Our sponsors have the unique opportunity to engage, support, educate, and advance the careers of Hispanic students and professionals. Your participation further affirms your commitment to diversity in your recruitment and retention efforts. Our sponsors have the creative freedom to choose which events to sponsor. Tiered packages are available for our companies' convenience as well. Partners of SHPE will have their careers page linked on our website, and the top five (5) partners will receive two (2) free seats to our Annual Banquet."
        }
      />
      <div className="bg-[#001F5B] flex flex-col justify-center items-center">
        <div className="lg:w-3/5 w-3/4 h-auto flex justify-center items-center">
          <a href="https://apps.asi.calpoly.edu/paypal274">
            <button className="text-white bg-[#FD652F] rounded-xl lg:text-xl md:text-sm text-[9px] md:px-14 px-4 md:py-2 py-1 md:mr-14 mr-4">
              Sponsor Form
            </button>
          </a>
          <button className="text-white bg-[#FD652F] rounded-xl lg:text-xl md:text-sm text-[9px] md:px-14 px-4 md:py-2 py-1 md:ml-14 ml-4">
            Sponsor Package
          </button>
        </div>
        <h1 className="text-white lg:w-3/5 w-3/4 h-auto lg:text-xl md:text-lg text-sm font-sans md:py-14 py-6 border-b border-white border-opacity-15">
          Please look over our sponsor package and complete our sponsor form and
          email it to our VP of Corporate Affairs at calpolyshpe.vp@gmail.com.
        </h1>
        <h2 className="text-white lg:w-3/5 w-3/4 h-auto lg:text-3xl md:text-xl text-[13px] font-medium font-serif italic border-white border-t border-opacity-15 md:pt-14 pt-6 md:pb-10 pb-4">
          Our sponsors{" "}
        </h2>
        <img
          src="/Sponsor_Logos.png"
          className="md:w-[600px] w-[300px] h-auto"
        />
        <h3 className="text-white lg:w-3/5 w-3/4 h-auto lg:text-xl md:text-lg text-sm font-sans md:py-14 py-6 border-b border-white border-opacity-15 text-center">
          Thank you to all of our sponsors for helping the future Hispanics of
          STEM!
        </h3>
      </div>
      <WhatIs
        question={"Other ways to help"}
        response={
          "If you wish to help out our SHPE chapter but don’t want to become a sponsor, donations are a way to get involved with our organization!"
        }
      />
      <div className="bg-[#72A9BE] w-full h-auto flex items-center justify-center">
        <h1 className="text-white lg:w-3/5 w-3/4 h-auto lg:text-xl text-sm  font-sans md:py-14 py-6 border-b border-white border-opacity-15">
          1. Click the Donations button below <br />
          2. List your donation amount under "Donation Amount" <br />
          3. In the "Designations" section, choose "Select College(s) and
          Program(s) from Pop-Up Menu." <br />
          4. Select "Other - Write Fund Name" and click "Continue." <br />
          5. Type "Society of Hispanic Professional Engineers" under "Enter fund
          not listed." <br />
          6. Fill out any other information needed!
        </h1>
      </div>
      <div className="bg-[#001F5B] flex justify-center">
        <div className="lg:w-3/5 w-3/4 h-auto flex justify-center md:py-14 py-6">
          <a href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&pgid=961&cid=2272&bledit=1&dids=322.276.486.317.329.352.487.306.363.211.459.325.389.490.330.491.705.338.259.335.215.324.410.336.302.&sort=1">
            <button className="text-white bg-[#FD652F] rounded-xl lg:text-xl md:text-sm text-[9px] md:px-28 px-9 md:py-2 py-1 md:mr-14 mr-4">
              Donate
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
