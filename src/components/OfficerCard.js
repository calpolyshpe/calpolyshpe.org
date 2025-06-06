import Image from "next/image";

export default function OfficerCard() {

  const SHPEboard23 = [
    {
      name: "Isabella Jimenez-Melendrez",
      role: "President",
      email: "calpolyshpe.prez@gmail.com",
      major: "Architectural Engineering",
      picture: "/officer_pics/2023-24/President.webp",
      blurb:
        "\nHola Familia!  My name is Isabella Jimenez-Melendrez and I am an architectural engineering undergraduate student. My passion for my career is so I can help build better structures and help to make sustainable and affordable housing for our community. I was born in San Diego, California, but I grew up in Tijuana, Baja California, Mexico. My hobbies include cooking, doing any types of crafts, swimming, and spending time with my family, friends, and my two dogs, Zeus and Guero. SHPE has always brought the best out of me and it’s an honor to be part of the team and bring the best out of the club to support our members. SHPE is more than just a club, it’s a support system, una familia, that helps us grow professionally and personally. As this year’s president, I oversee all the officers and report our activities, successes, and statistics to SHPE National. We are here to provide the best for everyone and have a great academic year full of opportunities, porque si se puede! If you have any questions about anything at all, feel free to email me or talk to me at a meeting, an event, or at school in general!",
    },
  ]
  const SHPEboard24 = [
    {
      name: "Kaitlyn Corral",
      role: "President",
      email: "calpolyshpe.prez@gmail.com",
      major: "Mechanical Engineering",
      picture: "/officer_pics/2024-25/Kaitlyn.webp",
      blurb:
        "\nHi everyone, my name is Kaitlyn Corral and I am the SHPE President for the '24-'25 academic school year! I am in my second year of mechanical engineering and am originally from Bakersfield, CA. Outside of SHPE, I am a Shop Technician for the Mustang Machine Shops. Stop by and you might see me working! \n\nI am thrilled to play such an important role in a club that means so much to me! Before officially attending Cal Poly I had the opportunity to get the SHPE experience and knew that SHPE Cal Poly was where I was meant to be. This year, I have goals of increasing our club membership and retention and growing our SHPEtina community. I hope that you consider being a part of SHPE and joining our Familia!",
    },
    {
      name: "Asarel Castellanos",
      role: "Treasurer",
      email: "calpolyshpe.treasurer@gmail.com",
      major: "Economics",
      picture: "/officer_pics/2024-25/Asarel.webp",
      blurb:
        "\nHello everyone! I'm your '24-'25 SHPE Treasurer. I am currently a senior and a second-year transfer studying Economics. I'm from Los Angeles, CA. Outside of SHPE, I build and maintain open-source projects, work at the Transfer Center and play sports (tennis, basketball, soccer, etc). \n\nI am excited to serve and support SHPE this year, as your Treasurer! Before joining Cal Poly SLO I was nervous about coming back to school after taking a break for 2 years. After attending the first general meeting I knew this was the club for me. Two major goals I have this year is to increase the amount of collaborative events (with other clubs) we have this year and to support our SHPEtinas by increase their number of events (and budget, iykyk).",
    },
    {
      name: "Julissa Hernandez Romero",
      role: "Webmaster",
      email: "calpolyshpe.webmaster@gmail.com",
      major: "Computer Science",
      picture: "/officer_pics/2024-25/Julissa.webp",
      blurb:
        "\nHey everyone, I’m Julissa your SHPE webmaster for the year! My major is computer science and in my free time I like exploring new places or being outdoorsy. I’m also a transfer student, who works at the Transfer center so if you have any transfer related questions feel free to ask me! \n\nFun fact, If you’re currently reading this that means you're on the website that I have designed and built for the club! My goal for this school year as webmaster is to make sure that the website gets updated, looks presentable, and represents what we stand for as a club. I’m looking forward to seeing you all at our meetings and events!",
    },
    {
      name: "Yitzel Vazquez",
      role: "VP of Corporate Affairs",
      email: "calpolyshpe.vp@gmail.com",
      major: "Mechanical Engineering",
      picture: "/officer_pics/2024-25/Yitzel.webp",
      blurb:
        "\nHello everyone, my name is Yitzel Vazquez, and I am the Vice President of Corporate Affairs for the 2024-2025 school year. I am a third-year mechanical engineering student from Oxnard, CA. Besides my involvement in SHPE, I am also a part of Imagen Y Espiritu Ballet Folklorico. A fun fact about me is that I started folklorico when I was 7 and that is when I grew a love for dancing.\n\nMy goals for this year include providing our members with more opportunities to connect with company representatives and alumni, as well as offering additional chances to help prepare them for the industry. I hope to see you join our SHPE familia!",
    },
    {
      name: "Angie Balderas",
      role: "VP of Membership",
      email: "calpolyshpe.membership@gmail.com",
      major: "Aerospace",
      picture: "/officer_pics/2024-25/Angie.webp",
      blurb:
        "\nI have a dog named Frijol 🫘. I like listening to Karol G. My go to drink is an iced strawberry matcha or taro boba. I joined SHPE because I was part of SHPE Jr. in high school and I could tell everyone wanted to be a support system for the students. Being part of SHPE has been really fun and I’ve made a lot of memories and I hope to make many more.",
    },
    {
      name: "Vanessa Ortiz",
      role: "VP of Community Affairs",
      email: "calpolyshpe.outreach@gmail.com",
      major: "M.S. Civil and Environmental Engineering",
      picture: "/officer_pics/2024-25/Vanessa.webp",
      blurb: `\nHey SHPE familia! I am a first-generation college student pursuing my Master’s Degree in Civil & Environmental Engineering with emphasis in Structural Engineering. My passion for my career is driven by the goal to tackle seismic retrofits in cities where access and funds are limited. \n\nAs VP of Outreach Affairs, I am in charge of overseeing SHPE\'s outreach efforts including SHPE Jr. SHPE Jr. is a program that aims to foster high school and middle school student\'s interest in STEM and provide a support system for them through scholarships and informative events. One of the biggest events that we organize for our SHPE Jr. Chapters is Noche de Ciencias. Typical outreach events that the team organizes are classroom visits, student panels, campus tours and fundraisers. My goal is to show others just how capable and resilient they can be, regardless of challenges or factors that may set them aside from the crowd. I am looking forward to developing new activities and events to help make an engineering-centric curriculum accessible to students who don\'t have the chance to explore STEM at an early age. \n\nOutside of SHPE and my studies, you can find me either at Cal Poly's machine shops creating new projects or at Starbucks working as a barista! SHPE has been a huge part of my journey here at Cal Poly, and I hope our new members can say the same. I look forward to meeting you all and having you join us at our outreach events this year!  `,
    },
    {
      name: "Oswaldo Barragan ",
      role: "Academics Officer",
      email: "",
      major: "Mechanical Engineering ",
      picture: "/officer_pics/2024-25/Oswaldo.webp",
      blurb:
        "\nMy name is Oswaldo Barragan and I’m from Hawaiian Gardens, CA. Somethings I enjoy doing is going to the gym and fishing. What I like most about SHPE is the community it provides as I have met some of my close friends here. I was fortunate enough to have been chosen as this years academic officer which I am extremely excited for. My goal as an academic officer is to help at least one individual overall improve their grades and have a successful school year. Following post graduation, I would like to get into the oil industry and hopefully work my way into being an offshore subsea engineer. ",
    },
    {
      name: "Roberto Carmona-Gijon",
      role: "SHPE Jr Chair",
      email: "Shpejr.calpoly@gmail.com",
      major: "Mechanical engineering ",
      picture: "/officer_pics/2024-25/Roberto.webp",
      blurb:
        "\nI learned about SHPE during my junior year of high school through a program named SHPE Jr and have now been able to become SHPE Jr Chair, now I'm able to give back and motivate high schoolers to be involved in STEM the way that SHPE was able to do with me.",
    },
    {
      name: "Yanneli Santos",
      role: "DCAB officer",
      email: "calpolyshpe.dcab@gmail.com",
      major: "\nCivil Engineering",
      picture: "/officer_pics/2024-25/yanneli.webp",
      blurb:
        "\nI am an incoming 3rd year civil engineering student from Lompoc, CA & Jalisco, Mex. I enjoy spending quality time with my friends and my family. I lived in Jalisco for 7 years and my direct family lives there so I go back as often as I can.\n\nSince Spring Quarter of 2023 I've been a Student Assistant for the Latinx Center (La CASA) and our main focus is to provide resources to students and create a community on campus. I decided to join SHPE and take the DCAB role mainly to continue on doing what I do in my current job which is support students and make them feel welcome. I made a lot of friends through SHPE and the club also provides a lot of opportunities for your success so I would suggest to take advantage of them, and if you have any questions feel free to come up to me or any of the other officers and we'll do our best to help. I can't wait to see what amazing things SHPE has stored for this 2024-2025 academic year!",
    },
    {
      name: "Alanis “Lani” Marsh",
      role: "Chief Technical Officer",
      email: "calpolyshpe.cto@gmail.com",
      major: "Computer Science",
      picture: "/officer_pics/2024-25/Lani.webp",
      blurb:
        "\nMy name is Alanis but I usually go by Lani. I am a third year computer science student from San Diego. My favorite thing about SHPE is the community and the professional opportunities. My goal this year is to help get our members internships through bringing in more companies or workshops. Some of my favorite things to do include reading with my cat, rock climbing, going to the beach, and playing video games. A quick fun fact about me is that I own over 100 books",
    },
    {
      name: "Eddy Resendiz ",
      role: "Public Relations",
      email: "calpolyshpe.pr@gmail.com",
      major: "Computer Science ",
      picture: "/officer_pics/2024-25/Eddy.webp",
      blurb:
        "\nHi! I’m Eddy Resendiz, and I’m from San Diego, CA. Currently, some of my hobbies include rock climbing, thrifting, and hiking to view points. One thing I love about SHPE is the community aspect of it, it truly is a home away from home. Connecting with others that have the same or similar background as you is refreshing while studying at a PWI. I hope to serve my role as public relations officer to the fullest extent, so feel free to reach out for any questions!",
    },
    {
      name: "Gabriel Antonio Zepeda",
      role: "Alumni Relations",
      email: "calpolyshpe.alumni@gmail.com",
      major: "Civil Engineering",
      picture: "/officer_pics/2024-25/Gabe.webp",
      blurb:
      "\nWhat's up everyone, my name is Gabe and I am the Alumni Relations officer for the '24-'25 academic school year. I am a fourth year Civil Engineering major, coming out of Stockton, California. I have professional experience in construction management, but I am always looking for ways to explore other sectors of civil engineering to get a feel for what interests me the most. Outside of academics & SHPE, I enjoy cooking, hiking, & concerts. \n\nI joined the SHPE board because I saw an opportunity to be a leader to new students and help our community get connected to industry professionals, and I am excited to see what the corporate team and I can do for the Cal Poly SHPE community!  "
    },
    {
      name: "Eliza Moto",
      role: "Secretary",
      email: "calpolyshpe.sec@gmail.com",
      major: "Mechanical Engineering",
      picture: "/officer_pics/2024-25/Eliza.webp",
      blurb:
      "\nHey y'all! I'm Eliza Moto and this year I am your Secretary. I'm a third year mechanical engineering major from Palm Springs, CA who enjoys hanging out with friends, catching up on sleep, and listening to music. One of my involvements as a student is being part of Thermal Comfort Research with Dr. Mott on campus! My team and I may come into your class to survey you and your peers :3\n\nTo me, SHPE is a heartwarming community that makes the experience at Cal Poly just that much more exciting and encouraging. I have made many friends that I can now call Familia, and together we support each other from academics to social life to professionalism. I/'m happy to call us a home away from home! "
    },
    {
      name: "Juan Rodriguez",
      role: "Chapter Events",
      email: "calpolyshpe.events@gmail.com",
      major: "Civil Engineering",
      picture: "/officer_pics/2024-25/Juan.webp",
      blurb:
      "\nQue rollo con el pollo raza! Im Juan Rodriguez and your chapter events officer for this year. On my free time, you’ll probably find me running, drinking an iced green tea with honey, or listening to Drake while cooking. I’m also a big yapper so please feel free to ask me or conversate about anything.\n\nSHPE has not only been a club for me during my first year but a true family that shares the same value I grew up with. As your chapter events officer, I promise to make this year memorable for our family. Also, believe me, I’m working day n night getting those tactics down for the sports we will be participating in. "
    },
    {
      name: "Andrew Apatiga",
      role: "Transfer Representative",
      email: "calpolyshpe.trep@gmail.com",
      major: "Mechanical Engineering",
      picture: "/officer_pics/2024-25/Andrew.webp",
      blurb:
      "\nHey everyone, my name is Andrew Apatiga and I will be your 24'-25' SHPE Transfer Rep. I am a third year transfer student majoring in mechanical engineering. In my free time, I enjoy  bouldering, listening to music, thrifting, and hanging with friends!\n\nApart from the professional aspect of SHPE, the club has really helped me in building strong friendships and connections. As the Transfer Rep, I hope to provide the same opportunities to transfer students that SHPE has given me. I’m excited to see what this year holds and look forward to making it a great one together!"
    },
    {
      name: "Denis Gonzalez-Reyes",
      role: "SHPEtina Representative",
      email: "calpolyshpe.tinas@gmail.com",
      major: "Aerospace Engineering",
      picture: "/officer_pics/2024-25/Denise.webp",
      blurb:
      "\nHeyyy SHPEtinas and SHPEtina supporters! I am so honored to be your rep and I will hold my promise, that together we will have a ton of growth, empowerment and fun—because Latinas always know how to have more fun! I want to create an inclusive and safe environment for everyone to feel valued, heard and unapologetically themselves. \n\nWe call ourselves Latinas, SHPEtinas, Las Cal Poly Comadres, but ultimately we are strong, and stronger together! Feel free to reach out to me with any questions, concerns or chismes hehehe ;)"
    },
    {
      name: "Yazmin Mejia Aguilar",
      role: "Freshman Representative",
      email: "calpolyshpe.freshmanrep@gmail.com",
      major: "Mechanical Engineering",
      picture: "/officer_pics/2024-25/Yazmin.webp",
      blurb:
      "\nMy hometown is Bakersfield, California. Some of my hobbies include playing tennis, going on walks, and watching Disney movies. My ideal future career would be in the automotive industry. Being in SHPE will help me accomplish many of my career goals. The networking provided through company representatives at meetings is what I like the most about SHPE. I hope to get more students into SHPE in order for them to take advantage of all the opportunities in this great organization."
    }
    
  ];

  return (
    <div className="bg-[#001F5B] flex flex-col justify-center items-center">
      {SHPEboard24.map((officer, index) => (
        <div
          key={index}
          className="hidden lg:flex justify-center items-center w-3/4 md:py-12 py-6 border-b border-white border-opacity-15"
        >
          <Image
            src={officer.picture}
            alt={officer.name}
            width={288}
            height={384}
            className="w-72 h-96 max-w-full max-h-full object-cover aspect-[3/4]"
            priority
          />

          <div className="w-[800px] h-auto flex flex-col justify-center p-6 ml-12">
            <h1 className="text-white font-bold text-2xl font-sans mb-4">
              {officer.role}
            </h1>
            <h2 className="text-white text-lg mb-2">{officer.name}</h2>
            <h3 className="text-white text-lg mb-2">{officer.major}</h3>
            <h4 className="text-white text-lg mb-2">{officer.email}</h4>
            <h5 className="text-white text-lg whitespace-pre-wrap">
              {officer.blurb}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}
