export default function LightBlueWPic({ imgURL, title, content }) {
    return (
        <div className="bg-[#001F5B] relative md:pt-14">
            <div className="bg-[#72A9BE] hidden w-full h-96 md:flex items-center justify-center">
                <div className="flex justify-center items-center w-[850px] h-auto md:my-14 my-6">
                    <div className="w-80 h-auto flex flex-col justify-center items-center mr-6">
                        <h1 className="text-white lg:text-2xl md:text-xl font-medium font-sans">
                            {title}
                        </h1>
                        <h2 className="text-white lg:text-xl md:text-sm font-sans md:py-6 py-3 md:px-2 whitespace-pre-line">
                            {content}
                        </h2>
                    </div>
                    <img
                        src={imgURL}
                        className="right-14 top-[-50px] w-[450px] h-[500px] object-cover ml-6"
                        alt="Outreach"
                    />
                </div>
            </div>
            <div className="md:hidden flex flex-col justify-center items-center">
                <img
                    src={imgURL}
                    className="w-3/4 h-auto object-cover"
                    alt="Outreach"
                />
                <div className="bg-[#72A9BE] flex flex-col justify-center items-center w-full h-44 mt-6">
                    <div className="w-3/4 h-auto">
                        <h1 className="text-white text-[13px] font-medium font-sans text-center">
                            {title}
                        </h1>
                        <h2 className="text-white text-[9px] font-sans md:pt-6 pt-3 md:px-2">
                            {content}
                        </h2>
                    </div>

                </div>

            </div>
        </div>
    );
}