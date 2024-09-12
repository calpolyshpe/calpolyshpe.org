export default function WhatIs({ question, response }) {
    return (
        <div className="bg-[#001F5B] text-left flex items-center justify-center">
            <div className="lg:w-3/5 w-3/4 h-auto md:my-14 my-6">
                <h1 className="text-white lg:text-3xl md:text-xl text-[13px] font-medium font-serif italic"> {question} </h1>
                <h2 className="text-white lg:text-xl md:text-sm text-[9px] font-sans md:pt-6 pt-3"> {response} </h2>
            </div>
        </div>

    );
}
