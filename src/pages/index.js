import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import InstagramFeed from "@/components/InstagramFeed";
import TabSelection from "@/components/TabSelection";

export default function Home() {
  return (
    <main>
      <HeroBanner
        imgUrl={"/HomeImgs/Mainpage_GroupPhoto.jpeg"}
        title={"Society of Hispanic Professional Engineers"}
        subtitle={"California Polytechnic State University - San Luis Obispo"}
      />
      <WhatIs
        question={"What is SHPE?"}
        response={
          "SHPE as an organization raises awareness, provides access, and prepares Hispanic students and professionals to become leaders in the STEM field. Our members are driving innovation, the global economy, and a prosperous Hispanic community. SHPE partners with the leading companies, organizations, and academic institutions in the STEM field to help connect Hispanic/Latinx STEM majors to corporations and help establish networks that last their entire lives."
        }
      />
      {/* <TabSelection /> */}
      <h2 className="bg-[#001F5B] text-white lg:text-3xl md:text-xl sm:text-lg text-base font-medium font-serif italic leading-relaxed md:leading-relaxed text-center md:py-5 py-2.5">
        Our Instagram Feed
      </h2>
      <InstagramFeed />
    </main>
  );
}
