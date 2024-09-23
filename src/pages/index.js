
import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import TabSelection from "@/components/TabSelection";

export default function Home() {
  return (
    <main>
      <HeroBanner imgUrl={'/HomeImgs/Mainpage_GroupPhoto.jpeg'} title={'Society of Hispanic Professional Engineers'} subtitle={"California Polytechnic State University - San Luis Obispo"} />
      <WhatIs question={"What is SHPE?"} response={"SHPE as an organization raises awareness, provides access, and prepares Hispanic students and professionals to become leaders in the STEM field. Our members are driving innovation, the global economy, and a prosperous Hispanic community. SHPE partners with the leading companies, organizations, and academic institutions in the STEM field to help connect Hispanic/Latinx STEM majors to corporations and help establish networks that last their entire lives."} />
      {/* <TabSelection /> */}
    </main>
  );
}
