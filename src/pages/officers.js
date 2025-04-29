import OfficerCard from "@/components/OfficerCard";
import HeroBanner from "@/components/HeroBanner";

export default function Officers() {
  return (
    <main>
      <HeroBanner
              imgUrl={"/Officer_pics/2024-25/GroupOfficers.jpg"}
              title={"Cal Poly SHPE Officers"}
              subtitle={"2024-2025"}
            />
      {/* <div className=" bg-[#001F5B] flex flex-col items-center justify-center">
        <h1 className="text-white lg:text-5xl md:text-3xl text-sm border-b border-white border-opacity-50 w-3/4 p-5 items-center font-extrabold text-center font-sans">
          Cal Poly SHPE Officers <br /> 2024 - 2025
        </h1>
      </div> */}
      <OfficerCard />
    </main>
  );
}
