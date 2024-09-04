export default function Homepage() {

    return(
        <div className="bg-[#001F5B] min-h-screen">
            <div className=" relative">
                <img 
                    src= "/Mainpage_GroupPhoto.jpg"
                    className="opacity-45 w-auto h-auto object-cover"
                    alt= "Mainpage GroupPhoto"
                ></img> 
                <div className="absolute inset-0 flex items-center text-white text-5xl font-extrabold text-center left-1/2 transform -translate-x-1/2 leading-relaxed">
                    Society Of Hispanic Professional Engineers
                </div>
                <div className="absolute inset-0 flex items-center text-white text-xl font-extrabold text-center left-1/2 top-1/2 transform -translate-x-1/2 pt-20">
                    California Polytechnic State University - San Luis Obispo
                </div>
            </div>

        </div>

    );
}