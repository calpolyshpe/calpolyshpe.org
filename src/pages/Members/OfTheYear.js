import MemberCard from "@/components/MemberCard";

export default function OfTheYear() {
  const members = [
    {
      name: "Marc Anthony Colores",
      year: "2nd year",
      major: "Civil Engineering",
      title: "MOTY 2025",
      picture: "/officer_pics/2025-26/MarcColores.jpg",
      blurb: "\nI am Marc Colores, and I have been involved with SHPE since my junior year of high school. I have always loved the SHPE Jr. activities that this club does and how I can help with those activities. I am currently the Alumni Relations officer and enjoy the work that I do for the club and hope to continue growing within SHPE.",
    },
  ];

  return (
    <main>
      <div className="bg-[#001F5B] flex flex-col items-center justify-center">
  <h1 className="text-white lg:text-5xl md:text-3xl text-sm border-b border-white border-opacity-50 w-3/4 p-5 items-center font-extrabold text-center font-sans">
    Member of the Quarter
  </h1>

  <div className="w-3/4 text-white text-center mt-6 mb-10 text-lg leading-relaxed">
    <p className="mb-4">
      By paying your chapter dues, you unlock access to our Member Points Program!
    </p>

    <p>
      Earn points every time you attend a SHPE event; the more events you attend, the more you earn. 
      Each quarter, the member with the highest points is recognized as Member of the Quarter, 
      and those quarterly winners are then considered for our Member of the Year award. 
      These members are recognized at both our General Meetings and End of the Year Banquet!
    </p>

    <p className="mt-4">
      Check out our past awardees and see how involvement truly pays off. 
      Keep showing up, stay engaged, and next time, it could be you being recognized!
    </p>
  </div>
    <div className="w-3/4 border-b border-white border-opacity-40 mt-6"></div>

</div>

      <MemberCard members={members} />
    </main>
  );
}