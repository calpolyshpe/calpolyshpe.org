import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";
import LightBlueWPic from "@/components/LightBlueWPic";
import RegularText from "@/components/RegularText";

export default function SHPEtina() {
    return (
        <main>
            <HeroBanner title={"SHPEtinas"} imgUrl={"/SHPEtinaImgs/Latinas.jpg"}/>
            <WhatIs question={"What is SHPEtinas?"} response={"The SHPEtinas program accelerates and affirms Latina representation at all levels of STEM corporate and academic leadership. Encouraging Latinas to pursue higher education and careers in STEM recognizes the unique perspective they bring to solving the world's most pressing problems while creating new, influential role models for future leaders."}/>
            <LightBlueWPic content={"While women make up 24% of the STEM field, only 3% are Latinas despite being 9% of the population. Latina members constitute over 33% of our membership."} imgURL={'/SHPEtinaImgs/selfie.jpg'}/>
            <RegularText text={"Our goal for this year is to accelerate and affirm Latina representation within our chapter including but not limited to sending an equal representation to the SHPEtinas Conference at the National Convention and other events."}/>
        </main>
    );
}