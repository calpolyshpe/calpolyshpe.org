import Image from "next/image";

export default function MemberCard() {

    const Member = [
        {
          name: "Saul Rodriguez",
          year: "3rd year",
          major: "Computer Engineering",
          quarter: "Fall 2024",
          picture: "/member_pics/SaulHeadshot.webp",
          blurb:
            "\nHello! My name is Saul Rodriguez and I am a third year computer engineering student. As a first generation Hispanic student, one reason why I love SHPE is the community around me because I feel motivated to be with people of similar background and aspirations. SHPE has provided me a network of friends and mentors who uplift and support my academic and professional journey.",
        },
        {
            name: "Marc Colores",
            year: "1st year",
            major: "Civil Engineering",
            quarter: "Winter 2025",
            picture: "/member_pics/Marc.webp",
            blurb:
              "\nI love the community that SHPE provides for so many students and the ways that I can help to foster and participate with it through various activities. I loved the additional activities at my high school that SHPE helped facilitate and the community in engineering that it would eventually house for me.",
          },
          {
            name: "",
            year: "",
            major: "",
            quarter: "Spring 2025",
            picture: "/member_pics/person_icon.webp",
            blurb:
              "",
          },
    ]
    return (
        <div className="bg-[#001F5B] flex flex-col justify-center items-center">
              {Member.map((winner, index) => (
                <div
                  key={index}
                  className="hidden lg:flex justify-center items-center w-3/4 md:py-12 py-6 border-b border-white border-opacity-15"
                >
                  <Image
                    src={winner.picture}
                    alt={winner.name}
                    width={288}
                    height={384}
                    className="w-72 h-96 max-w-full max-h-full object-cover aspect-[3/4]"
                    priority
                  />
        
                  <div className="w-[800px] h-auto flex flex-col justify-center p-6 ml-12">
                    <h1 className="text-white text-4xl font-extrabold mb-2">{winner.quarter}</h1>
                    <h2 className="text-white text-lg mb-2">{winner.name}</h2>
                    <h3 className="text-white text-lg mb-2">{winner.year}</h3>
                    <h4 className="text-white text-lg mb-2">{winner.major}</h4>
                    <h5 className="text-white text-lg whitespace-pre-wrap">
                      {winner.blurb}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
    );
}