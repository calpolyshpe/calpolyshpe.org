export default function HeroBanner({ imgUrl, title, subtitle, bg }) {

    return (
        <div className="bg-[#001F5B] w-screen min-h-screen flex items-center">
            <div className={`${bg} bg-cover bg-top opacity-45 h-screen`}>
                <h1 className="text-white text-5xl font-extrabold text-center leading-relaxed opacity-100">{title}</h1>
                <h2 className="text-white text-xl font-extrabold text-center pt-20">{subtitle}</h2>
                
            </div>
            {/* <div className="flex items-center text-white text-5xl font-extrabold text-center leading-relaxed">
                {title}
            </div>
            <div className="flex items-center text-white text-xl font-extrabold text-center pt-20">
                {subtitle}
            </div> */}
        </div>

    );
}