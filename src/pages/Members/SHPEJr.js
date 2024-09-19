import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import LightBlueWPic from "@/components/LightBlueWPic";

export default function SHPEJr() {
    return (
        <main>
            <HeroBanner title={"SHPE Jr"} imgUrl={'/SHPEJrImgs/SHPEJr_Cover.jpg'}/>
            <WhatIs question={"What is SHPE Jr?"} response={"SHPE Jr as a program aims to provide more education for those in junior high and high school in regard to STEM related majors in college. Starting early is the key to successfully exploring a future in science, technology, engineering or mathematics. SHPE Jr aims to provide mentorship, campus trips, networking opportunities, college tips, activities like Noche de Ciencias, as well as other activities that can give insight to students about what STEM and STEM adjacent majors can offer!"}/>
            <LightBlueWPic imgURL={'/SHPEJrImgs/Outreach.png'} title={"What we do"} content={"We host hands-on workshops for students in elementary, middle, and high school to introduce them to engineering. The hands-on activities include popsicle stick catapult & bridge competitions, balloon rocket team building & communication activity, and paper and straw sailboat design."}/>
            <WhatIs question={"Our Jr chapters"} response={"Our first SHPE Jr chapter at Pioneer Valley High School was established in 2013, followed by Santa Maria High School in 2017. Our members mentor the high school students, share personal insights on preparing for college, and encourage Jr members to pursue careers in the STEM fields. Currently, we are looking to expand to other schools to outreach to as many students as we can and help all schools near San Luis Obispo learn about STEM majors."}/>
        </main>
    );
}