import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import LightBlue from "@/components/LightBlue";

export default function SHPEJr() {
  return (
    <main>
      <HeroBanner title={"Community Outreach"} imgUrl={"/SHPEJrImgs/SHPEJr_Cover.jpeg"} />
      <WhatIs
        question={"Our impact in the community"}
        response={
          "SHPE Cal Poly partners with seven K–12 schools across the Central Coast to bring STEM outreach directly to students through on-campus tours, inschool visits, and support for our SHPE Jr. chapters. Our outreach is designed to provide early exposure to engineering in a way that is inclusive, engaging, and reflective of the communities we serve. By connecting students and families to hands-on learning and mentorship, we aim to build lasting pathways into STEM."
        }
      />
      <div className="bg-[#001F5B] flex flex-row justify-center items-center">
        <img
          src="/SHPEJrImgs/GroupPhoto.jpg"
          className="w-3/4 h-auto md:pb-14 pb-6"
          alt="PV High"
        />
      </div>
      <LightBlue
        title={"What is SHPE Jr.?"}
        content={"SHPE Jr. is a national program that introduces junior high and high school students to STEM through early exposure, mentorship, and hands-on learning. At SHPE Cal Poly, we partner with local schools to provide opportunities for students to explore STEM, connect with mentors, and see themselves in higher education. Our outreach includes school visits and signature events like Noche de Ciencias and the SHPE Jr. Tour, which brings students to Cal Poly for a full day of immersive STEM activities. Our goal is to build inclusive and lasting pathways for Hispanic and underrepresented students to succeed in science and engineering."}
      />
      <div className="bg-[#001F5B] flex lg:flex-row md:flex-row flex-col justify-center items-center py-10">
        <img
          src="/SHPEJrImgs/TestingBuilds.jpeg"
          className="md:w-1/3 w-80 h-auto md:pr-10"
          alt="Testing Builds"
        />
        <img
          src="/SHPEJrImgs/Volunteers.jpeg"
          className="md:w-1/2 w-80 h-auto md:pl-10"
          alt="Volunteers"
        />
      </div>
      <WhatIs
        question={"Our SHPE Jr. chapters"}
        response={
          "Our first SHPE Jr. chapter was established at Pioneer Valley High School in 2013, followed by Santa Maria High School in 2017. Through these partnerships, SHPE Cal Poly members mentor high school students, share personal experiences about college and STEM, and encourage them to pursue careers in science and engineering. We are continuously working to expand our outreach to additional schools in the San Luis Obispo area so more students can access opportunities to explore STEM and higher education."
        }
      />
      <div className="bg-[#001F5B] flex flex-row justify-center items-center">
        <div className="lg:w-3/5 w-3/4 h-auto hidden md:flex flex-row justify-center pb-20">
          <img
            src="/SHPEJrImgs/PV_high.JPG"
            className="w-80 h-auto pr-14"
            alt="PV High"
          />
          <img
            src="/SHPEJrImgs/SM_High.jpg"
            className="w-80 h-auto pl-14"
            alt="SM High"
          />
        </div>
        <div className="lg:w-3/5 w-3/4 h-auto md:hidden flex flex-col justify-center items-center pb-10">
          <img
            src="/SHPEJrImgs/PV_high.JPG"
            className="w-80 h-auto pr-14"
            alt="PV High"
          />
          <img
            src="/SHPEJrImgs/SM_High.jpg"
            className="w-80 h-auto pl-14"
            alt="SM High"
          />
        </div>
      </div>
      <div className="bg-[#001F5B] flex lg:flex-row md:flex-row flex-col justify-center items-center pb-10">
        <img
          src="/SHPEJrImgs/NocheLogo.png"
          className="w-80 h-auto md:pr-10"
          alt="Noche Logo"
        />
        <img
          src="/SHPEJrImgs/NocheVolunteers.jpeg"
          className="md:w-1/2 w-80 h-auto md:pl-10"
          alt="Noche Volunteers"
        />
      </div>
      <LightBlue
        title={"Noche De Ciencas"}
        content={
          "In May 2025, our Community Outreach team organized and ledSHPE Cal Poly’s annual Noche de Ciencias at Pioneer Valley High School. The event brought together over 100 attendees, including more than 50 SHPE Jr. students, 30 parents, and 25 SHPE Cal Poly volunteers. Students participated in hands-on STEM activities, including robotics coding and an earthquake engineering tower challenge using a custom-built shake table. At the same time, parents attended a college access workshop conducted in Spanish that covered admissions, financial aid, and how to support their children through higher education. They also took part in a newspaper tower activity, giving them an engaging and approachable way to connect with STEM. To recognize the achievements of our SHPE Jr. members, two students were awarded $250 scholarships in honor of their dedication and potential in engineering. Noche de Ciencias continues to be one of our most impactful events, creating a space where students and families can explore STEM together, feel represented, and be inspired to pursue higher education."
        }
      />
      <div className="bg-[#001F5B] flex lg:flex-row md:flex-row flex-col justify-center items-center py-10">
        <img
          src="/SHPEJrImgs/MetalPlates.jpeg"
          className="w-1/3 h-auto"
          alt="Bridge testing"
        />
        <div className="bg-[#001F5B] flex flex-col justify-center items-center">
        <img
          src="/SHPEJrImgs/BridgeTesting.jpeg"
          className="w-80 h-auto"
          alt="Bridge testing"
        />
        <img
          src="/SHPEJrImgs/MetalCasting.jpg"
          className="w-80 h-auto"
          alt="Noche Volunteers"
        />
      </div>
      </div>
      <WhatIs
        question={"SHPE Jr. Tour"}
        response={
          "In March 2025, we welcomed over 60 students from Pioneer Valley High School and Santa Maria High School for a full day of immersive STEM experiences. Students had the opportunity to explore different areas of engineering through lab visits, interactive workshops, and direct engagement with SHPE members and faculty. To make the experience even more impactful, we partnered with the Civil Engineering and Industrial and Manufacturing Engineering departments. Students tested popsicle-stick bridge designs using a structural compression machine in the CE lab, and participated in a live metal casting session in the IME lab, where they poured molten aluminum and took home custom medallions with their school logos. The SHPE Jr. Tour remains one of our most meaningful outreach events, helping students see themselves in STEM and showing that college is a space where they belong."
        }
      />
    </main>
  );
}
