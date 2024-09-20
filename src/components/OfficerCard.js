export default function OfficerCard() {
    // { 'name': '', 'role': '', 'email': '', 'major':'','picture': '/Officer_Pics/.jpg', 'blurb': '' }

    const SHPEboard = 
    [{ 'name': 'Kaitlyn Corral', 'role': 'President', 'email': 'calpolyshpe.prez@gmail.com', 'major':'Mechanical Engineering','picture': '/Officer_Pics/Kaitlyn.jpg', 'blurb': 'Hi everyone, my name is Kaitlyn Corral and I am the SHPE President for the \'24-\'25 academic school year! I am in my second year of mechanical engineering and am originally from Bakersfield, CA. Outside of SHPE, I am a Shop Technician for the Mustang Machine Shops. Stop by and you might see me working! I am thrilled to play such an important role in a club that means so much to me! Before officially attending Cal Poly I had the opportunity to get the SHPE experience and knew that SHPE Cal Poly was where I was meant to be. This year, I have goals of increasing our club membership and retention and growing our SHPEtina community. I hope that you consider being a part of SHPE and joining our Familia!' }, 
    { 'name': 'Asarel Castellanos', 'role': 'Treasurer', 'email': 'calpolyshpe.treasurer@gmail.com', 'major':'Economics','picture': '/Officer_Pics/Asarel.jpg', 'blurb': 'Hello everyone! I\'m your \'24-\'25 SHPE Treasurer. I am currently a senior and a second-year transfer studying Economics. I\'m from Los Angeles, CA. Outside of SHPE, I build and maintain open-source projects, work at the Transfer Center and play sports (tennis, basketball, soccer, etc). I am excited to serve and support SHPE this year, as your Treasurer! Before joining Cal Poly SLO I was nervous about coming back to school after taking a break for 2 years. After attending the first general meeting I knew this was the club for me. Two major goals I have this year is to increase the amount of collaborative events (with other clubs) we have this year and to support our SHPEtinas by increase their number of events (and budget, iykyk).' },
    { 'name': 'Yitzel Vazquez', 'role': 'VP of Corporate Affairs', 'email': 'calpolyshpe.vp@gmail.com', 'major':'Mechanical Engineering','picture': '/Officer_Pics/Yitzel.jpeg', 'blurb': 'Hello everyone, my name is Yitzel Vazquez, and I am the Vice President of Corporate Affairs for the 2024-2025 school year. I am a third-year mechanical engineering student from Oxnard, CA. Besides my involvement in SHPE, I am also a part of Imagen Y Espiritu Ballet Folklorico. A fun fact about me is that I started folklorico when I was 7 and that is when I grew a love for dancing. My goals for this year include providing our members with more opportunities to connect with company representatives and alumni, as well as offering additional chances to help prepare them for the industry. I hope to see you join our SHPE familia!'},
    { 'name': 'Angie Balderas', 'role': 'VP of Membership', 'email': 'calpolyshpe.membership@gmail.com', 'major':'Aerospace','picture': '/Officer_Pics/Angie.jpeg', 'blurb': 'I have a dog named Frijol 🫘. I like listening to Karol G. My go to drink is an iced strawberry matcha or taro boba. I joined SHPE because I was part of SHPE Jr. in high school and I could tell everyone wanted to be a support system for the students. Being part of SHPE has been really fun and I’ve made a lot of memories and I hope to make many more.' }
    ]

    return (
        <div className="bg-[#001F5B] flex flex-col justify-center items-center">

            {SHPEboard.map((officer, index) => (
                <div key={index} className=" hidden lg:flex justify-center items-center w-3/4 md:py-12 py-6 border-b border-white border-opacity-15">
                    <img
                        src={officer.picture}
                        alt={officer.name}
                        className="w-72 h-96 object-cover left-0"
                    />
                    <div className="w-[800px] h-auto flex flex-col justify-center p-3 ml-12">
                        <h1 className="text-white font-bold text-2xl font-sans mb-3">{officer.role}</h1>
                        <h2 className="text-white text-lg mb-1">{officer.name}</h2>
                        <h3 className="text-white text-lg mb-1">{officer.major}</h3>
                        <h4 className="text-white text-lg mb-3">{officer.email}</h4>
                        <h5 className="text-white text-lg">{officer.blurb}</h5>
                    </div>

                </div>
            ))}
        </div>

    );
}