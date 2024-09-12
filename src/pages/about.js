import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import LightBlueWPic from "@/components/LightBlueWPic";

export default function About() {
    return (
        <main>
            <HeroBanner imgUrl={'/2022 SHPE Banquet.jpg'} title={'Our History And Values'} />
            <WhatIs question={"Cal Poly SHPE History"} response={"The Society of Hispanic Professional Engineers Student Chapter of California Polytechnic State University, San Luis Obispo was established in 1978 as part of a commitment to the recruitment and retainment of Hispanic engineering and science students. SHPE Cal Poly is an organization in which student leaders and corporate sponsors volunteer their time and efforts to help students and the community. SHPE Cal Poly concerns itself with"} />
            <LightBlueWPic content={"1. Increasing the number of Hispanics entering the fields of engineering, science, or any other professions. \n 2. Providing recruitment and tutoring programs for students interested in pursuing a college education. \n 3. Improving the quality of education and training programs for preparing Hispanic students to become professionals."} imgURL={'/SHPEJrImgs/Outreach.png'}/>
        </main>
    );
}