import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import LightBlueWPic from "@/components/LightBlueWPic";

export default function SHPEJr() {
    return (
        <main>
            <HeroBanner title={"SHPE Jr"} imgUrl={'/SHPEJrImgs/SHPEJr_Cover.jpg'}/>
            <WhatIs question={"What is SHPE Jr?"} response={"SHPE Jr as a program aims to provide more education for those in junior high and high school in regard to STEM related majors in college. Starting early is the key to successfully exploring a future in science, technology, engineering or mathematics. SHPE Jr aims to provide mentorship, campus trips, networking opportunities, college tips, activities like Noche de Ciencias, as well as other activities that can give insight to students about what STEM and STEM adjacent majors can offer!"}/>
            <LightBlueWPic imgURL={'/SHPEJrImgs/Outreach.png'} title={"What we do"} content={"We host hands-on workshops for students in elementary, middle, and high school to introduce them to engineering. The hands-on activities include popsicle stick catapult & bridge competitions, balloon rocket team building & communication activity, and paper and straw sailboat design."}/>
        </main>
    );
}