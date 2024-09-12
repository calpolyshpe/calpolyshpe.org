import HeroBanner from "@/components/HeroBanner";
import WhatIs from "@/components/WhatIs";

export default function Calendar() {
    return (
        <main>
            <div className=" bg-[#001F5B] flex flex-col items-center justify-center">
                <h1 className="text-white lg:text-5xl md:text-3xl text-sm border-b border-white border-opacity-50 w-3/4 mb-7 p-5 items-center font-extrabold text-center font-sans">
                    Events Calendar
                </h1>
                <iframe src="https://embed.styledcalendar.com/#ha3qBEJpujiz31OfHzEA" title="Styled Calendar" className="styled-calendar-container lg:w-[900px] md:w-[500px] w-72 h-auto" data-cy="calendar-embed-iframe"></iframe>
                <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
            </div>
        </main>
    );
}