export default function HeroBanner({ imgUrl, title, subtitle }) {
// Creates the banner image on the page where it also contains the title text of page over
    
    return (
        
        <div className="bg-[#001F5B] w-auto mx-auto relative">
            <img
                src={imgUrl}
                className="opacity-45 object-cover"
                alt="Mainpage GroupPhoto" />
            <div className="absolute flex flex-col justify-center items-center text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto whitespace-normal lg:h-[600px] lg:w-[600px] md:w-[350px] md:h-[350px] sm:w-[100px] sm:h-[100px] m-auto rounded-lg">
                <h1 className="text-white font-sans lg:text-5xl md:text-3xl text-sm font-extrabold text-center leading-relaxed">{title}</h1>
                <h2 className="text-white font-['Road_Rage'] lg:text-xl md:text-sm text-xxs text-center mt-0.5 md:mt-2">{subtitle}</h2>
            </div>
        </div>

    );
}