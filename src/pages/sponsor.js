import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";

export default function Sponsor() {
    return (
        <main>
            <HeroBanner imgUrl={'/SHPE_Banquet_Table.jpg'} title={'Sponsors'} />
            <WhatIs question={"Why become a sponsor?"} response={"Our sponsors have the unique opportunity to engage, support, educate, and advance the careers of Hispanic students and professionals. Your participation further affirms your commitment to diversity in your recruitment and retention efforts. Our sponsors have the creative freedom to choose which events to sponsor. Tiered packages are available for our companies' convenience as well. Partners of SHPE will have their careers page linked on our website, and the top five (5) partners will receive two (2) free seats to our Annual Banquet."} />
        </main>
    );
}