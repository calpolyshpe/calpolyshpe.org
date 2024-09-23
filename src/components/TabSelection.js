export default function TabSelection({ question, response }) {
    return (
        <div className="bg-[#001F5B] h-screen flex flex-col items-center">
            <img 
                src={"/HomeImgs/EventsTab.png"}
                className="flex h-auto lg:w-[550px] md:w-96 w-44 z-10"
                alt="Tab Photo"
            />
            <div className="bg-[#72A9BE] lg:w-[750px] md:w-[500px] w-64 h-28 md:h-60 lg:h-96 -mt-3 mx-auto rounded-md relative "></div>
        </div>

    );
}