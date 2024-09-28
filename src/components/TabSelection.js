import { useState } from "react";

export default function TabSelection({ question, response }) {
  const [selectedTab, setSelectedTab] = useState("Events");

  const images = {
    Familia: "/HomeImgs/FamiliaTab.jpg",
    Events: "/HomeImgs/EventsTab.png",
    Partners: "/Sponsor_Logos.png",
  };

  const about = {
    Familia:
      "SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development. SHPE’s vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians, and engineers.",
    Events:
      "Members are able to help with outreach events that occur to help empower the youth. Intramural sports through SHPE is also offered!",
    Partners:
      "We appreciate all of those that support our mission to ensure students of Hispanic/Latinx descent have opportunities to help develop themselves professionally. We thank all of our sponsors for their kindness and generosity. With the resources provided, our chapter can do more for every member in our organization, helping bring opportunities that we might not have had otherwise.",
  };

  return (
    <div className="bg-[#001F5B] min-h-screen flex flex-col items-center py-10">
      <div className="relative -mb-16 z-10">
        <img
          src={images[selectedTab]}
          className="lg:w-[550px] md:w-96 w-44 h-auto"
          alt="Tab Photo"
        />
      </div>
      <div className="bg-[#72A9BE] lg:w-[750px] md:w-[500px] w-72 h-auto md:min-h-[400px] min-h-[300px] mt-10 mx-auto rounded-md relative flex flex-col justify-between p-6">
        <div className="flex flex-row items-center justify-around border-b border-white border-opacity-50 pb-4">
          <button
            className={`text-white hover:text-[#8f8f8f] ${
              selectedTab === "Familia" ? "font-bold underline" : ""
            }`}
            onClick={() => setSelectedTab("Familia")}
          >
            Familia
          </button>
          <button
            className={`text-white hover:text-[#8f8f8f] ${
              selectedTab === "Events" ? "font-bold underline" : ""
            }`}
            onClick={() => setSelectedTab("Events")}
          >
            Events
          </button>
          <button
            className={`text-white hover:text-[#8f8f8f] ${
              selectedTab === "Partners" ? "font-bold underline" : ""
            }`}
            onClick={() => setSelectedTab("Partners")}
          >
            Partners
          </button>
        </div>
        <div className="text-white text-sm md:text-lg lg:text-xl mt-6 md:mt-10 lg:mt-12">
          <p className="text-center">{about[selectedTab]}</p>
        </div>
      </div>
    </div>
  );
}
