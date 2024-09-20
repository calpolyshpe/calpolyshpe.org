import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import LightBlueWPic from "@/components/LightBlueWPic";
import RegularText from "@/components/RegularText";

export default function About() {
    const SHPEvalues = [{ 'pilar': 'Familia', 'color': 'text-[#0070C0]', 'body': 'We take responsibility for our collective strength and passion by developing communities, building a diverse and inclusive membership, and challenging each other to be our best.' }]
    return (
        <main>
            <HeroBanner imgUrl={'/2022 SHPE Banquet.jpg'} title={'Our History And Values'} />
            <WhatIs question={"Cal Poly SHPE History"} response={"The Society of Hispanic Professional Engineers Student Chapter of California Polytechnic State University, San Luis Obispo was established in 1978 as part of a commitment to the recruitment and retainment of Hispanic engineering and science students. SHPE Cal Poly is an organization in which student leaders and corporate sponsors volunteer their time and efforts to help students and the community. SHPE Cal Poly concerns itself with"} />
            <LightBlueWPic content={`1. Increasing the number of Hispanics entering the fields of engineering, science, or any other professions. 
                2. Providing recruitment and tutoring programs for students interested in pursuing a college education. 
                3. Improving the quality of education and training programs for preparing Hispanic students to become professionals.`} imgURL={'/Glassup.png'} />
            <RegularText text={"Ever since its founding, the members of Cal Poly SHPE have worked to ensure the community of Hispanic/Latinx members at California Polytechnic State University are able to find their home away from home, helping them progress through their time here at Cal Poly and in their future positions as well."} />
            <WhatIs question={"SHPE History"} response={"The Society of Hispanic Professional Engineers (SHPE) was founded in Los Angeles, California, in 1974 by a group of engineers employed by the city of Los Angeles. Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community. The concept of Networking was the key basis for the organization. SHPE quickly established two student chapters to begin the network that would grow to encompass the nation as well as reach countries outside the United States. Today, SHPE enjoys a strong but independent network of professional and student chapters throughout the nation."} />
            {/* <WhatIs question={"SHPE Values"}/> */}
            <div className="bg-[#001F5B] flex justify-center items-center">
                <div className="lg:w-3/5 w-3/4 h-auto">
                    <h1 className="text-white lg:text-3xl md:text-xl text-[13px] font-medium font-serif italic border-white border-t border-opacity-15 md:pt-14 pt-6">
                        SHPE Values </h1>
                    <h2 className="text-[#0070C0] flex justify-center lg:text-2xl md:text-xl text-[13px] font-medium font-sans md:mt-6 mt-3">Familia</h2>
                    <h3 className="text-white flex justify-center lg:text-xl md:text-sm text-[9px] font-sans md:mt-6 mt-3" >We take responsibility for our collective strength and passion by developing communities, building a diverse and inclusive membership, and challenging each other to be our best.</h3>
                    <h2 className="text-[#D33A02] flex justify-center lg:text-2xl md:text-xl text-[13px] font-medium font-sans md:mt-6 mt-3">Service</h2>
                    <h3 className="text-white flex justify-center lg:text-xl md:text-sm text-[9px] font-sans md:mt-6 mt-3" >We act on a foundation of service. We commit to deliver the highest levels of quality, integrity, and ethical behavior. We act with empathy, patience, and understanding.</h3>
                    <h2 className="text-[#72A9BE] flex justify-center lg:text-2xl md:text-xl text-[13px] font-medium font-sans md:mt-6 mt-3">Education</h2>
                    <h3 className="text-white flex justify-center lg:text-xl md:text-sm text-[9px] font-sans md:mt-6 mt-3" >We value formal education and professional development. We are dedicated to continuous improvement and renewal. We learn from successes, setbacks, and each other.</h3>
                    <h2 className="text-[#FD652F] flex justify-center lg:text-2xl md:text-xl text-[13px] font-medium font-sans md:mt-6 mt-3">Resilience</h2>
                    <h3 className="text-white flex justify-center lg:text-xl md:text-sm text-[9px] font-sans md:mt-6 mt-3" >We embrace our diverse cultures and communities, which enable us to adapt, thrive, and persist with optimism.</h3>
                </div>

            </div>
        </main>
    );
}