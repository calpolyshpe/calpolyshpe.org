export default function RegularText({ text }) {
    return (
        <div className="bg-[#001F5B] flex justify-center items-center">
            <div className="lg:w-3/5 w-3/4 h-auto">
                <h1 className="text-white lg:text-xl md:text-lg sm:text-md text-sm font-sans md:pb-14 pb-6 md:pt-24 pt-6 border-b border-white border-opacity-15">
                    {text}
                </h1>
            </div>
        </div>
    );
}
