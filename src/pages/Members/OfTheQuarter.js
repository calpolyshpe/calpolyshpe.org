import MemberCard from "@/components/MemberCard";

export default function OfTheQuarter() {
  const members = [
    {
      name: "Saul Rodriguez",
      year: "3rd year",
      major: "Computer Engineering",
      title: "Fall 2024",
      picture: "/member_pics/SaulHeadshot.webp",
      blurb:
        "\nHello! My name is Saul Rodriguez and I am a third year computer engineering student. As a first generation Hispanic student, one reason why I love SHPE is the community around me because I feel motivated to be with people of similar background and aspirations. SHPE has provided me a network of friends and mentors who uplift and support my academic and professional journey.",
    },
    {
      name: "Marc Colores",
      year: "1st year",
      major: "Civil Engineering",
      title: "Winter 2025",
      picture: "/member_pics/Marc.webp",
      blurb:
        "\nI love the community that SHPE provides for so many students and the ways that I can help to foster and participate with it through various activities. I loved the additional activities at my high school that SHPE helped facilitate and the community in engineering that it would eventually house for me.",
    },
    {
      name: "Isabella Pelayo",
      year: "4th year",
      major: "Civil Engineering",
      title: "Spring 2025",
      picture: "/officer_pics/2025-26/IsabellaPelayo.jpg",
      blurb:
        "\nHi everyone! My name is Isabella Pelayo and I look forward to be the Secretary for the 25-26 year. I have been involved with SHPE since my 2nd year and I have enjoyed meeting new members in the club. My favorite part about SHPE is getting to help in planning fun social events for our members and getting unique networking opportunities SHPE provides.",
    },
    {
      name: "Juan Madrigal",
      year: "1st year transfer",
      major: "Aerospace Engineering",
      title: "Fall 2025",
      picture: "/member_pics/JuanMadrigal.jpg",
      blurb:
        "\nMy name is Juan Madrigal, and I am a first year transfer student majoring in aerospace engineering. Fall 2025 was my first quarter involved with SHPE, where I actively participated in meetings and had the opportunity to attend the National Convention in Philadelphia. My favorite part about SHPE is the people and the sense of community. Being surrounded by so many like minded and motivated individuals pushes me to grow and strive to be a better engineer and student.",
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