import { useState } from "react";
export default function TabSelection({ question, response }) {
    const [selectedTab, setSelectedTab] = useState('Events')
    const images = {
        Familia: "/HomeImgs/FamiliaTab.jpg",
        Events: "/HomeImgs/EventsTab.png",
        Partners: "/Sponsor_Logos.png"
    };
    const about ={
        Familia: "SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development. SHPE’s vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians, and engineers.",
        Events: "Members are able to help with outreach events that occur to help empower the youth. Intramural sports through SHPE is also offered!",
        Partners: "We appreciate all of those that support our mission to ensure students of Hispanic/Latinx descent have opportunities to help develop themselves professionally. We thank all of our sponsors for their kindness and generosity. With the resources provided, our chapter can do more for every member in our organization, helping bring opportunities that we might not have had otherwise. "
    }
    return (
        <div className="bg-[#001F5B] h-screen flex flex-col items-center">
            <img 
                src={images[selectedTab]}
                className="flex h-auto lg:w-[550px] md:w-96 w-44 z-10"
                alt="Tab Photo"
            />
            <div className="bg-[#72A9BE] lg:w-[750px] md:w-[500px] w-64 h-28 md:h-60 lg:h-96 -mt-3 mx-auto rounded-md relative flex flex-col justify-center">
                <div className="flex flex-row items-center justify-between px-16 border-b border-white border-opacity-50 pb-7">
                    <button className={`text-white hover:text-[#8f8f8f] ${selectedTab === 'Familia' ? 'font-bold underline' : ''}`} onClick={() => setSelectedTab('Familia')}> Familia </button>
                <button className={`text-white hover:text-[#8f8f8f] ${selectedTab === 'Events' ? 'font-bold underline' : ''}`} onClick={() => setSelectedTab('Events')}> Events </button>
                <button className={`text-white hover:text-[#8f8f8f] ${selectedTab === 'Partners' ? 'font-bold underline' : ''}`} onClick={() => setSelectedTab('Partners')}> Partners </button>
                </div>
                <h1 className="text-white flex justify-center items-center">{about[selectedTab]}</h1>
                
            </div>
        </div>

    );
}