import Image from "next/image";

export default function MemberCard({ members }) {
  return (
    <div className="bg-[#001F5B] flex flex-col justify-center items-center">
      {members.map((winner, index) => (
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
            <h1 className="text-white text-4xl font-extrabold mb-2">
              {winner.title}
            </h1>
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